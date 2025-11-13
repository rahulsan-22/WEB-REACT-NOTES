//!Ways of creating an Array

//*1)Literal Way
// let arr1 = ["Pavan","Asnan","Monty","Yasin"]
// let arr2 = ["Shivani",25,true]
// console.log(arr1) // ["Pavan","Asnan","Monty","Yasin"]
// console.log(typeof arr1) //object
// console.log(arr2) //["Shivani",25,true]
// console.log(typeof arr2) //object

//*2)Constructor Object
// let arr3 = new Array(5)
// arr3[0] = "Saiyaara"
// arr3[1] = "Kubera"
// arr3[2] = "Kingdom"
// arr3[3] = "Coolie"
// arr3[4] = "War2"
// arr3[5] = "Narasimha"
// console.log(arr3) //['Saiyaara', 'Kubera', 'Kingdom', 'Coolie', 'War2', 'Narasimha']
// console.log(typeof arr3) //object

//!Accessing the elements of an Array
// let arr4 = ["Biryani","Kichdi","TigerRice","ChickenMandi","PannerFriedRice"]
// console.log(arr4[2]) //TigerRice
// console.log(arr4[4]) //PannerFriedRice
// console.log(arr4[6]) //undefined
// console.log(arr4[-1]) //undefined

//!Length
// console.log(arr4.length) //5
// console.log(arr4[arr4.length-1]) //PannerFriedRice
// console.log(arr4[arr4.length-2]) //ChickenMandi

//!Adding and deleting the elements at the starting and ending of the array
// let snacks = ["PaniPuri","Samosa","Puff"]
// console.log(snacks) //['PaniPuri', 'Samosa', 'Puff']

//*pop() - delete the last element of an array
// snacks.pop()
// console.log(snacks) //['PaniPuri', 'Samosa']

//*push() - adds the element at the end of an array
// snacks.push("Mirchi","Punugulu")
// console.log(snacks) //['PaniPuri', 'Samosa', 'Mirchi', 'Punugulu']

//*shift() - delete the first element of an array
// snacks.shift()
// console.log(snacks) //['Samosa', 'Mirchi', 'Punugulu']

//*unshift() - adds the element at the starting of the array
// snacks.unshift("Burger","Rasagulla")
// console.log(snacks) //['Burger', 'Rasagulla', 'Samosa', 'Mirchi', 'Punugulu']

//!Multidimension or Nested Array
// let details = [
//     ["Pavan", 25, true],
//     ["Monty", 27, false],
//     ["Asnan", 27, true]
// ]
// console.log(details)
// console.log(details[0][1]) //25
// console.log(details[1][2]) //false
// console.log(details[2][0]) //Asnan

//!Methods

//*1)toString()
// let arr1 = ["Sleep","Eating","Movie","WashingClothes"]
// console.log(arr1.toString()) //Sleep,Eating,Movie,WashingClothes
// console.log(typeof arr1.toString()) //string

//*2)concat(...arr)
// let frontend = ["Html","Css","Js"]
// let backend = ["Python","Java"]
// let database = ["Sql"]
// let fullstack = []
// console.log(fullstack.concat(frontend,"ReactJS",backend,database)) //['Html', 'Css', 'Js', 'ReactJS', 'Python', 'Java', 'Sql']

//*3)join(separator)
// let arr3 = ["Anushka","Samantha","Kajal"]
// console.log(arr3.join(" ")) //Anushka Samantha Kajal
// console.log(arr3.join("💖")) //Anushka💖Samantha💖Kajal

//*4)at(index)
// let arr4 = ["Traffic","Temple","Lift","Lazy","Hangover"]
// console.log(arr4.at(2)) //Lift
// console.log(arr4.at(4)) //Hangover
// console.log(arr4.at(6)) //undefined
// console.log(arr4.at(-2)) //Lazy

//*5)flat(depth)
// let arr5 = [1,2,[3,4,[5,6,[7,[8,[9,10]]]]]]
// console.log(arr5.flat()) //[1, 2, 3, 4, Array(3)]
// console.log(arr5.flat(2)) //[1, 2, 3, 4, 5, 6, Array(2)]
// console.log(arr5.flat(Infinity)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*6)includes(searchElement,startIndex)
// let arr6 = ["PistaHouse","ShahGhouse","Shadab","Mehfil","Nayab"]
// console.log(arr6.includes("Shadab")) //true
// console.log(arr6.includes("Vaarahi")) //false
// console.log(arr6.includes("PistaHouse",0)) //true
// console.log(arr6.includes("PistaHouse",2)) //false
// console.log(arr6.includes("Mehfil",-1)) //false
// console.log(arr6.includes("Mehfil",-3)) //true
// console.log(arr6.includes("Mehfil",-100)) //true

