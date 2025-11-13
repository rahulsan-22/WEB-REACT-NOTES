//!for-in
//*String
let str = 'Sleepy'
for(let res in str){
    console.log(res) //0 1 2 3 4 5
    console.log(str[res]) //S l e e p y
}

//*Array
let arr = ["Sing","a","Song"]
for(let res in arr){
    console.log(res) //0 1 2
    console.log(arr[res]) //Sing a Song
}
//*Object
let obj = {
    name:"Someone",
    age:18
}
for(let res in obj){ 
    console.log(res) //name age
    console.log(obj[res]) //Someone 18
}

//!for-of loop
//*String
let string = "Late"
for(let res of string){
    console.log(res)  // L a t e
}
//*Array
let array = ["Rakhi","IndependenceDay","Janmastami","GaneshChaturthi"]
for(let res of array){
    console.log(res) //Rakhi IndependenceDay Janmastami GaneshChaturthi
}
//*Object
let object = {
    name:"Abc",
    age:40
}
for(let res of object){
    console.log(res) //Uncaught TypeError: object is not iterable
}