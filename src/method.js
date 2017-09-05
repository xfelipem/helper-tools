export const bindThisToMethods = function (methods, self) {
    return methods.map((method) => method.bind(self));
}

export const executeIf = function (condition, method, args, self) {
    if (condition) {
        method.apply(self || method, args)();
    }
}

const method = {
    bindThisToMethods,
    executeIf
    
};

export default method;