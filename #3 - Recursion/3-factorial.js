/**
 * Calculates the factorial of a non-negative integer using factorial.
 *
 * @param {number} n - A non-negative integer (0 or greater).
 * @returns {number} - The factorial of the given number.
 *
 * @example
 * factorial(4); // returns 24 (4 * 3 * 2 * 1)
 * factorial(0); // returns 1
 */

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4)); // Output: 24
