/*
1. String Validation      Difficulty - Easy

Write a program that reads a string S and checks if the string S satisfies all the below conditions.
- S should contain only letters and underscores ( _ ).
- All letters in S should be in uppercase ( A to Z ).

Note: 
  * String S can contain multiple words and all the words in S are separated by underscores, like
( MANGO_TREE ).
  * The length of a word will be greater than or equal to one.

Print True and number of words in S separated by space if all the given conditions are satisfied.
Print False if any of the given conditions is not satisfied.

Input:
The input will be a single line containing a string.

Output:
The output should be a single line containing a string.
True and number of words should be printed separated by a space if all the given conditions are satisfied,
otherwise False should be printed.

Explanation:
For example, if S = MANGO_TREE
✔ S contains only letters and underscores.
✔ All letters in S are uppercase.
The number of words in S is 2. ( MANGO , TREE )
The output should be: True 2

Sample Input 1:
MANGO_TREE

Sample Output 1:
True 2

Sample Input 2:
THIS_a_BOOK

Sample Output 2:
False

*/

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to check if a character is an uppercase letter
function isUppercaseLetter(character) {
    return uppercaseLetters.includes(character);
}

// Function to check if a character is an underscore
function isUnderscore(character) {
    return character === "_";
}

// Function to check if all values in an array are true
function allSatisfied(results) {
    let finalResult = true;
    for (let result of results) {
        finalResult = finalResult && result;
    }
    return finalResult;
}

// Function to count the number of words separated by underscores
function getNumberOfWords(s) {
    return s.split("_").length;
}

// Function to validate the string
function isValidString(s) {
    let results = [];
    for (let character of s) {
        const result = isUppercaseLetter(character) || isUnderscore(character);
        results.push(result);
    }
    return allSatisfied(results);
}

// Main function
function main() {
    const string = "MANGO_TREE";  // Change this to test different inputs
    const isValid = isValidString(string);

    if (isValid) {
        const result = "True " + getNumberOfWords(string);
        console.log(result);
    } else {
        console.log("False");
    }
}

main();