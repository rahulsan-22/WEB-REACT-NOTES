//!Ways of creating a string

//!1)Literal Way
// var str1 = 'Sunday'
// var str2 = "1"
// console.log(str1) //Sunday
// console.log(typeof str1) //string
// console.log(str2) //1
// console.log(typeof str2) //string

//!2)Constructor Object
// let str3 = new String('Late')
// let str4 = new String("sing a song")
// console.log(str3) //String{'Late'}
// console.log(typeof str3) //object
// console.log(str4) //String{'sing a song'}
// console.log(typeof str4) //object

//!3)String Interpolation / Template Strings
// let firstName = `Monty`
// let lastName = `Model`
// let age = `27`
 
// console.log(`My name is ${firstName} ${lastName} and my age is ${age}`) //My name is Monty Model and my age is 27

//!Accessing the characters of string
// let str5 = "PAVAN"
// console.log(str5[0]) //P
// console.log(str5[2]) //V
// console.log(str5[10]) //undefined
// console.log(str5[-1]) //undefined

//!LENGTH
// console.log(str5.length) //5
// console.log(str5[str5.length-1]) //N
// console.log(str5[str5.length-2]) //A


//!Methods

//*1)charAt(index)
// let str1 = "SONG"
// console.log(str1.charCodeAt(0)) //S
// console.log(str1.charAt(3)) //G
// console.log(str1.charAt(4)) //""
// console.log(str1.charAt(-1)) //""

//*2)charCodeAt(index)
// let str2 = "abc"
// console.log(str2.charCodeAt(0)) //97
// console.log(str2.charCodeAt(1)) //98
// console.log(str2.charCodeAt(2)) //99
// console.log(str2.charCodeAt(3)) //NaN

//*3)replace(oldString,newString) and replaceAll(oldString,newString)
// let str3 = "I LOVE ANUSHKA I LOVE ANUSHKA"
// console.log(str3.replace("ANUSHKA","MYSELF")) //I LOVE MYSELF I LOVE ANUSHKA
// console.log(str3.replaceAll("ANUSHKA","MYSELF")) //I LOVE MYSELF I LOVE MYSELF

//*4)repeat(count)
// let str4 = "Chai"
// console.log(str4.repeat(3)) //ChaiChaiChai
// console.log(str4.repeat(1)) //Chai
// console.log(str4.repeat(0)) //""

//*5)toUpperCase() and toLowerCase()
// let str5 = "KiNgDoM"
// console.log(str5.toUpperCase()) //KINGDOM
// console.log(str5.toLowerCase()) //kingdom

//*6)concat(...strings)
let sub1 = "Html"
let sub2 = "Css"
console.log(sub1.concat(sub2)) //HtmlCss
console.log(sub1.concat(" ",sub2)) //Html Css
console.log(sub1.concat(" ",sub2," ","Js")) //Html Css Js

//*7)includes(searchString,startIndex)
let str7 = "Chicken Biryani"
console.log(str7.includes("k")) //true
console.log(str7.includes("z")) //false
console.log(str7.includes("h",1)) //true
console.log(str7.includes("h",2)) //false
console.log(str7.includes("h",-10)) //true
console.log(str7.includes("ck")) //true
console.log(str7.includes("ck",4)) //false

//*8)split(separator)
// let str8 = "Sunday classes are there"
// console.log(str8.split())  //["Sunday classes are there"]
// console.log(str8.split(" ")) //["Sunday","classes","are","there"]
// let str9 = "Red,Green,Yellow"
// console.log(str9.split(",")) //["Red","Green","Yellow"]
// console.log(str9.split("")) //['R', 'e', 'd', ',', 'G', 'r', 'e', 'e', 'n', ',', 'Y', 'e', 'l', 'l', 'o', 'w']
// console.log(str9.split("e")) //["R","d,Gr","","n,Y","llow"]

//!*9)slice(startIndex,endIndex)
let st9 = "Amma thodu addanga narikesta"
console.log(st9.slice(5)) //thodu addanga narikesta
console.log(st9.slice(1,7)) //mma th
console.log(st9.slice(15,-3)) //nga narike
console.log(st9.slice(-7,-2)) //rikes
console.log(st9.slice(6,2)) //""

//!*10)substring(startIndex,endIndex)
let st10 = "Amma thodu addanga narikesta"
console.log(st10.substring(5)) //thodu addanga narikesta
console.log(st10.substring(1,7)) //mma th
console.log(st10.substring(15,-3)) //Amma thodu adda
console.log(st10.substring(-7,-2)) //""
console.log(st10.substring(6,2)) //ma t