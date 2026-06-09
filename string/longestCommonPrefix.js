function longestCommonPrefix(strs) {
    let n = strs.length;
    if (n === 1) {
        return strs[0];
    }
    let ans = "";
    const sotred = strs.sort();
    const firstWord = sotred[0];
    const lastWord = sotred[n - 1];
    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] !== lastWord[i]) {
            return ans;
        }
        ans += firstWord[i];
    }
    return ans;
};