

function removeOuterParentheses(s) {
    let stack = [];
    let result = "";
    let curr = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        curr += char;
        if (char === "(") {
            stack.push(char)
        } else {
            stack.pop();
            if (stack.length === 0) {
                result += curr.slice(1, -1);
                curr = "";
            }
        }
    }
    return result;
};
function removeOuterParentheses(s) {
    let result = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === "(") {
            if (count > 0) result += char;
            count++;
        } else {
            count--;
            if (count > 0) result += char;
        }
    }
    
    return result;
}
