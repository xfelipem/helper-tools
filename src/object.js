export const _forEach = function (object, method) {
    Object.keys(object).forEach(function (key) {
        let parameter = object[key];

        method(parameter, key, object);
    });

    return object;
}