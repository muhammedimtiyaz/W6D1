function curriedSum (numArgs) {
    const numbers = [];
    return function _curriedSum (num) {
        numbers.push(num);
        // debugger
        if (numbers.length === numArgs) {
            const result = numbers.reduce((acc, el) => acc + el);
            console.log(result);
            return result;
        }
        return _curriedSum;   
    };
}

// let sum = curriedSum(4);
// const sum1 = sum(5);
// const sum2 = sum1(30);
// const sum3 = sum2(20);
// const sum4 = sum3(1);

const sum = curriedSum(4);
sum(5)(30)(20)(1);

curriedSum(4)(5)(30)(20)(1);