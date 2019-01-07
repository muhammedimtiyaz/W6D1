Function.prototype.curry = function (numArgs) {
    const numbers = [];
    const that = this;
    return function _curriedSum() {
        numbers.concat(Array.from(arguments));
        // debugger
        if (numbers.length === numArgs) {
            // return that.apply(null,numbers);
            return that(...numbers);
        }
        return _curriedSum;
    };
};
