/**
 * Recursively calculates the sum of all numbers in an array.
 *
 * @param {number[]} numbers - The array of numbers to be summed.
 * @param {number} [currentIndex=0] - The index of the current element being added.
 * @returns {number} - The sum of all numbers in the array.
 *
 * @example
 * calculateArraySum([1, 2, 3, 4, 5]); // returns 15
 */
function calculateArraySum(numbers, currentIndex = 0) {
    if (currentIndex === numbers.length) return 0;
    return numbers[currentIndex] + calculateArraySum(numbers, currentIndex + 1);
}

const result = calculateArraySum([1, 2, 3, 4, 5]);
console.log(result); // 15
