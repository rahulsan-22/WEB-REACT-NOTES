//!SpreadOperator
//*Copying elements(Arrays)
// let frontend = ["Html",'Css',"Js"]
// let backend = ["Java",'Python']
// let database = ["Sql"]
// let fullstack = [...frontend,...backend,...database]
// console.log(fullstack) //['Html', 'Css', 'Js', 'Java', 'Python', 'Sql']

//*Copying properties(Objects)
// let obj1 = {
//     name:"PushpaRaj",
//     business:"smuggling"
// }
// let obj2 ={
//     wifeName:"Srivalli"
// }
// let detailsOfPushpa = {
//     ...obj1,...obj2
// }
// console.log(detailsOfPushpa) //{name: 'PushpaRaj', business: 'smuggling', wifeName: 'Srivalli'}

//*String to Array
// let str = "Pvt"
// let arr = [...str]
// console.log(arr) //['P', 'v', 't']

//*Array to Object
// let array = ["Bike","Car","Auto"]
// let object = {
//     ...array
// }
// console.log(object) //{0: 'Bike', 1: 'Car', 2: 'Auto'}

//!Rest Parameter
function something(a,b,c,...rest){
    console.log(a) //1
    console.log(b) //2
    console.log(c) //3
    console.log(rest) //[4,5,6,7,8,9]
}
something(1,2,3,4,5,6,7,8,9)