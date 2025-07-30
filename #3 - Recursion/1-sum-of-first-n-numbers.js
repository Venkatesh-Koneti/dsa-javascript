function sumOfnNumbers(n) {
    if (n === 0) return 0;
    return n + sumOfnNumbers(n - 1);
}

const result = sumOfnNumbers(5);
console.log(result); // result - 15