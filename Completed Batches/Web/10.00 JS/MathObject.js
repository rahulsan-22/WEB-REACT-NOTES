// console.log(Math)

//!PI
// console.log(Math.PI) //3.141592653589793

//!MAX()
// console.log(Math.max(10,2,7,3,1)) //10

//!MIN()
// console.log(Math.min(10,2,7,3,1)) //1

//!SQRT()
// console.log(Math.sqrt(4)) //2
// console.log(Math.sqrt(81)) //9

//!CBRT()
// console.log(Math.cbrt(27)) //3
// console.log(Math.cbrt(125)) //5

//!POW()
// console.log(Math.pow(2,3)) //8
// console.log(Math.pow(2,10)) //1024

//!TRUNC()
// console.log(Math.trunc(20.123)) //20
// console.log(Math.trunc(-4.27)) //-4

//!ABS()
// console.log(Math.abs(-5)) //5
// console.log(Math.abs(-10.25)) //10.25

//!SIGN()
// console.log(Math.sign(-10)) //-1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(10)) //1
// console.log(Math.sign(-0)) //-0

//!CEIL()
// console.log(Math.ceil(0.9)) //1
// console.log(Math.ceil(1.3)) //2
// console.log(Math.ceil(-0.1)) //-0
// console.log(Math.ceil(-2.9))  //-2

//!FLOOR()
// console.log(Math.floor(0.9)) //0
// console.log(Math.floor(1.3)) //1
// console.log(Math.floor(-0.1)) //-1
// console.log(Math.floor(-2.9)) //-3

//!ROUND()
// console.log(Math.round(0.9)) //1
// console.log(Math.round(1.3)) //1
// console.log(Math.round(-0.1)) //-0
// console.log(Math.round(-2.9)) //-3

//!RANDOM()
// console.log(Math.random())
//*Formula to generate a random number between a specific range
//$Math.random()*(max-min)+min
//@1-10
console.log(Math.random()*(10-1)+1)
console.log(Math.trunc(Math.random()*(10-1)+1))
console.log(Math.round(Math.random()*(10-1)+1))
console.log(Math.ceil(Math.random()*(10-1)+1))
console.log(Math.floor(Math.random()*(10-1)+1))
//@400-420
console.log(Math.random()*(420-400)+400)
console.log(Math.round(Math.random()*(420-400)+400)) 