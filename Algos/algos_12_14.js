// Algorithm Practice - Arrays
// It's now time to practice writing your own algorithms using arrays!  
// Create an algorithm for each of the challenges below.  Make sure that 
// you run your code to ensure your output is matching the provided expected 
// output.

// Using the given array for testing:

// var testArr = [6,3,5,1,2,4]

// WARM-UP: Print all the values in the array using a for loop

// create a for loop
// that starts at the first element (i.e. index 0)
// then increments the index by 1 each iteration through the loop
// all the way through to the last index
for(var i = 0; i < testArr.length; i++) {
    console.log(testArr[i]);
    // Version 1: string concatenation
    // console.log("Num " + testArr[i] + " is at position " + i);
    // Version 2: string interpolation -> inserting variables directly into a string
    console.log(`Num ${ testArr[i] } is at position ${ i }`);
}


// CHALLENGE 1: Print Values and Sum

// Print each array value and the sum so far
// The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21
var testArr = [6,3,5,1,2,4];

var sum = 0;
for(var i = 0; i < testArr.length; i++) {
    // sum = sum + testArr[i]; // this line and the following line do exactly the same thing
    sum += testArr[i];
    
    console.log(`Num ${testArr[i]}, Sum ${sum}`);
}



// CHALLENGE 2: Value * Position

// Multiply each value in the array by its array position (index)
// The expected output will be:
// [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4];
for(var i = 0; i < testArr.length; i++) {
    // console.log(testArr[i]*i);
    testArr[i] = testArr[i]*i
}
console.log(testArr);