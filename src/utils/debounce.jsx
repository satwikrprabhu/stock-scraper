const debounce = (fn, wait = 1000) => {
    var timeout;
    return (...args) => {
        var context = this;
        var later = () => {
            timeout = null;
            fn.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
export default debounce;