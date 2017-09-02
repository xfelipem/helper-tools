export const bindThisToMethods = function (methods, self) {
    return methods.map((method) => method.bind(self));
}

export const executeIf = function (condition, method, args, self) {
    if (condition) {
        method.apply(self || method, args)();
    }
}

export const executeIfElse = function (condition, method_1, args_1, self_1, method_2, args_2, self_2) {
    if (condition) {
        method_1.apply(self_1 || method_1, args_1)();
    } else {
        method_2.apply(self_2 || method_2, args_2)();
    }
};

const method = {
    bindThisToMethods,
    executeIf,
    executeIfElse
};

export default method;