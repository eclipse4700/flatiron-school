/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations

// constant = a variable that will not change its value
console.log("Hello World!");
const firstName = "Isaiah";

// let = a variable that can change value i.e. can be reassigned
let number = 5;
number = 6;
console.log(number);

// ~ Types
// -> undefined, null*, boolean, number, string
// Booleans are true or false
const IsItRaining = false;

// ~ Objects
// -> definition, bracket/dot notation, stringify

// An object named `dog` with a string property `firstName` and a number property `age`.
const dog = {
    firstName: "Fluffy",
    age: 4
};

console.log(dog.firstName);
console.log(dog["firstName"]);

dog.age = 5;
console.log(dog.age);
console.log(JSON.stringify(dog));

// ~ Arrays
// -> definition, access, modification

const prices = [30, 40, 10, 60];

console.log(prices[1]);
prices[2] = 20;
console.log(prices[2]);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItRaining = true;

// If it's raining, console.log() something about raining 
if (isItRaining === true) {
    console.log("Hey bring an unbrella!");
} else {
    console.log("Enjoy the beautiful day!");
}

const age = 21;

if (age >= 21) {
    console.log("You are of age");
} else {
    console.log("You are not of age")
}

//If the user is over 21 and it's raining, the log "21R"
//If the user is over 21 and it's not raining, then log "21".
//If the user is less and it's raining, log "YR"
//If the user is less and it's  not raining, log "Y"

const user = 22;


if (user >= 21 && isItRaining === true) {
    console.log("21R");
} else if (user >= 21 && isItRaining === false){
    console.log("21");
} else if (user <= 21 && isItRaining === true){
    console.log("YR"); 
} else if (user <= 21 && isItRaining === false){
    console.log("Y");
}

//OR

if (user >= 21 && isItRaining) console.log("21R");
if (user >= 21 && !isItRaining) console.log("21");
if (user < 21 && isItRaining) console.log("YR");
if (user < 21 && !isItRaining) console.log("YR");

let message = "";
if (user >= 21) message = "21";
else message = "Y";

if (isItRaining) message += "R";
console.log(message);


// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

//greet "Hello, Sakib" ==> "Hello, Sakib!"

function greet(greeting, recipient) {
    //string interpolation
    console.log(`${greeting}, ${recipient}!`);
    //string concatenation 
    //console.log(greetings + "," + recipient "!");
    return (greeting + "," + recipient + "!");
}

const greetingIsaiah = greet("Hello", "Isaiah");
console.log(greetingIsaiah)
greet("Hello", "Jake")


const words = ["jump","escalate","people"];

//function printWord(word) {
//    console.log(word);
// }

//Iterate over the array words
words.forEach((word) => {console.log(word)});

// ~ Scope
// -> global, local, closures, function hoisting
const a = "A"; //Global
function localFunction(){
    const a = "AA";
    console.log(a);
    const b = "B";
    console.log(b);
}

localFunction();
console.log(a);




// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

const numbers = [10, 20, 30, 40];
function sum(numbers){
    let sum = 0;
    numbers.forEach((number) => (sum += number));
    return sum
}

console.log(sum(numbers));

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

const double = (numbers)




// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.




