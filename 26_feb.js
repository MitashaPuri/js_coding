// 1 .Program to find simple interest
function simpleInterest(p, t, r) {
    /* Calculate simple interest  */
    return (p * t * r) / 100;
}

//driver code
let p = 1, r = 1, t = 1;
console.log(simpleInterest(p, r, t));


// 2.Program to find area of a circle
function findArea(r) {
    return Math.PI * r * r;
}

//Driver Code
let r1 = 5;
let area = findArea(r);
console.log(area.toFixed(5));


// 3 .Iterative JavaScript Code to find sum of digits

function sumOfDigits(n) {
    let sum = 0;
    while (n !== 0) {

        // Extract the last digit
        let last = n % 10;

        // Add last digit to sum
        sum += last;

        // Remove the last digit
        n = Math.floor(n / 10);
    }
    return sum;
}

// Driver Code
let n = 12345;
console.log(sumOfDigits(n));

