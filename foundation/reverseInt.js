/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */

 function reverse(x) {
    const isNeg = x < 0;
    
    const reversed = Number(
        Math.abs(x)
            .toString()
            .split("")
            .reverse()
            .join("")
    );

    const result = isNeg ? -reversed : reversed;

    // 32-bit signed integer range
    const MIN = -(2 ** 31);
    const MAX = (2 ** 31) - 1;

    return (result < MIN || result > MAX) ? 0 : result;
};

console.log(reverse(123))