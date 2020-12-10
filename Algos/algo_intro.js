// EXERCISE 1
for(var i = 0; i < 10; i++) { 
    console.log(i);
    i = i + 3;
}
console.log(i);


// EXERCISE 2
var a = 20;
function abc(list){
    var a = 15;
    console.log(a);
}
console.log(a);

a = [ [1,2,3], [5,10,20] ];



// EXERCISE 3
function sum(list){
    var sum = list[0];

    // return sum; // if we have our return statement here, everything after will not run


    for(var i = 0; i <= list.length; i++) {
        sum = sum + list[i];
        console.log(sum);
    }

    // return sum; // our return statement should be the last line within the function
}

c = sum([1,2,3]);
console.log(c);

