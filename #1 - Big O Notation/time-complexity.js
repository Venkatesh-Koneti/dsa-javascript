/**
 * TIME COMPLEXITY DEMONSTRATIONS WITH OPERATION COUNTS
 */

// ========================================
// Array Access Example Comparisons
// ========================================

/**
 * Finds element by iterating through array
 * Time Complexity: O(n)
 * @param {Array} numberArray - The array to search
 * @returns {Number} The element at index 3
 */
const findElementByIteration = (numberArray) => {
    // Operations Breakdown (worst case):
    // 1 (let i = 0)
    // n + 1 (i < array.length comparisons)
    // n (i++ increments)
    // n (if condition checks)
    // 1 (return statement)
    // Total: 3n + 3 operations
    for (let i = 0; i < numberArray.length; i++) {
        if (i === 3) return numberArray[i];
    }
};

/**
 * Directly accesses array element by index
 * Time Complexity: O(1)
 * @param {Array} numberArray - The array to access
 * @returns {Number} The element at index 3
 */
const getElementByIndex = (numberArray) => {
    // Operations Breakdown:
    // 1 (array access)
    // 1 (return statement)
    // Total: 2 operations
    return numberArray[3];
};

// ========================================
// Mathematical Operation Examples
// ========================================

/**
 * Performs constant time mathematical operation
 * Time Complexity: O(1)
 * @param {Number} inputNumber - The input number
 * @returns {Number} Result of the calculation
 */
function calculateMathematicalOperation(inputNumber) {
    // Operations Breakdown:
    // 1 (n + 5 addition)
    // 1 (n * result multiplication)
    // 1 (result / 2 division)
    // 1 (return statement)
    // Total: 4 operations
    return (inputNumber * (inputNumber + 5)) / 2;
}

// ========================================
// Sequential Number Printing Examples
// ========================================

/**
 * Prints numbers forward then backward
 * Time Complexity: O(n)
 * @param {Number} count - Number of iterations
 */
function printNumbersSequentially(count) {
    // Forward loop:
    // 1 (console.log)
    // n (console.log inside loop)
    // Total: n + 1

    // Backward loop:
    // 1 (console.log)
    // n (console.log inside loop)
    // Total: n + 1

    // 1 (final console.log)
    // Grand Total: 2n + 3 operations

    console.log("Forward Sequence:");
    for (let i = 0; i < count; i++) {
        console.log(i);
    }

    console.log("Backward Sequence:");
    for (let j = count - 1; j >= 0; j--) {
        console.log(j);
    }

    console.log("Sequence Complete");
}

// ========================================
// Nested Loop Example (Quadratic)
// ========================================

/**
 * Prints all pairs of numbers in a quadratic relationship
 * Time Complexity: O(n²)
 * @param {Number} matrixSize - Size of the square matrix
 */
function printNumberPairs(matrixSize) {
    // Outer loop runs n times
    // Inner loop runs n times for each outer loop
    // console.log inside inner loop = n * n = n²
    // Total: ~n² operations → O(n²)

    for (let row = 0; row < matrixSize; row++) {
        for (let column = 0; column < matrixSize; column++) {
            console.log(`Pair at (${row}, ${column})`);
        }
    }
}

// ========================================
// Test Cases
// ========================================

const sampleNumbers = [420, 96, 12, 69, 77];

console.log("getElementByIndex:", getElementByIndex(sampleNumbers));
console.log("Calculation result:", calculateMathematicalOperation(1000));

console.log("\nSequential Printing:");
printNumbersSequentially(3);

console.log("\nNumber Pairs:");
printNumberPairs(2);