//*7)slice(startIndex,endIndex)
// let arr7 = ["Chocolate","Icecream","ColdDrinks","Chips","Biscuit"]
// console.log(arr7.slice(2)) //["ColdDrinks","Chips","Biscuits"]
// console.log(arr7.slice(1,3)) //["Iccream","ColdDrinks"]
// console.log(arr7.slice(1,1)) //[]
// console.log(arr7.slice(0,-2)) //["Chocolate","Icecream","ColdDrinks"]
// console.log(arr7.slice(-4,-2)) //["Icecream","ColdDrinks"]
// console.log(arr7.slice(4,0)) //[]

//*8)splice(startIndex,deleteCount,ElementsToBeAdded)
// let arr8 = ["Red","Green","Blue"]

//#Example 1
// arr8.splice(1,0,"Orange","Yellow")
// console.log(arr8) //["Red","Orange","Yellow","Green","Blue"]

//#Example 2
// arr8.splice(2,2,"Purple")
// console.log(arr8) //["Red","Green","Purple"]

//#Example 3
// arr8.splice(-3,2,"Gold","Silver")
// console.log(arr8) //['Gold', 'Silver', 'Blue']

//*9)reverse()
// let arr9 = ["Sleep","Eat","Chicken","Washing","Beer"]
// console.log(arr9.reverse()) // ['Beer', 'Washing', 'Chicken', 'Eat', 'Sleep']

//*10)sort()
// let arr10 = [1,7,3,2,20]
// console.log(arr10.sort()) //[1,10,2,20,3,5,7]
// console.log(arr10.sort((a,b)=>a-b)) // [1, 2, 3, 7, 20]
// console.log(arr10.sort((a,b)=>b-a)) //[20, 7, 3, 2, 1]

//!Higher Order Methods
//*1)forEach(fn(element,index,array))
//@Example 1
// let trainers1 = ["Monty", "Pavan", "Asnan"]
// trainers1.forEach((element, index, array) => {
//     console.log(element + "🙏") //Monty🙏 Pavan🙏 Asnan🙏
//     console.log(index) //0 1 2
//     console.log(array) //["Monty","Pavan","Asnan"] * 3
// })
//@Example 2
// let multiples1 = [1, 2, 3]
// let forEachOutput = multiples1.forEach((element) => {
//     return (`2 * ${element} = ${2 * element}`)
// })
// console.log(forEachOutput) //undefined

//*2)map(fn(element,index,array))
// let trainers2 = ["Monty", "Pavan", "Asnan"]
//@Example 1
// trainers2.map((element, index, array) => {
//     console.log(element + "🙏") //Monty🙏 Pavan🙏 Asnan🙏
//     console.log(index) //0 1 2
//     console.log(array) //["Monty","Pavan","Asnan"] * 3
// })
//@Example 2
// let multiples2 = [1, 2, 3]
// let mapOutput = multiples2.map((element) => {
//     return (`2 * ${element} = ${2 * element}`)
// })
// console.log(mapOutput) //['2*1=2','2*2=4',2*3=6']
//*3)filter(fn(element,index,array))
// let numbers = [7, 2, 5, 1, 3]
// let filteredOutput = numbers.filter((element) => {
//     return (element >= 5)
// })
// console.log(filteredOutput) //[7,5]
//*4)some(fn(element,index,array))
// let someOutput = numbers.some((ele)=>{
//    return ele>=5
// })
// console.log(someOutput) //true
//*5)every(fn(element,index,array))
// let everyOutput = numbers.every((ele)=>{
//    return ele>=5
// })
// console.log(everyOutput) //false
//*6)reduce(fn(accumulator,element,index,array),initialValue)
let arr6 = [1,2,3,4,5]
//@for-loop
let sum = 0;
for(let i=0;i<arr6.length;i++){
    sum+=arr6[i]
}
console.log(sum) //15
//@reduce method
let reducedOutput = arr6.reduce((sum,ele,ind,arr)=>{
    return sum+=ele
},0)
console.log(reducedOutput) //15
