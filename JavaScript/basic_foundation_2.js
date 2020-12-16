// THINGS TO CONSIDER WHEN ANALYZING A PROMPT TO WRITE A FUNCTION
// inputs
    // parameters and arguments -> two sides to the same coin
// outputs
    // in place vs new data

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big". 
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(numArr){
    for(var i = 0; i < numArr.length; i++) { // create a for loop that iterates through every element of the array
        if(numArr[i] > 0) { // if the number is positive
            numArr[i] = "big"; // change the number to a string for "big"
        }
    }

    return numArr; // return the array after modifying it (assuming that there were positive numbers in it)
}

// makeItBig([1,2,3,4,5]);

// var array = [-5, 7,2,10, -4];
// makeItBig(array);

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the 
// lowest value in the array, and return the highest value in the array.
// inputs - array of numbers
// outputs - highest value
function lowAndHigh(numArr){
    var min = numArr[0]; // initialize our min and max as the first element of the array
    var max = numArr[0];

    for(var i = 1; i < numArr.length; i++) {
        if(numArr[i] < min){ // if an element is smaller than our min
            min = numArr[i]; // set it as the new min
        } else if(numArr[i] > max) { // otherwise, if the element is larger than our max
            max = numArr[i]; // set it as the new max
        }
    }

    console.log(min); // print the smallest value
    return max; // but return the highest value
}



// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the 
// second-to-last value in the array, and return the first odd value in the array.

// inputs - array of numbers
// outputs - first odd value in the array
    // secondary but not output - print second to last value

function printReturn(numArr){
    console.log(numArr[numArr.length-2]); // print the second to last value

    for(var i = 0; i < numArr.length; i++){ // loop through the array
        if(numArr[i] % 2 != 1) { // check if the value is odd
            // if we're here, the number is odd
            return numArr[i]; // and return 
        }
    }
}

// console.log(printReturn([12,100,9,25,18,97,23,75,213,76,8,143,123,457]))



// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array 
// where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without 
// changing the original array.

// input - array of numbers
// output - new array with numbers
function double(numArr){
    var dubArr = []; // this is our new array that will contain the doubled numbers

    for(var i = 0; i < numArr.length; i++) { // loop through the original array
        dubArr.push(numArr[i] * 2); // in one step, calculate the double and add it to the new array

        // // ALTERNATIVELY:
        // var dub = numArr[i] * 2;
        // dubArr.push(dub);
    }

    return dubArr;
}

// var array = [1,5,10];

// console.log(double(array));
// console.log(array);

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the 
// number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original 
// array to [-1,1,1,3] and returns it.

// input - array of numbers
// output - in place, original array modified with last value changed to number of positive values in the array
function countPositives(numArr){
    var posCount = 0; // variable for counting the positve values

    for(var i = 0; i < numArr.length; i++) { // loop through every value in the array
        if(numArr[i] > 0) { // if the value is positive
            posCount++; // add 1 to our counter
        }
    }

    numArr[numArr.length-1] = posCount; // after all is said and done, replace the last element in the array with the posCount


    return numArr; // and return the modified array
}

// var test = [-1,1,1,1];

// countPositives(test);

// console.log(test);

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".

// inputs - array of numbers
// output - technically nothing, just console logs
function evenOdd(numArr){
    var consecEven = 0; // keeping track of each consecutive count
    var consecOdd = 0;

    for(var i = 0; i < numArr.length; i++) { // loop through the array
        if(numArr[i] % 2 == 0) { // check if it's even
            consecEven++; // if it is, increment the even counter
            consecOdd = 0; // and reset the odd counter
        } else { // otherwise, 
            consecOdd++; // increment the ODD counter
            consecEven = 0; // and reset the even counter
        }

        if(consecOdd == 3) { // AFTER fiddling with the counters, check to see if that's 3 in a row of either
            console.log("That's odd!"); // if it's 3 odds, print that's odd
            consecOdd = 0; // and reset the odd counter
        } else if(consecEven == 3) { // otherwise, if it's 3 evens in a row
            console.log("Even more so!"); // print even more so
            consecEven = 0; // and reset the even counter
        }
    }
}

// evenOdd([1,9,11,5,7,3,8,4,6,2,9,1,2,7,6]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, 
// console.log each array value and return arr.

// inputs - array of numbers
// output - that same array
function seconds(numArr){
    // add 1 to every other element (i.e. odd indexes)
    // then, console.log each value
    for(var i = 0; i < numArr.length; i++) { // loop through the entire array
        // add 1 if the index is odd
        if(i % 2 != 0){ // if index is an odd number
            numArr[i]++; // add 1 to that value in the array
        }

        console.log(numArr[i]); // print the value
    }

    return numArr; // return the array
}

