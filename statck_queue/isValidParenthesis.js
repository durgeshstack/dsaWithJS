function isOpen(char) {
    return ["{", "[", "("].includes(char)
}

function isPair(closeChar, openChar) {
    const pair = {
        "]": "[",
        "}": "{",
        ")": "("
    }

    return pair[closeChar] === openChar;

}

function isValidParenthesis(s) {
    let stack = [];
    for (let char of s) {
        if (isOpen(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const peak = stack[stack.length - 1];
            if (isPair(char, peak)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;

};