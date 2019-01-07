function sum() {
    // return Array.from(arguments).reduce((acc,el) => acc + el);
    const argArr = Array.from(arguments);
    return argArr.reduce((acc,el) => acc + el);
}

console.log(sum(1,2,3,4));

//with rest operator
function restsum(...args) {
    return args.reduce((acc, el) => acc + el);
}


console.log(restsum(1,2,3,4,5));

