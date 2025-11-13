//!setTimeout() and setInterval()
//*These are the higher order methods which are used to perform a specific task after the specified duration of time.
//*Here the time duration should be specified in milliseconds.
//*These are the asynchronous operations which take some time to perform the task.

//!setTimeout()
//*setTimeout is a method used to execute a specified function or piece of code only once after a specified time duration(in milliseconds).
//*It takes two values: a function or code to execute and the time duration in milliseconds.
setTimeout(()=>{
    console.log("CALL YOU BACK IN 3S")
},3000)

//!clearTimeout
//*clearTimeout is a method used to cancel a timeout set with setTimeout before the specified function is executed,
//*It takes one value:the identifier of the timeout you want to cancel which is returned by setTimeout.
setTimeout(() => {
    clearTimeout(murderOperation)
    document.writeln("<h1><mark>Rahul Sir is very goooooooood so lets not shoot at him</mark></h1>")
}, 3000)

let murderOperation = setTimeout(() => {
    document.writeln("<h1>Shoot at Rahul Sir</h1>")
}, 5000)

//!setInterval()
//*setInterval is a method used to repeatedly execute a specified function or code multiple times at a specified interval (in milliseconds) until it is stopped.
//*It takes two values: a function or code to execute and the interval between executions in milliseconds.
setInterval(()=>{
  document.writeln("<h1>I LOVE YOU💖</h1>")
},1000)

//!clearInterval()
//*clearInterval is a method used to stop the interval execution set by setInterval.
//*It takes one value: the identifier of the interval you want to stop,which is returned by setInterval.
let count = 0;
let meeting =setInterval(()=>{
   document.writeln("<h1>Dad Attend Meeting</h1>")
   count++
   if(count==5){
    clearInterval(meeting)
    document.writeln("<mark>Stupid Fellow Cant you see im already attending meeting</mark>")
   }
},2000)
