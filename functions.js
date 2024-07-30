/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //Lets loop through the animals array
    for (let i = 0; i < animals.length; i++) {
        //And then lets check if the current animal name matches the name
        if (animals[i].name === name) {
            //Now return the animal object if a match is found
            return animals[i];
        }
    }
    //And then return null if its not a  match
    return null;
 }
 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function replace(animals, name, replacement) {
    //First lets loop through the animals array
    for (let i = 0; i < animals.length; i++) {
        //And then check if the current animals name matches the name
        if (animals[i].name === name) {
            //And then replace the entire animal object with the replacement object
            animals[i] = replacement;
            return; //Exit the function after replacing
        }
    }
 }
 

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    //First lets loop through the animals array
    for (let i = 0; i < animals.length; i++) {
        //And then check if the current animal's name matches the name
        if (animals[i].name === name) {
            //Then remove the animal from the array using splice
            animals.splice(i, 1);
            return; //
        }
    }
 }
 


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    //Lets check that the animal has a name property with a length > 0
    if (!animal.name || animal.name.length === 0) {
        return;
    }
   
    //And then check that the animal has a species property with a length > 0
    if (!animal.species || animal.species.length === 0) {
        return;
    }
   
    //Now check that the animals name is unique
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            return; // Name is not unique, do not add the animal
        }
    }
   
    //Finally add the animal to the animals array if all conditions are met
    animals.push(animal);
 }
 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}