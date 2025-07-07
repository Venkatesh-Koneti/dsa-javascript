/*
    283. Move Zeroes

    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.

    Example 1:
        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]

    Example 2:
        Input: nums = [0]
        Output: [0]
*/

var moveZeroes = function (nums) {
    const nonZeros = []
    const zeros = []
    for (const ele of nums) {
        if (ele === 0) {
            zeros.push(ele)
        } else {
            nonZeros.push(ele)
        }
    }
    const mergedArray = [...nonZeros, ...zeros]
    for (let i = 0; i < nums?.length; i++) {
        nums[i] = mergedArray[i]
    }
    return nums
};

const result = moveZeroes([0, 1, 0, 3, 12])
console.log(result);