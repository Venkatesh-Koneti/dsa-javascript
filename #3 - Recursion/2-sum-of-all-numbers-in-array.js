function sumOfArray(listOfNumbers, index = 0) {
    if (index === listOfNumbers.length) return 0;
    return listOfNumbers[index] + sumOfArray(listOfNumbers, index + 1);
}

const result = sumOfArray([1, 2, 3, 4, 5]);
console.log(result); // Output: 15