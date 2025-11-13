//!VARIABLES
// console.log(a); //undefined
// var a = 10;

// console.log(b); //Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// console.log(c); //Uncaught ReferenceError: Cannot access 'c' before initialization
// const c = 30;

//!FUNCTIONS

//*Normal Function
normal()
function normal(){
   console.log("I AM NORMAL FUNCTION")
}

//*Anonymous Function
anonymous()
const  anonymous = function(){
   console.log("I AM ANONYMOUS FUNCTION")
}

//*Arrow Function
arrow()
const arrow = ()=>{
   console.log("I AM ARROW FUNCTION")
}

//*IIFE
();
(
   function norm(){
      console.log("NORMAL FN INSIDE IIFE")
   }
)