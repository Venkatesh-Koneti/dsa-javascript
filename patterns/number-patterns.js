/*
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5

*/
const n1 = 5
for (let i = 1; i < n1 + 1; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + String(j) + " "
    }
    console.log(row)
}

console.log("               ");
console.log("               ");

/*
    1 
    2 2 
    3 3 3 
    4 4 4 4 
    5 5 5 5 5 
*/
const n2 = 5
for (let i = 1; i < n2 + 1; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + String(i) + " "
    }
    console.log(row)
}

console.log("               ");
console.log("               ");

/*
    1 2 3 4 5 
    1 2 3 4 
    1 2 3 
    1 2 
    1
*/
const n3 = 5
for (let i = 1; i < n3 + 1; i++) {
    let row = ""
    for (let j = 1; j <= (n3 + 1) - i; j++) {
        row = row + String(j) + " "
    }
    console.log(row)
}

console.log("               ");
console.log("               ");

/*
    1 
    1 0 
    1 0 1 
    1 0 1 0 
    1 0 1 0 1
*/
const n5 = 5
for (let i = 1; i <= n5; i++) {
    let row = ""
    let a = "1"
    for (let j = 1; j <= i; j++) {
        row = row + a + " "

        if (a === "1") {
            a = "0"
        }
        else {
            a = "1"
        }

    }
    console.log(row)
}

console.log("               ");
console.log("               ");

/*
    1 
    0 1 
    0 1 0 
    1 0 1 0 
    1 0 1 0 1 
*/
const n4 = 5
let a = "1"
for (let i = 1; i <= n4; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + a + " "

        if (a === "1") {
            a = "0"
        }
        else {
            a = "1"
        }

    }
    console.log(row)
}