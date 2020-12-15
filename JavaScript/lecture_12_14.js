/***************************** CONDITIONAL STATEMENTS **************************************/
// var age = 20;

// // Two options: If the condition is true, or else
// if(age < 13) {
//     console.log("Sorry, you must be at least 13 years or older to join this website.")
// } else {
//     console.log("Welcome to this website!");
// }

// // Multiple options:
// if(age < 13) {
//     console.log("Sorry, you must be at least 13 years or older to join this website.")
// } else if (age > 120){
//     console.log("Ok, you're lying about your age, or you're registering from beyond the grave. Either way, please leave me alone, I'm scared.");
// } else {
//     console.log("Welcome to this website!");
// }

// console.log(age > 13 && age < 18);

if(age > 13 && age < 18){
    // both conditions MUST resolve to true
}

// if(condition1 || condition2) { 
//     // if either condition resolves to true
// }

// if( (condition1 && condition2) || (condition3 && condition4) ){
//     // we can chain and combine && and || if we want as well
// }

function trufal(num) {
    if(num > 5) {
        return true;
    } else { 
        return false;
    }
}

if(trufal(10)){
    // we can even use a function as our condition, as long as the function returns a boolean
}

// if(!(age == 13)) {
//     console.log("As long as you're not 13, you're allowed in.");
// }

// <13 -> not allowed
// 13 - 18 -> cheesy tik tok reference
// 18 - 25 -> college reference
// 25 - 35 -> going home single for the holidays reference
// 35 - 45 -> when are you going to have kids reference
// 45+ -> boomer humor reference

// if(age > 45) {
//     console.log("boomer humor");
// } else if(age > 35) {
//     console.log("Where are the kids?");
// } else if(age > 25) {
//     console.log("Where's your significant other");
// } else if(age > 18) {
//     console.log("shouldn't you be studying?");
// } else if(age > 13) {
//     console.log("does stupid dance");
// } else {
//     console.log("You're too young to use this site");
// }

var age = 4;


// if(age < 25) {
//     console.log("option 1");
// } else if(age < 35){
//     console.log("option 2");
// } else {
//     console.log("Sorry, no option matches that input")
// }

for(var i = 0; i < 100; i++) {
    if(i == age) {
        console.log("Happy birthday!");
    } else {
        console.log(i);
    }
}

/************************************ OBJECTS **************************************/

// var studentArray = ["Ken", "Kruse", "kkruse@gmail.com", 25, "Online"];

// key value pairs


// object syntax
var student1 = {
    // key: value
    first_name: "Ken",
    last_name: "Kruse",
    email: "kkruse@gmail.com",
    age: 25,
    campus: "Online",
    belts: [
        "yellow",
        "red",
        "black",
        "black"
    ],
    favorite_movie: {
        title: "Godfather",
        director: "Francis Ford Coppola",
        release_year: 1972
    }
}
var student2 = {
    // key: value
    first_name: "Ken",
    last_name: "Kruse",
    email: "kkruse@gmail.com",
    age: 25,
    campus: "Online",
    belts: ["yellow", "red", "black", "black"],
    favorite_movie: {
        title: "Godfather",
        director: "Francis Ford Coppola",
        release_year: 1972
    }
}

var studentArray = [student1, student2]
console.log(studentArray[1].favorite_movie.title)



// console.log(student.email)
// console.log(student.belts[3])

// console.log(student.favorite_movie.title)