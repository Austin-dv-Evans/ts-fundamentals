"use strict";
var character = "Austin The Man Himself";
var age = 29;
var isBlackBelt = false;
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello')); //Nan
console.log(circ(44));
var ninja = {
    name: "ButterFly Dust",
    belt: 'Black',
    score: 100
};
ninja.score = 97;
// ninja.score = '97' // error
// ninja = {
//   name: "DJ Kick Yo Face",
//   belt: 'Red',
//   score: 90,
//   specialMove: 'Kicks face'
// }
// error
// explicit types, define and assign
var character2 = "Renee";
var age2 = 30;
var isBeautiful = true;
// or define then assign
var character3;
character3 = 'Austin';
var pirates = ["Mr. Yarr", "Parrot Patty", "WoodLeg"];
console.log(pirates);
// union type on arrays
var mixed = [];
mixed.push(20);
mixed.push('Also Allowed');
// mixed.push(false) <---not going to work
// union type on variables
var uniqueIds;
uniqueIds = 2;
uniqueIds = 'this is also allowed';
var binaryTruth;
binaryTruth = 0;
binaryTruth = true;
console.log(binaryTruth);
// objects 
var userInfo;
var austinTutorial;
austinTutorial = { name: 'austin', age: 29 };
// the any type aka dynamic type
var handsome;
handsome = true;
console.log(handsome);
handsome = 'true';
console.log(handsome);
handsome = { really: true, veryMuchSo: "indeed" };
console.log(handsome);
var mixedArr = [];
mixedArr.push(1);
mixedArr.push('works');
mixedArr.push(true);
console.log(mixedArr);
// Lesson 8 Funcions
var greet;
greet = function () {
    console.log('hello world');
};
greet();
// ? means it is an optional parameter
// this has and optional and a union type
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// default arguments 
var subtract = function (a, b) {
    if (b === void 0) { b = 10; }
    console.log(a + " - " + b + " equals: ", (a - b));
};
subtract(45, 9);
subtract(50);
var minus = function (a, b) {
    return a - b;
};
var result = minus(30, 10); // result is of type number
console.log(result);
