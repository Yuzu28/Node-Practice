// call examples

const bark = require("./dog");
const greet = require("./greet");
const pig = require("./pig");
const bee = require("./bee");
const turkey = require("./turkey");
const hoo = require("./owl")
// const woof = bark();
// greet(" G' day ");
// greet(woof);
// greet(bark); // function calls are substitutes with their return value
// greet(pig);
// greet(bee);
// greet(turkey);
// greet(hoo);
// greet(bark, 'Nick');


console.log('about to call settimeout')
// helloWorld();

//setTImeout and setInterval are ticketmaster
//setTImeout - you pass it as function, its waits, then it calls it
//setInterval - you pass it a function, it waits, calls it, waits
setInterval(function helloWorld(){
    console.log("hello world")
}, 1000);





//********************************************************** */
// Modulues examples
//********************************************************** */



//0. Grad specific sound using <keyname>
// const catSound = require('./cat');
// console.log(catSound.cat);

//1B. Grab specific sound *before* the assignment
//require is used to call function and substitute return values
// (.cat) access value for key

// const catSound = require('./cat').cat;
// console.log(catSound);

// console.log(require('./cat').cat);

// console.log(require('./cat').cat); //start with ".cat" -do we sub?

// console.log(
//     {
//         cat: catSaysWhat, //In JS, quotes around keynames are optional
//         kitten: kittenSaysWhat //unless you use dashes or spaces
//     }.cat)  //do we sub for require ("./cat")

// console.log("purrrrrrrrrrr"); // eventllay arrived at a simpleest version.





// 2) "Destructuring" - "pluck a specific value out of an object"
// {cat}: go into the object and get me a thing with the same name
// const {cat, kitten} = require("./cat");
// console.log(cat);
// console.log(kitten);