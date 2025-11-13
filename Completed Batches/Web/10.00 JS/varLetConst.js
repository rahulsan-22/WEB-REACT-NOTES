//!DECLARATION WITHOUT INITIALIZATION
var a;
console.log(a); //undefined

let b;
console.log(b); //undefined

const c;
console.log(c); //Uncaught SyntaxError: Missing initializer in const declaration

//!REASSIGNING THE VARIABLES
var sub = "Java"
sub = "Python"
console.log(sub) //Python

let drinks = "Soda"
drinks ="Water"
console.log(drinks) //Water

const snacks = "Pickle"
snacks = "Kabab"
console.log(snacks) //Uncaught TypeError: Assignment to constant variable.

//!REDECLARATION OF VARIABLES
var color = "Red";
var color = "Green"
console.log(color); //Green

let biryani = "Chicken";
let biryani = "Mutton";
console.log(biryani); //Uncaught SyntaxError: Identifier 'biryani' has already been declared

const cafe = "Bombay";
const cafe = "Rahul";
console.log(cafe); //Uncaught SyntaxError: Identifier 'cafe' has already been declared
