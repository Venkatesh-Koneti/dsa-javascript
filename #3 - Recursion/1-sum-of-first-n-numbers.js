/**
 * Recursively calculates the sum of first 'n' natural numbers.
 *
 * @param {number} n - A non-negative integer.
 * @returns {number} - The sum of numbers from 1 to n.
 *
 * @example
 * sumOfnNumbers(5); // returns 15
 */
function sumOfnNumbers(n) {
    if (n === 0) return 0;
    return n + sumOfnNumbers(n - 1);
}

const result = sumOfnNumbers(5);
console.log(result); // result - 15
