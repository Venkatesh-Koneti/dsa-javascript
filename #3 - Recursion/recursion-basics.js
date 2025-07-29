/**
 * Recursion in JavaScript
 * 
 * Recursion is when a function calls itself to solve a smaller part of a problem.
 * This keeps happening until it reaches a point where it stops — called the base case.
 * 
 * It's like solving a puzzle one piece at a time until there's nothing left to solve.
 */

// Example 1: Print numbers from n to 1 using recursion

/**
 * Prints numbers starting from n down to 1.
 * @param {number} n - Starting number
 */
function printNumbers(n) {
    // Stop condition: When n is 0, don't go further
    if (n === 0) return;

    console.log(n); // Print current number

    // Go one step smaller
    printNumbers(n - 1);
}

printNumbers(5); // Output: 5 4 3 2 1

/**
 * What’s happening here:
 * - Each time the function calls itself, it goes one step smaller (n - 1)
 * - All calls are stacked in memory (call stack)
 * - Once n hits 0, it starts coming back (unwinding)
 */

// Example 2: Factorial using recursion

/**
 * Calculates factorial of a number.
 * factorial(5) = 5 * 4 * 3 * 2 * 1
 * @param {number} n - The number to find factorial of
 * @returns {number}
 */
function factorial(n) {
    // Stop when n is 0 or 1
    if (n === 0 || n === 1) return 1;

    // Multiply current number with factorial of smaller number
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

/**
 * Time and Space Complexity
 * 
 * Time: O(n)
 * - Because we make one function call for each number from n down to 1
 * 
 * Space: O(n)
 * - Each call is stored in memory (call stack), so n calls means O(n) space
 */

/**
 * Common Mistakes:
 * - Not writing a base case → results in infinite calls and crashes
 * - Doing the same work multiple times (especially in problems like Fibonacci)
 */

/**
 * How to Think in Recursion:
 * 1. Break the problem into smaller chunks.
 * 2. Assume the function can solve the smaller version.
 * 3. Use that assumption to solve the full version.
 * 
 * Example: 
 * - To print 5 → just print 5, and let the function handle 4.
 * - To get factorial of 5 → just do 5 * factorial(4)
 */
