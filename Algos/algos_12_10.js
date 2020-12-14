// EXERCISE 1
function a(arr){ // this function swaps the first and last elements of an array
    var b = arr.length;
    var temp = arr[b-1];

    arr[b-1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(a([1,2,3])); // output: [3,2,1]
console.log(a([2,4])); // output: [4,2]









// EXERCISE 2
// ORIGINAL:
function bWrong(arr) {
    var x = arr.length;

    for(var i = 0; i < x/2; i++) {
        var temp = arr[x-i-1];
        arr[i] = arr[x-i-1];
        arr[x-i-1] = temp;
    }
}


// FIXED CODE
function b(arr){ // this function reverses an entire array
    var x = arr.length;
    
    for(var i = 0; i < x/2; i++) {
        var temp = arr[i]; // UPDATED: changing from arr[x-i-1] to arr[i]
        arr[i] = arr[x-i-1];
        arr[x-i-1] = temp;
    }

    return arr; // UPDATED: return the actual array
}

console.log(b([1,2,3])); // expected output: 3,2,1
console.log(b([1,2,3,4,5])); // expected output: 5,4,3,2,1