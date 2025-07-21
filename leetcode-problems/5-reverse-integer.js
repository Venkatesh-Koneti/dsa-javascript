/*
    1. Reverse Integer

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
    the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
        Input: x = 123
        Output: 321

    Example 2:
        Input: x = -123
        Output: -321

    Example 3:
        Input: x = 120
        Output: 21
*/

var reverse = function(x) {
    let result = 0;
    const MIN = Math.pow(-2, 31), MAX = Math.pow(2, 31) - 1;
    while (x !== 0) {
        let last = x % 10;      
        x  = parseInt(x / 10); 
        result = (result * 10) + last;
        if (result < MIN || result > MAX) return 0;
    }
    return result;
};

const result = reverse(-123)
console.log(result); // -321
