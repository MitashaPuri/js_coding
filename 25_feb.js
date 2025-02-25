// Topic ----3 coding ques
// 1. Swap Two Numbers
let a = 2, b = 3;
console.log("a = " + a + " b = " + b);   

// Swap a and b using temp variable
let temp = a;
a = b;
b = temp;

console.log("a = " + a + " b = " + b);

// 2.Find the number closest to n and divisible by m
// JavaScript implementation to find the number closest to n
// and divisible by m
function closestNumber(n, m) {

    // find the quotient
    let closest = 0;
    let minDifference = Infinity;

    // Check numbers around n
    for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
        if (i % m === 0) {
            let difference = Math.abs(n - i);

            if (difference < minDifference || 
               (difference === minDifference && Math.abs(i) > Math.abs(closest))) {
                closest = i;
                minDifference = difference;
            }
        }
    }
    return closest;
}

//driver code
let n = 13, m = 4;
console.log(closestNumber(n, m));

// 3 .The dice problem
// JavaScript program to find opposite face of dice
function oppositeFaceOfDice(n) {
    if (n === 1) {
        console.log(6);
    } else if (n === 2) {
        console.log(5);
    } else if (n === 3) {
        console.log(4);
    } else if (n === 4) {
        console.log(3);
    } else if (n === 5) {
        console.log(2);
    } else {
        console.log(1);
    }
}

//driver code
let n3 = 2;
oppositeFaceOfDice(n);

// 4 .Program for N-th term of Arithmetic Progression



