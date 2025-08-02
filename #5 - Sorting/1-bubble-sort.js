/**
 * Sorts an array using the Bubble Sort algorithm.
 * It repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 */
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

const result = bubbleSort([64, 25, 12, 22, 11]);
console.log(result);
