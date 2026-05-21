/* Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

 Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2. */


function secondHighest(s) {
    let l = -1;
    let sl = -1;

    for (char of s) {
        if (!isNaN(Number(char))) {
            if (Number(char) > l) {
                sl = l;
                l = Number(char)
            } else if (Number(char) > sl && Number(char) !== l) {
                sl = Number(char);
            }
        }
    }
    return sl === l ? -1 : sl;
};