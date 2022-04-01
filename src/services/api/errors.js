import configRouter from "@config/router"

export const errorHandler = async ({request, data}) => {
    return await request(data)
        .then(response => {
            if (response.status === 401) {
                window.location.href = configRouter.route.ERROR;
                throw new Error(response.data.error.message);
            }
            if (response.status === 403) {
                window.location.href = configRouter.route.ERROR;
                throw new Error(response.data.error.message);
            }
            if (response.status === 404) {
                window.location.href = configRouter.route.ERROR;
                throw new Error(response.data.error.message);
            }
            if (response.status >= 500) {
                window.location.href = configRouter.route.ERROR;
                throw new Error(response.data.error.message);
            }
            return response.data;
        })
        .then(data => {
            if (!data.success) {
                window.location.href = configRouter.route.ERROR;
                throw new Error(data.message.error);
            }
            return data.data;
        });
};
