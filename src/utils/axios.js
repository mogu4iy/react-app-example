export const axiosRequest = async ({
                                       method = 'GET',
                                       url,
                                       params = {},
                                       query,
                                       options,
                                       body,
                                   }) => {
    const request = {
        method: method,
        url: url,
        ...options,
    };
    switch (method) {
        case 'GET':
            request.params = params;
            break;
        default:
            request.data = body;
    }
    if (typeof query === 'object' && query !== null && Object.entries(query).length > 0) {
        request.url = `${request.url}?${Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&")}`
    }
    return request;
};