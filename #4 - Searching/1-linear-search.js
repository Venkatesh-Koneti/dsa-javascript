/**
 * Finds the position of the target number in the array.
 *
 * @param {number[]} arr - The list of numbers to search in.
 * @param {number} target - The number to find.
 * @returns {number} Index of the target if found, otherwise -1.
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [10, 23, 45, 70, 11];
const target = 70;

const result = linearSearch(numbers, target);
console.log(result);