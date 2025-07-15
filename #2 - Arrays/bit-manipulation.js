// Bitwise Operators in JavaScript - Basics with Examples

// 1. Bitwise AND (&)
// Compares each bit of two numbers. Result bit is 1 only if both bits are 1.
let a = 5;     // Binary: 0101
let b = 3;     // Binary: 0011
console.log("a & b:", a & b);  // Output: 1 (Binary: 0001)

// 2. Bitwise OR (|)
// Compares each bit of two numbers. Result bit is 1 if either of the bits is 1.
console.log("a | b:", a | b);  // Output: 7 (Binary: 0111)

// 3. Bitwise XOR (^)
// Compares each bit of two numbers. Result bit is 1 only if the bits are different.
console.log("a ^ b:", a ^ b);  // Output: 6 (Binary: 0110)

// 4. Bitwise NOT (~)
// Inverts each bit (0 becomes 1 and 1 becomes 0)
// In JavaScript, ~n = -(n + 1)
let c = 5;     // Binary: 0000000000000101
console.log("~c:", ~c);     // Output: -6

let d = -1;
console.log("~d:", ~d);     // Output: 0 (because ~(-1) = -( -1 + 1 ) = 0)

// Bonus: Print binary representation for better understanding
function toBinary(n) {
  return (n >>> 0).toString(2).padStart(32, '0');
}

console.log("a (5):", toBinary(a));   // 00000000000000000000000000000101
console.log("b (3):", toBinary(b));   // 00000000000000000000000000000011
console.log("a & b:", toBinary(a & b));  // 00000000000000000000000000000001
console.log("a | b:", toBinary(a | b));  // 00000000000000000000000000000111
console.log("a ^ b:", toBinary(a ^ b));  // 00000000000000000000000000000110
console.log("~a   :", toBinary(~a));     // 11111111111111111111111111111010

// 5. Left Shift (<<)
// Multiplies the number by 2 for each shift
let x1 = 3;        // Binary: 00000011
console.log("x1 << 1:", x1 << 1);  // Output: 6 (Binary: 00000110)
console.log("x1 << 2:", x1 << 2);  // Output: 12 (3 * 4)

// 6. Right Shift (>>)
// Divides the number by 2 for each shift
let x2 = 8;        // Binary: 00001000
console.log("x2 >> 1:", x2 >> 1);  // Output: 4 (Binary: 00000100)
console.log("x2 >> 2:", x2 >> 2);  // Output: 2 (8 / 4)

// 7. Check if a number is even or odd using & 1
let num1 = 5;
let num2 = 8;
console.log(num1, "is", num1 & 1 ? "Odd" : "Even");  // Output: Odd
console.log(num2, "is", num2 & 1 ? "Odd" : "Even");  // Output: Even

// 8. Swap two numbers without a temp variable using XOR
let e = 5, f = 3;
e = e ^ f;
f = e ^ f;
e = e ^ f;
console.log("Swapped values: e =", e, "f =", f); // Output: e: 3 f: 5

// 9. Turn off the rightmost set bit
let n1 = 10;        // Binary: 1010
console.log("n1 & (n1 - 1):", n1 & (n1 - 1));  // Output: 8 (Binary: 1000)

let n2 = 12;        // Binary: 1100
console.log("n2 & (n2 - 1):", n2 & (n2 - 1));  // Output: 8 (Binary: 1000)

// 10. Check if a number is a power of 2
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
console.log("Is 4 a power of 2?", isPowerOfTwo(4));   // true
console.log("Is 5 a power of 2?", isPowerOfTwo(5));   // false
console.log("Is 16 a power of 2?", isPowerOfTwo(16));  // true
