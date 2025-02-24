// Topic -----basic logic building questions
// 1 .Check whether a given number is even or odd
// check for even or odd

function isEven(n) { 
    return (n % 2 == 0); 
}

// Driver code

    let n1 = 101;
    if (isEven(n)) {
        console.log("true");
    } else {
        console.log("false");
    }


// 2 .Program to print multiplication table of a number
// Javascript program to print
// table of a number

function printTable(n) { 
    for (let i = 1; i <= 10; ++i)
        console.log( n + " * " +i +
                " = " + n *
                    i);
    }
    
    // Driver Code
    let n = 5; 
    printTable(n);

// 3 .Program to find sum of first n natural numbers
// Javascript program to find sum of first n natural numbers.

function findSum(n)
{
   let sum = 0;
   for (let x = 1; x <= n; x++) 
     sum = sum + x;
   return sum;
}

let n2= 5;
console.log(findSum(n));

    