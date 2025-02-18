// Topic ----------*********3 coding questions***********
// 1.Write a JavaScript program that calculates the factorial of a number
function fact(n){
    if(n==1||n==0)
    {
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

const number = 5;
const result = fact(number);
console.log("Factorial of", number, "is", result);


// 2 . Write a JavaScript program to check whether the given number is prime
function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false; // If divisible by any number between 2 and the square root of a number, it's not prime
        }
    }
    return true; // If the loop completes without finding a divisor, the number is prime
}

const num = 17;
const isPrimeResult = isPrime(num);
if (isPrimeResult) {
    console.log(num, "is a prime number.");
} else {
    console.log(num, "is not a prime number.");
}


// 3 .Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers
function evenNumbers(numbers) {
    const evenArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenArray.push(numbers[i]);
        }
    }
    return evenArray;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbersArray = evenNumbers(numbers);
console.log("Even numbers:", evenNumbersArray);
