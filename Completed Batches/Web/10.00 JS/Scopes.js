//!GLOBAL SCOPE
// var a = 10;
// let b = 20;
// const c = 30;

//*Accessing directly
// console.log(a) //10
// console.log(b) //20
// console.log(c) //30
//*Accessing inside a function
// function anything() {
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// anything()
//*Accessing inside a block
// {
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }

//!LOCAL / FUNCTION SCOPE
// function something(){
//    var a = 10;
//    let b = 20;
//    const c = 30;
// *Accessing inside fn 
//    console.log(a) //10
//    console.log(b) //20
//    console.log(c) //30
// }
// something()

//*Accessing outside the fn
// console.log(a) //Uncaught ReferenceError: a is not defined
// console.log(b) //Uncaught ReferenceError: b is not defined
// console.log(c) //Uncaught ReferenceError: c is not defined

//*Accessing inside a block
// {
// console.log(a) //Uncaught ReferenceError: a is not defined
// console.log(b) //Uncaught ReferenceError: b is not defined
// console.log(c) //Uncaught ReferenceError: c is not defined
// }

//!BLOCK SCOPE
// {
//     var name1 = "Monty"
//     let name2 = "Pavan"
//     const name3 = "Asnan"
    // *Accessing inside the block
//     console.log(name1) //Monty
//     console.log(name2) //Pavan
//     console.log(name3) //Asnan
// }

//*Accessing outside the block
// console.log(name1) //Monty
// console.log(name2) //Uncaught ReferenceError: name2 is not defined
// console.log(name3) //Uncaught ReferenceError: name3 is not defined

//*Accessing inside function
// function everything() {
//     console.log(name1) //Monty
//     console.log(name2)//Uncaught ReferenceError: name2 is not defined
//     console.log(name3) //Uncaught ReferenceError: name2 is not defined
// }
// everything()