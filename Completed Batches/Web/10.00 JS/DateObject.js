let date = new Date()
console.log(date) //Mon Aug 11 2025 11:01:35 GMT+0530 (India Standard Time)

//!Date Methods
console.log(date.toDateString()) //Mon Aug 11 2025
console.log(date.getDate()) //11
console.log(date.getMonth()) //7
console.log(date.getFullYear()) //2025
console.log(date.getDay()) //1
//!Time Methods
console.log(date.toTimeString()) //11:13:30 AM
console.log(date.getHours()) //11
console.log(date.getMinutes()) //13
console.log(date.getSeconds()) //30
console.log(date.getMilliseconds()) //420
//!Set Methods
date.setDate(30)
date.setMonth(3)
date.setFullYear(2000)
console.log(date) //Sun Apr 30 2000 11:14:10 GMT+0530 (India Standard Time)