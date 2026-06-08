function helper(i, j, arr) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
function reverseStr(s, k) {
    const strarr = s.split("");
    let st = 0;
    let n = strarr.length - 1;

    while (st < n) {
        const diff = n - st;
        if (diff < k) {
            helper(st, n, strarr);
            break;
        } else {
             helper(st, st + k-1, strarr);
        }
       
        st = st + (2 * k);

    }

    return strarr.join("");
};