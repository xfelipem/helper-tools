export const addClass = function (el, className) {
    if (!hasClass(className)) {
        el.classList.add(className);
    }
};

export const removeClass = function (el, className) {
    if (hasClass(className)) {
        el.classList.remove(className);
    }
}

export const hasClass = function (el, className) {
    return el.classList.contains(className);
}

const dom = {
    addClass,
    removeClass,
    hasClass
};

export default dom;