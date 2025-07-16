/*
    Pattern 1: Left-Aligned Triangle

        *
        **
        ***
        ****
*/

console.log("                     ");
console.log("Left-Aligned Triangle");
console.log("                     ");

const n1 = 4;

for (let i = 1; i <= n1; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


/*
    Pattern 2: Right-Aligned Triangle

           *
          **
         ***
        ****
*/
console.log("                     ");
console.log("Right-Aligned Triangle");
console.log("                     ");

const n2 = 4;

for (let i = 1; i <= n2; i++) {
  let row = "";

  for (let j = 1; j <= n2 - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}

/*
    Pattern 3: Pyramid Pattern

           *
          ***
         *****
        *******
*/
console.log("                     ");
console.log("Pyramid Pattern");
console.log("                     ");

const n3 = 4;

for (let i = 1; i <= n3; i++) {
  let row = "";

  for (let j = 1; j <= n3 - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}