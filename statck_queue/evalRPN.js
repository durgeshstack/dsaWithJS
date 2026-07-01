function divide(a, b) {
    return Math.trunc(a / b);
}
function add(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}
function sub(b,a) {
    return a - b;
}
function isSymbol(char) {
    return char === "*" || char === "/" || char === "+" || char === "-";

}

function evalRPN(tokens) {
    let stack = [];
    for (const char of tokens) {
        if (!isSymbol(char)) {
            stack.push(Number(char));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if (char === "+") {
                stack.push(add(a, b));
            } else if (char === '-') {
                stack.push(sub(a,b));
            } else if (char === "*") {
                stack.push(mul(a, b));
            } else {
                stack.push(divide(b, a));
            }
        }
    }
   
    return stack[0];
};