// console.log(seconds([2,4,6,8,10]))

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') 
// containing strings.  Working within that same array, replace each string with a number - the length 
// of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) 
// should return ["hello", 5, 4]. Hint: Can for loops only go forward?

// input - array of strings
// modify in place
// output - the same array
function previousLengths(stringArr){
    for(var i = stringArr.length-1; i > 0 ; i--){ // reverse, reverse!
        stringArr[i] = stringArr[i-1].length; // set the current element to the previous string's length
    }

    return stringArr; // and then return the array after changing it
}

// console.log(previousLengths(["hello", "dojo", "awesome", "sauce"]))

// 9. Add Seven - Build a function that accepts an array. Return a new array 
// with all the values of the original, but add 7 to each. Do not alter the 
// original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

// inputs - array numbers
// output - NEW array of numbers

function addSeven(numArr){
    var newArr = []; // create our eventual output

    for(var i = 0; i < numArr.length; i++) {// loop through the whole original array
        // // METHOD 1: Storing calculation in variable, then pushing
        // // 1. calculate num + 7
        // var plusSeven = numArr[i] + 7;
        // // 2. push that into the new array
        // newArr.push(plusSeven);

        // METHOD 2: Do it all in one go
        newArr.push(numArr[i]+7); // add 7 to the number, and add the result to the new array
    }

    return newArr; // return the new array
}

// var orig = [1,2,3];
// console.log(addSeven(orig));
// console.log(orig);

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  
// Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed 
// like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  
// (Hint: you'll need to swap values).

// inputs - array of values
// outputs - the same array
function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){ // from start to middle
        var temp = arr[i]; // store the element n from the beginning into a variable
        arr[i] = arr[arr.length-1-i]; // set the element n from the beginning to equal the value at n from the back
        arr[arr.length-1-i] = temp; // then set the element n from the back to the value stored in the temp
    }


    return arr;
}


// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original 
// array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

// input - array of numbers
// output - new array of numbers
function negative(numArr){
    var newArr = []; // our eventual output

    for(var i = 0; i < numArr.length; i++){ // loop through the original array
        if(numArr[i] > 0) { // if the value in the original array is positive
            newArr.push(numArr[i]*-1); // make it negative and add it to the output array
        } else { // otherwise
            newArr.push(numArr[i]); // just put the number in the output array, because it is already negative
        }
    }

    return newArr; // return that negative array
}

// var orig = [-10, 4, 18, -9, -2];
// console.log(negative(orig));
// console.log(orig);


// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is 
// equal to "food".  If no array values are "food", then print "I'm hungry" once.
// inputs - array of strings
// output - technically nothing, just console logs
function hungry(stringArr){
    var foodFound = false; // we'll assume at the start that there's no food, and we'll flip this if we find any

    for(var i = 0; i < stringArr.length; i++) { // loop through the entire array
        if(stringArr[i] == "food"){ // if the value is "food"
            console.log("Yummy"); // print "yummy"
            foodFound = true; // and flip our boolean to true
        }
    }

    if(!foodFound){ // if foodFound is false (aka, we never found a value equal to the string "food")
        console.log("I'm hungry."); // print I'm hungry
    }
}

// hungry(["food","hello", "food", "elephant", "food"]);

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and 
// third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns 
// the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns 
// the array into [6,2,4,3,5,1].  No need to return the array this time.

// inputs - array
// WE WILL modify in place
// outputs - no
function swapTowardCenter(arr){
    for(var i = 0; i < arr.length/2; i+=2) { // starting at the beginning, until we meet/pass the center, only doing every other element
        var temp = arr[i]; // same core logic
        arr[i] = arr[arr.length-i-1]; // as the reverse function
        arr[arr.length-i-1] = temp; // from several ago
    }
}

var test = [1,2,3,4,5,6,7];
swapTowardCenter(test);
console.log(test);


// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array 
// arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) 
// should return [3,6,9].

// inputs - array and number
// in place
// output - modified array
function scaleArray(numArr, num){
    for(var i = 0; i < numArr.length; i++) { // loop through the array
        // numArr[i] = numArr[i] * num;
        numArr[i] *= num; // multiply each value in the array by the number provided
    }

    return numArr; // then return the modified array
}
var test = [1,2,3];
console.log(scaleArray(test, 5))

console.log(test);