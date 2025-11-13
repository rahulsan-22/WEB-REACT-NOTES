//!PROMISES
//*Promises are Object used to handle asynchronous operations(those operations which take some time to perform the task)
//!TYPES(STATES/PHASES)
//*Promises in JS have 3 states
//*1)Pending State
//*2)Resolved State
//*3)Rejected State
//*To handle the resolved state promise we have then() method similarly to handle rejected state promise we have catch()
//*then() and catch() are higherOrderMethods which take the promise result of resolved and rejected Promises respectively
let p = new Promise((resolve,reject)=>{
  let meet = true;
  if(meet){
     resolve("Promise got resolved")
  }else{
    reject("Promise got rejected")
  }
})
p.then((res)=>{
   console.log(res+" Lets go inside and have something")
}).catch((err)=>{
   console.log(err+" Sorry i was busy at that moment")
})