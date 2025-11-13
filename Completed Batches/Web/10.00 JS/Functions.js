//!FUNCTION DECLARATION

//*1)Normal / General / Common function
// function normal() {
//     console.log("Stupid Fellows")
// }
// normal()

//!Behavior of function
//*function without return keyword without parameter
// function example1() {
//     console.log(5 + 5)
// }
// example1() 
//*function without return keyword with parameter
// function example2(a, b) {
//     console.log(a + b)
// }
// example2(10, 20)
// example2(5, 5)
//*function with return keyword without parameter
// function example3() {
//     return "Propose her"
// }
// console.log(example3())
//*function with return keyword with parameter
// function example4(a,b){
//      return a*b
// }
// console.log(example4(2,3))
// console.log(example4(3,3))

//!Extra parameters
// function demo1(a,b,c){
//    console.log(a+b+c) //NaN
// }
// demo1(10,20)

//!Extra Arguments
// function demo2(a,b){
//     console.log(a+b) //30
// }
// demo2(10,20,30)

//!Function Expression

//*1)Anonymous function
// let anonymous = function(a,b){
//      return a*b
// }
// console.log(anonymous(1,2)) //2

//*2)Arrow function
// let arrow = (a,b)=>{
//     console.log(a-b) //2
// }
// arrow(5,3)

//@Types
//$Explicit return Arrow function
// let explicit = (a,b)=>{
//    return a+b
// }
// console.log(explicit(5,3)) //8

//$Implicit return Arrow function
//*Example 1
// let implicit1 = (a,b)=>a+b
// console.log(implicit1(5,3)) //8

//*Example 2
// let implicit2 = ()=>console.log("Hello") //Hello
// implicit2()

//*Behavior of Arrow function
//@Single Parameter
// let singleParam = msg => msg
// console.log(singleParam("Hello"))

//@No Parameter
// let noParam = _ => "Dont be late tmr"
// console.log(noParam())

//!Immediate invoked function expression (IIFE)
//*Normal
// (function normal() {
//     console.log("Normal Function");
// })();

//*Anonymous
// (function () {
//     console.log("Anonymous Function");
// })();

//*Arrow
// (() => {
//     console.log("Arrow Function");
// })();

//!Higher Order Functions
let eggs = () => {
    return "Eggs fn invoked"
}
let milk = () => {
    return "Milk fn invoked"
}
let bread = () => {
    return "Bread fn invoked"
}
let dmart = (product)=>{
    return product()    
}
console.log(dmart(eggs)) //Eggs fn invoked
console.log(dmart(milk)) //Milk fn invoked
console.log(dmart(bread)) //Bread fn invoked