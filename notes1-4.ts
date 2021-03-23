// Welcome to Typescript User

// Typescript 101 
// Typescript is a superset of Javascript
// Allows us to use strict types
// Supports modern features (arrow functions, let, const obviously)

// Extra features include
// Generics, Interface, Tuples and more

// Needs to be compiled to Javascript
// Loads of extra features!

// Strict Types
// Assign variables a specific type
// variables cannot change types - easier to debug, less errors

// You should already know
// JS; arrow functions, the DOM and Classes
// asynchronous code 

// Also going to need Npm from node installed.... duh

// Lets make a... you guessed it TodoList!!!
// Buts lets be original and instead call it a Spending Tracker

// Install the Typescript compiler!!
// Browsers dont understand TS so you need to compile it to JS

// Terminal npm install -g typescript

// Got Live Server Extension installed? yup now we can preview porject

// the command to compile now that we have typescript installed
// make sure you are in the same folder as .ts file

// run ...
// tsc index.ts index.js // <--- this doesn't work
// must have tsconfig.json???? must research more


// when .ts and .js files have same name you can omit the .js file

// tsc index.ts  MUST DO THIS WAY UNTILL TSCONFIG FILE EXISTS

// Can not redeclare block scope variable error
// The only reason this error would exist is because both
// the js and ts files are open at the same time
// exit the js file and error goes away

// next time we compile the .ts file lets throw the -w watch flag
// on there so we can just compile on every save
// typecript is watching now


///////////// on to lesson 3 /////////////

// integers and floats aren't two different things
// number covers both

// you don't have to define type, but you can't change type

// declaring type "adding a call onto the end"
// putting : a colon after a parameter or variable
// followed by string boolean number 

// checks happen before compile if there is an error
// you wont be able to compile and can debug in terminal 

// "type check as you go leads to cleaner code!" - Austin tm


////////////// lesson 4 ////////////// 

// you can't add numbers to arrays of strings
// if an array is declared with one type
// it can only have that one type added or changed in it

// arrays declared with multiple value types can have a mix of types 
// added or reassigned 

// you can't add values to keys in which the types dont match
// you also can't add new keys after object has been declared

// unless you override the whole object and recreate the object
// it has to have its original properties you can't even add on