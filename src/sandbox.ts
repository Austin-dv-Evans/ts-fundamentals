let character  = "Austin The Man Himself"
let age = 29
let isBlackBelt = false

console.log(character);

const inputs = document.querySelectorAll('input')

console.log(inputs);

inputs.forEach(input => {
  console.log(input);
})

const circ = (diameter: number) => {
  return diameter * Math.PI
}
// console.log(circ('hello')); //Nan
console.log(circ(44));


let ninja = {
  name: "ButterFly Dust",
  belt: 'Black',
  score: 100
}

ninja.score = 97
// ninja.score = '97' // error

// ninja = {
//   name: "DJ Kick Yo Face",
//   belt: 'Red',
//   score: 90,
//   specialMove: 'Kicks face'
// }
// error

// explicit types, define and assign
let character2: string = "Renee"
let age2: number = 30
let isBeautiful: boolean = true

// or define then assign
let character3: string
character3 = 'Austin'

let pirates: string[] = ["Mr. Yarr", "Parrot Patty", "WoodLeg"]
console.log(pirates);

// union type on arrays
let mixed: (string|number)[] = []
mixed.push(20)
mixed.push('Also Allowed')
// mixed.push(false) <---not going to work

// union type on variables
let uniqueIds: string|number

uniqueIds = 2
uniqueIds = 'this is also allowed'

let binaryTruth: boolean|number
binaryTruth = 0
binaryTruth = true
console.log(binaryTruth);

// objects 
let userInfo: {
  name: string, 
  age: number
}
let austinTutorial: object
austinTutorial = {name: 'austin', age: 29}

// the any type aka dynamic type
let handsome: any
handsome = true
console.log(handsome);
handsome = 'true'
console.log(handsome);
handsome = {really: true, veryMuchSo: "indeed"}
console.log(handsome);

let mixedArr: any[] = []
mixedArr.push(1)
mixedArr.push('works')
mixedArr.push(true)
console.log(mixedArr);


// Lesson 8 Funcions

let greet: Function

greet = () => {
  console.log('hello world');
}
greet()

// ? means it is an optional parameter
// this has and optional and a union type
const add = (a:number, b:number, c?:number|string = 10) => {
  console.log(a + b);
  console.log(c);
  
}

add(5, 10)

// default arguments 
const subtract = (a:number, b:number = 10) => {
  console.log(`${a} - ${b} equals: `,(a - b));
}
subtract(45,9)
subtract(50)

const minus = (a: number, b: number) => {
  return a - b
}
let result = minus(30, 10) // result is of type number
console.log(result);
