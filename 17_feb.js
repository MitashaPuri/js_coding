// Topic ****daily 5 interview questions with answers*************

// 1. Write a JavaScript function that calculates the sum of two no.
function sum(a,b){
    return a+b;
}
const num1 = 10;
const num2 = 20;
const result = sum(num1, num2);


// 2. Write a JavaScript program to reverse the give str
function revstr(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
       rev +=str[i];
    }
    return rev;
}
const inputStr= "hello world";
const reversedString = revstr(inputStr);
console.log("Reversed string:", reversedString); 


// 3 .Write a JavaScript function that finds the maximum number in an array
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const numbers = [10, 5, 25, 8, 15];
const maxNumber = findMax(numbers);
console.log("The maximum number is:", maxNumber);
