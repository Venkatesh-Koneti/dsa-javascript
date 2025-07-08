/*
    Second Largest Element in an Array

    Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
    Note: If the second largest element does not exist, return -1.

    Examples:

        Input: arr[] = [12, 35, 1, 10, 34, 1]
        Output: 34
        Explanation: The largest element of the array is 35 and the second largest element is 34.

        Input: arr[] = [10, 5, 10]
        Output: 5
        Explanation: The largest element of the array is 10 and the second largest element is 5.

        Input: arr[] = [10, 10, 10]
        Output: -1
        Explanation: The largest element of the array is 10 there is no second largest element.
*/

// Brute Force
// function secondLargest(arr) {
//     const uniqueArr = Array.from(new Set(arr));
//     uniqueArr.sort((a, b) => { return b - a; });

//     if (uniqueArr.length >= 2) {
//         return uniqueArr[1];
//     } else {
//         return -1;
//     }
// }

// Optimal
function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([-1, -2, 0]));