// Lesson 5

// Explicit and Union Types

// Yes typescript infers the type but we can also 
// explicitly assign the type

// arrays with explicitly typed look like this
// let pirates: string[]
// or let pirates: string[] = ["Mr. Yarr", "Parrot Patty", "WoodLeg"]

// dont forget to sometimes assign an empty array because
// you cant push if you dont have the array created yet

// let pirates: string[] = []

// mixed array types would be the Union Type

// use a single pipe between, 
// with arrays types need to be in parenthasis

// let pirates: (string|number|boolean)[] = []
// let binaryTruth: boolean|number
// binaryTruth = 0
// binaryTruth = true

// let austinTutorial: object
// austinTutorial = {name: 'austin', age: 29}

// defining the structure of the object explicitly typed
// let userInfo: {name: string, age:number}




////// Lesson 6 Dynamic (any) Type ////////

// can change what type its at any point
// age assigned to type any set to 29 isn't a number it is an any

// best time to use is when you aren't sure what the type will be
// don't use often because it takes away the purpose of using ts


///// Lesson 7 Btter Workflow and tsconfig //////

// initilize ts config file with command
// tsc --init

// outDir and rootDir lets say we have a src folder and a public folder
// outDir would be public for where we are compiling to
// rootDir would be src for our ts files what we are compiling

// it wants all of our source files to be in source
// to eliminate error for having ts files outside src
// add  "include": ["src"] to end of tsconfig file


/////// Lesson 8 Function Type

// declared with a captial F Function
// add a ? before the : to make the parameter optional and equal to undefined
// a union type can also have a default parameter
// you cant have default and optional on same parameter

// default parameters are always the last parameter

// when you assing a function call to a variable the type of that variable
// is going to be infered from what the return type of the funcition is