/**
 * Sorts an array using the Selection Sort algorithm.
 * It divides the array into sorted and unsorted parts and repeatedly
 * selects the minimum element from the unsorted part and moves it to the sorted part.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 */
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const result = selectionSort([64, 25, 12, 22, 11]);
console.log(result);
