const isLoaded = ({app}) => {
    return app.app.loaded && !app.app.error
}
const isError = ({app}) => {
    return app.app.loaded && app.app.error
}

export default {
    isLoaded,
    isError
};
