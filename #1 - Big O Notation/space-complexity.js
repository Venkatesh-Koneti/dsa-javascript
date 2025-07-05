/**
 * SPACE COMPLEXITY DEMONSTRATIONS WITH EXAMPLES
 */

// ========================================
// O(1) Space Complexity (Constant Space)
// ========================================

/**
 * Adds up all numbers in the list
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {Array} numbers - List of numbers
 * @returns {Number} The total sum
 */
const sumNumbers = (numbers) => {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
};

// ========================================
// O(n) Space Complexity (Linear Space)
// ========================================

/**
 * Creates a list of multiples of 5
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Number} count - How many numbers to generate
 * @returns {Array} List of multiples
 */
const generateMultiples = (count) => {
    const multiples = [];

    for (let i = 0; i < count; i++) {
        multiples.push(i * 5);
    }

    return multiples;
};

// ========================================
// O(n^2) Space Complexity (Quadratic Space)
// ========================================

/**
 * Creates a square grid with sums of row + col
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * @param {Number} size - Grid size
 * @returns {Array} 2D grid
 */
function createSumGrid(size) {
    let grid = [];

    for (let row = 0; row < size; row++) {
        grid[row] = [];
        for (let col = 0; col < size; col++) {
            grid[row][col] = row + col;
        }
    }

    return grid;
}

// ========================================
// Test Cases
// ========================================

const marks = [10, 20, 30, 40, 50];

console.log("Total Marks (O(1) Space):", sumNumbers(marks));
console.log("Multiples of 5 (O(n) Space):", generateMultiples(5));
console.log("Sum Grid (O(n^2) Space):");
console.log(createSumGrid(3));

/**
 * Expected Output:
 * 
 * Total Marks (O(1) Space): 150
 * Multiples of 5 (O(n) Space): [ 0, 5, 10, 15, 20 ]
 * Sum Grid (O(n^2) Space):
 * [
 *   [ 0, 1, 2 ],
 *   [ 1, 2, 3 ],
 *   [ 2, 3, 4 ]
 * ]
 */
