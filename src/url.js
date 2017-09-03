export const urlHasParameter = function (parameter) {
    var hasParameter;
    console.log({ parameter });
    for (let param of getUrlPath().split('/')) {

        if (parameter = param) {
            hasParameter = true;
        }
    }

    return hasParameter;
};

export const getUrlPath = function () {
    return window.location.pathname;
};

const url = {
    urlHasParameter,
    getUrlPath
};

export default url;