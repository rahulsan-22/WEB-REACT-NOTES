//!Creation of Object

//*1)Literal Way
// let bioData1 = {
//     name: "Pavan",
//     age: 25,
//     isMarried: false,
//     hasKids: null,
//     girlFriendCount: undefined,
//     skills: ["Singing", "Dancing", "Eating", "Sleeping"],
//     fun: () => { console.log("Core Java Trainer") },
//     address: {
//         place: "Mysore",
//         state: "Karnataka"
//     }
// }
// console.log(bioData1)
// console.log(typeof bioData1)

//*2)Constructor Object
// let bioData2 = new Object()
// bioData2.name = "Monty"
// bioData2.age = 27
// bioData2.isMarried = true,
// bioData2.hasKids = null
// bioData2.girlFriendCount = undefined
// bioData2.skills = ["Singing", "Dancing", "Cricket", "Funny"]
// bioData2.fun = () => { console.log("Python Trainer") }
// bioData2.address = {
//     place: "Gulbarga",
//     state: "Karnataka"
// }
// console.log(bioData2)
// console.log(typeof bioData2)

//!Accessing the properties of an object
//*Dot Notation
// console.log(bioData1.name) //Pavan
// console.log(bioData2.skills) //['Singing', 'Dancing', 'Cricket', 'Funny']
// bioData1.fun() //Core Java Trainer
// console.log(bioData2.address.place) //Gulbarga
//*Box Notation
// console.log(bioData1["name"]) //Pavan
// console.log(bioData2[`skills`]) //['Singing', 'Dancing', 'Cricket', 'Funny']
// bioData1[`fun`]()
// console.log(bioData2['address']['place']) //Gulbarga

//!Properties and methods
// let simpleObj = {
//     name:"Someone",
//     age:18,
//     place:"Somewhere"
// }

//*1)delete
// delete simpleObj.place
// console.log(simpleObj) //{name: 'Someone', age: 18}

//*2)Object.keys()
// console.log(Object.keys(simpleObj)) //['name', 'age']

//*3)Object.values()
// console.log(Object.values(simpleObj)) //['Someone', 18]

//*4)Object.entries()
// console.log(Object.entries(simpleObj)) /*[
// ['name','Someone'],
// ['age',18]
// ]

// *5)Object.fromEntries()
// let nestedArray =[
//     ['name','Xyz'],
//     ['age',20],
//     ['place','Hyd']
// ] 
// console.log(Object.fromEntries(nestedArray)) //{name: 'Xyz', age: 20, place: 'Hyd'}

//*6)Object.assign(target,source)
//@String to Object
// let str = "Krish"
// console.log(Object.assign({},str)) //{0: 'K', 1: 'r', 2: 'i', 3: 's', 4: 'h'}
//@Array to Object
// let arr = ["Cars","Bikes","Auto","Bus"]
// console.log(Object.assign({},arr)) //{0: 'Cars', 1: 'Bikes', 2: 'Auto', 3: 'Bus'}
//@Object to Object
// let obj = {name:"Mukunda",distance:"400m"}
// console.log(Object.assign({},obj)) //{name: 'Mukunda', distance: '400m'}

//*7)Object.seal()
let obj = {
    product:"Marker",
    color:"Red",
    price:20
}
console.log(obj)
Object.seal(obj)

//@Add (Not possible)
obj.brand = "Doms"
console.log(obj)

//@Modify (Possible)
obj.color="Blue"
console.log(obj)

//@Delete (Not Possible)
delete obj.price
console.log(obj)

//*8)Object.freeze()
let obj = {
    product:"Marker",
    color:"Red",
    price:20
}
console.log(obj)
Object.freeze(obj)

//@Add (Not possible)
obj.brand = "Doms"
console.log(obj)

//@Modify (Not Possible)
obj.color="Blue"
console.log(obj)

//@Delete (Not Possible)
delete obj.price
console.log(obj)
