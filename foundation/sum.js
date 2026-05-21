/*  Design a function called `sum` that can take any number of arguments and return their total. The function should work for both fixed and variable number of arguments using JavaScript features. Only numerical arguments will be provided. */



function sum(...args) { 
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(100, 200, 300, 400)); // Output: 1000
