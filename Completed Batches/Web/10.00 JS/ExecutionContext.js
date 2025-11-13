//!Example 1
// console.log("Start")
// var a = 10;
// let b = 20;
// function example1(){
//     const c = 30;
//     console.log(a+b+c);
// }
// example1()

//!Example 2
// console.log("Start")
// function a(){
//     b()
//     console.log("A function executed")
// }
// function b(){
//     c()
//     console.log("B function executed")
// }
// function c(){
//     console.log("C function executed")
// }
// a()

//!Example 3
// console.log("Start")
// let sai = ()=>{
//     var a = "Hello";
//     let b = "Today I will sing a song"
//     console.log(a+","+b);
// } 
// function vinith(){
//     const c = "I went to drink water"
//     console.log(c);
// }
// vinith()
// sai()

//!Example 4 (Closures)
console.log("Start")
function outer(){
    var a = "Hello"
    let b = "I am stupid"
    function inner(){
        var c = "Yes";
        const d = ","
        console.log(c+d+b)
    }
    inner()
}
outer()