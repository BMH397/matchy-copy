/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";  //You can use any species if you want
animal["name"] = "charlie";  //This is the name im going to use
animal.noises = []; //This is the noises with an empty array
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "growl";  //this is my noise
noises.push("bark");
noises.unshift("howl");
noises[noises.length] = "growl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = [];
var noises = ["bark", "growl", "howl", "whimper"]; 
animal["noises"] = noises;
animal.noises.push("roar");
console.log(animal.noises.length);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Now lets create a variable named animals and assign it to an empty array
var animals = [];

//And now lets push animal to animals
animals.push(animal);


//Console.log animals
console.log(animals);

//Now create a variable called duck and assign it
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//Now lets push duck to animals
animals.push(duck);

//And again console.log animals
console.log(animals);

//Now create two more animal objects and add each one of them to animals
var cat = {
  species: 'cat',
  name: 'Wemby',
  noises: ['meow', 'purr']
};

var cow = {
  species: 'cow',
  name: 'Lenny',
  noises: ['moo', 'low']
};

animals.push(cat);
animals.push(cow);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I chose an array to hold the list of friends because arrays are ordered collections of items and are easy to change

//Lets create a variable called friends 
var friends = [];

//Make a function called getRandom that takes our animals array and returns a random index of the input array Math.random
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

//Now using a random index from this function get a random animal and add its name to friends
let randomIndex = getRandom(animals);
friends.push(animals[randomIndex].name);

//Now Console.log friends
console.log(friends);

//Lets use bracket notation add the friends list as a property also named friends on one of the animals in the animals array
animals[0]['friends'] = friends;

//And again Console.log
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}