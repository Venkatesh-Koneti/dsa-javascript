// arrays.js

/**
 * Represents a person with a name and age.
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 */

// Declaration
/** @type {Person} */
let person = {
    name: "Piyush",
    age: 25,
};

/** @type {Array<string|Person>} */
let arr = ["apple", "banana", "cherry", person];
console.log(arr.length); // Know the length of an array

// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++;
}

// # Inbuilt Loop Methods
/** @type {number[]} */
const numbers = [1, 2, 3, 4, 5];

/**
 * Maps each element in the array using a callback function.
 * @param {number} item - The current element being processed.
 * @param {number} index - The index of the current element.
 * @param {number[]} array - The array being traversed.
 * @returns {number} - The transformed value.
 */
const mappedNumbers = numbers.map((item) => item + 5);

/**
 * Filters elements in the array based on a condition.
 * @param {number} item - The current element being processed.
 * @returns {boolean} - True if the element passes the condition.
 */
const filteredNumbers = numbers.filter((item) => item > 3);

/**
 * Reduces the array to a single value.
 * @param {number} prev - The accumulated value.
 * @param {number} item - The current element being processed.
 * @returns {number} - The reduced value.
 */
const reducedValue = numbers.reduce((prev, item) => prev + item, 2);

/**
 * Checks if at least one element satisfies a condition.
 * @param {number} item - The current element being processed.
 * @returns {boolean} - True if any element satisfies the condition.
 */
const hasGreaterThanThree = numbers.some((item) => item > 3);

/**
 * Checks if all elements satisfy a condition.
 * @param {number} item - The current element being processed.
 * @returns {boolean} - True if all elements satisfy the condition.
 */
const allLessThanTen = numbers.every((item) => item < 10);

/**
 * Finds the first element that satisfies a condition.
 * @param {number} item - The current element being processed.
 * @returns {number|undefined} - The found element or undefined.
 */
const foundItem = numbers.find((item) => item > 3);

// Find Index
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
/** @type {number[]} */
const nums = [1, 2, 3];

/** @type {number[]} */
const nums2 = [4, 5, 6, 7];

/** @type {number[]} */
const finalNums = [...nums, ...nums2]; // Spread Operator

/**
 * Sums all arguments (Rest Operator).
 * @param {...Array<number>|number|string} numbers - Arguments to process.
 * @returns {Array} - An array containing all arguments.
 */
function sum(...numbers) {
    return numbers;
}
console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// Concat
const concatenatedArray = nums.concat(nums2, arr);

// Slice
const slicedArray = arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]
const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// Reverse
nums.reverse();
// console.log(nums);

// Sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);