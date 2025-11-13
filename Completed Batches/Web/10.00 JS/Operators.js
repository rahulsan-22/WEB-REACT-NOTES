//!ARITHEMATIC OPERATORS
//!(+,-,*,/,%)

//*ADDITION(+)
// console.log(2+2) //4
// console.log(2+"2") //22
// console.log(2+true) //3
// console.log(2+false) //2
// console.log(2+4+"html") //6html
// console.log(2+"js"+4+4) //2js44

//*SUBTRACTION(-)
// console.log(2-2) //0
// console.log(10-"5") //5
// console.log(10-"abc") //NaN
// console.log(2-true) //1
// console.log(2-false) //2
// console.log(4-2-"2") //0

//*Multiplication(*)
// console.log(2*2) //4
// console.log(2*"2") //4
// console.log(2*"abc") //NaN
// console.log(2*true)  //2
// console.log(2*false) //0
// console.log(2*2*"2") //8
// console.log(2*2*"2true") //NaN

//*DIVISION(/)
// console.log(2/2) //1
// console.log(2/"2") //1
// console.log(2/"abc") //NaN
// console.log(2/true) //2
// console.log(2/false) //Infinity
// console.log(2/2/"2") //0.5
// console.log(2/2/"2true") //NaN

//*MODULUS(%)
// console.log(2%2) //0
// console.log(2%"2") //0
// console.log(2%"abc") //NaN
// console.log(2%2%"2true") //NaN

//!COMPARISION / RELATIONAL OPERATORS
//!(>,<,>=.<=,!=,==,===)
// let a = 1;
// let b = 2;
// let c = "1"
// console.log(a>b) //false
// console.log(a<b) //true
// console.log(a>c) //false
// console.log(a>=c) //true
// console.log(a<=c) //true
// console.log(a!=b) //true
// console.log(a!=c) //false
// console.log(a==c) //true
// console.log(a==b) //false
// console.log(a===c) //false

//!LOGICAL OPERATORS
//! && , || , !
// let a =10;
// let b =30;
// let c = "10";
// let d = 5;
// console.log(a>d && b>a && d<=a) //true
// console.log(a==c && a===c) //false
// console.log(a<c || a<=d || a===c) //false
// console.log(a===c && c>a || b>=d) //true
// console.log(!(a===c)) //true


//!ASSIGNMENT OPERATOR
// let a = 10;
// let b = 20;
// let c = "30";

// //! +=
// console.log(a+=b) //30
// console.log(a+=c) //3030
// console.log(a+=true) //3030true
// console.log(a+=false) //3030truefalse

//! -=
// console.log(a-=b) //-10
// console.log(a-=c) //-40
// console.log(a-=true) //-41
// console.log(a-=false) //-41

//! *=
// console.log(a*=b) //200
// console.log(a*=c) //6000
// console.log(a*=true) //6000
// console.log(a*=false) //0

//! /=
// console.log(a/=b) //0.5
// console.log(a/=c) //0.0166666
// console.log(a/=true) //0.016666
// console.log(a/=false) //Infinity

// //! %=
// console.log(a%=b) //10
// console.log(a%=c) //10
// console.log(a%=true) //0
// console.log(a%=false) //NaN

//!CONDITIONAL/TERNARY OPERATOR
//*Example 1
// let attendingClassesRegularly = true;
// attendingClassesRegularly ? console.log("Javascript chala easy subject") : console.log("Javascript nethi meeda pothadi")
//Output: Javascript chala easy subject
//*Example 2
// let amount = 50;
// amount > 100 ? console.log("Bayataki velli thinnu") : console.log("Mooskoni PG lo thinnu")
//Output: Mooskoni PG lo thinnu