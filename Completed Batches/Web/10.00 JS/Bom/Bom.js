//!Browser object model(BOM)
//*The browser object model (BOM) is a programming interface that provides objects and methods to interact with browser window.
//*To access the properties of browser we have window object.

//!Window
//*Window: The top-level browser window object. It represents the entire browser window and provides methods and properties to control and interact with it.
// console.log(window)

//!Window Object methods
//*To access the methods of window object there is no need of specifying window. each and every time.
//*Some of the methods of window object are –

//!alert()
//*The alert() method in JavaScript is used to display a dialog box with a specified message and an OK button. It is commonly used to provide users with information or to prompt them for input in a simple and straightforward manner. The syntax for the alert() method is as follows:
//*Syntax: alert(message)
//*Example
// let bom1 = () => {
//     alert("Akada velaku chasthavu ☠️")
// }

//!confirm()
//*The confirm() method in JavaScript is used to display a dialog box with a specified message and two buttons: OK and Cancel. It is commonly used to prompt users for a binary choice, typically to confirm or cancel an action. The syntax for the confirm() method is as follows:
//*Syntax: confirm(message)
//*Example
// let bom2 = () => {
//     confirm("Are you guys really stupid?")
// }

//!combining alert() and confirm()
// let bom3 = () => {
//     let response = confirm("Do you want to marry me?")
//     if(response){
//        alert("Thanks for agreeing")
//     }else{
//       alert("Are you the only girl in this world")
//     }
// }

//!prompt()
//*The prompt() method in JavaScript is used to display a dialog box that prompts the user for input. It typically consists of a message, an input field, and two buttons: OK and Cancel. The user can input text into the field and then choose to submit or cancel the input.
//*The value collected from the user will be by default taken as String
//*Syntax: prompt(message)
//*Example
// let bom4 = ()=>{
//     let num1 = Number(prompt("Enter number 1"))
//     let num2 = parseInt(prompt("Enter number 2"))
//     alert(`The sum of two numbers is ${num1+num2}`)
// }

//!open()
//*In JavaScript, the open() method is used to open a new browser window or tab, or to navigate the current window to a new URL. It is commonly used to dynamically open new windows for various purposes such as displaying content, handling pop-up dialogs, or navigating to external links.
//*Syntax: open(url, target, features);
//*Example:
// let a;
// let bom5 =()=>{
//   a = open("https://chat.qspiders.com/","_blank","height=200px,width=200px,top=350px,left=550px")
// }
//!close()
//*In JavaScript, the close() method is used to close the current browser window or tab. It's typically invoked on the window object.
//*Example:
// let bom6 = ()=>{
//     a.close()
// }

//!innerHeight and outerHeight
//*innerHeight: This property represents the inner height of the browser window's content area in pixels. It includes the height of the viewport but excludes the height of any browser chrome (such as toolbars and scrollbars). This property is useful for determining the available space for displaying content within the viewport.
// console.log(`innerHeight is ${innerHeight}`)
//* outerHeight: This property represents the outer height of the browser window in pixels. It includes the height of the viewport as well as any additional browser chrome (such as toolbars and scrollbars). This property gives the total height of the browser window including its chrome.
// console.log(`outerHeight is ${outerHeight}`)
//!innerWidth and outerWidth
//*innerWidth: Similar to innerHeight, this property represents the inner width of the browser window's content area in pixels. It includes the width of the viewport but excludes the width of any browser chrome. It's useful for determining the available space for displaying content horizontally within the viewport.
// console.log(`innerWidth is ${innerWidth}`)
//*outerWidth: Similar to outerHeight, this property represents the outer width of the browser window in pixels. It includes the width of the viewport as well as any additional browser chrome. This property gives the total width of the browser window including its chrome.
// console.log(`outerWidth is ${outerWidth}`)

//!Web Storage Systems
//*localStorage and sessionStorage are two mechanisms provided by modern web browsers to store key-value pairs locally within the user's browser

//!localStorage
//*The data stored in localStorage persists even after the browser is closed and reopened. It remains available until explicitly cleared by the user or the web application that stored the data.
//*Methods of Local Storage are:

//*setItem(key,value)
// localStorage.setItem("name","Pavan")
// localStorage.setItem("age",16)
// localStorage.setItem("place","Mysore")

//*getItem(key)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(localStorage.getItem("place"))

//*removeItem(key)
// localStorage.removeItem("place")

//*clear()
// localStorage.clear()

//!sessionStorage
//*The data stored in sessionStorage is scoped to the current browser tab or window session. It persists only as long as the tab or window is open. When the tab or window is closed, the data is deleted.
//*Methods of Session Storage are:

//*setItem(key,value)
// sessionStorage.setItem("name","Monty")
// sessionStorage.setItem("age",25)
// sessionStorage.setItem("place","Gulbarga")

//*getItem(key)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(sessionStorage.getItem("place"))

//*removeItem(key)
// sessionStorage.removeItem("place")

//*clear()
// sessionStorage.clear()

//!History Object
//*Represents the browser's history stack, allowing you to navigate backward and forward through the user's browsing history.
//*Some of the methods and properties are:

//!length
//*Tells the total number of tabs opened in a browser
// console.log(history.length)

//!forward()
//*Goes forward by 1 tab
// let bom7 = ()=>{
//     history.forward()
// }
//!back()
//*Goes backward by 1 tab
// let bom8 = ()=>{
//     history.back()
// }
//!go()
//*method of the History object, which allows you to manipulate between mutiple tabs of browser's session history
//*go() forward by 5 tabs
// let bom9=()=>{
//    history.go(5)
// }

//*go() backward by 3 tabs
// let bom10=()=>{
//     history.go(-3)
// }

//!location object
//*The location object provides a variety of properties and methods that allow you to interact with the browser's address bar, including getting the current URL, setting a new URL, reloading the page

//!href
//*Fetches the entire url of a website
// console.log(location.href)

//!reload()
//*Reloads a page
// let bom11 = () => {
//     location.reload()
// }

//!assign()
//*Current url will assigned to new url but has the chance to go back to previous page
// let bom12 = () => {
//   location.assign("https://www.bookmyshow.com/")
// }

//!replace()
//*Current url will be replaced with new url but cannot come back to the previous page
// let bom13 = () => {
//    location.replace("https://chat.qspiders.com/")
// }

//!navigator object

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    })
