import { forEach } from './object';

export const urlHasParameter = function (parameter) {
    const urlPath = getUrlPath();
    let hasParameter;
    //console.log({ parameter });
    for (const param of urlPath.split('/')) {

        if (parameter === param) {
            hasParameter = true;
        }
    }

    return hasParameter;
};

export const getAllParametersFromUrl = function () {
    return getUrlPath().split('/');
};

export const getUrlPath = function () {
    return window.location.pathname;
};

export const changeUrlParametersFromObject = function (stateObject, conditions, baseUrl) {
    let url = baseUrl || '/';
    //console.log({ stateObject });
    Object.keys(stateObject).forEach((key) => {
        const state = stateObject[key];
        //console.log({ key, state });
        url += key + '/' + state + '/';

        conditions.map((condition) => {
            if (condition) {
                url += key + '/false/';
            }
        });
    });
    //console.log({ url });
    window.location.href = url;
};

export const setStateFromUrlParameters = function (stateObject) {
    Object.keys(stateObject).forEach((key) => {
        //console.log(state, key);
        const paramFromUrl = getParameterValueFromUrlParameter(key);
        //console.log(paramFromUrl);
        if (paramFromUrl !== 'false' && paramFromUrl !== false) {
            setSearchSubState(key, paramFromUrl);

            if (paramFromUrl.search(',') !== -1) {
                setSearchSubState(key, paramFromUrl.split(','));
            }
        }
    });
};

const getParameterValueFromUrl = function (parameter) {
    const url = getUrlPath();
    const lengthParameter = parameter.length;
    const paramPosition = url.search(parameter);
    const valuePosition = paramPosition + lengthParameter + 1;
    const finalArrya = url.slice(valuePosition).split('/');

    if (paramPosition === -1) {
        return false;
    }

    return url.slice(valuePosition).split('/')[0];
};


export const getParameterValueFromUrl_2 = function (param) {
    const parameters = getAllParametersFromUrl();
    let value;
    //console.log({ parameter });
    forEach(parameters, (parameter, key) => {
        executeIf(parameter === param, () => {
            value = parameters[Number(key) + 1];
        })
    });

    return value;
}

const url = {
    urlHasParameter,
    getUrlPath,
    changeUrlParametersFromObject,
    getParameterValueFromUrl
};

export default url;