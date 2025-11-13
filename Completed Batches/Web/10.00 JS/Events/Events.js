//!EVENTS
//*Events are actions or occurrences that happen as a result of user interaction or other activities in a web page or web application. These interactions can include things like clicking on an element, hovering over it with the mouse, submitting a form, pressing a key on the keyboard

//!addEventListener(event,function,useCapture)
//*addEventListener is a method in JavaScript used to attach an event handler to an element. It allows you to specify a function (event listener) that should be executed when a particular event occurs on the target element.

//!CLICK
//*The click event is used to detect when an element (such as a button, link, or any clickable item) is clicked by the user.
//@Example 1
// let h1 = document.getElementById("heading")
// h1.addEventListener("click",()=>{
//   h1.style.color="white"
//   h1.style.background="orange"
//   h1.style.textAlign="center"
// })
//@Example 2
// let btn = document.querySelector('#btn')
// btn.addEventListener('click',()=>{
//   btn.style.color="white"
//   btn.style.background="green"
// })
//!DBLCLICK
//*The dblclick event in JavaScript occurs when a user double-clicks on an element using the mouse. This event is triggered when two consecutive click events happen within a short time interval on the same element.
// let textarea = document.querySelector("textarea")
// textarea.addEventListener("dblclick",()=>{
//   textarea.style.color="white"
//   textarea.style.background="purple"
// })

//!MOUSEENTER AND MOUSELEAVE
// let h2 = document.getElementById("heading2")
//!MOUSEENTER
//*The mouseenter event in JavaScript occurs when the mouse cursor enters the boundaries of an element
// h2.addEventListener("mouseenter",()=>{
//   h2.style.color="white"
//   h2.style.background="black"
// })
//!MOUSELEAVE
//*The mouseleave event in JavaScript occurs when the mouse cursor leaves the boundaries of an element.
// h2.addEventListener("mouseleave",()=>{
//   h2.style.color="yellow"
//   h2.style.background="green"
// })
//!MOUSEMOVE
//*The mousemove event in JavaScript is triggered whenever the mouse pointer moves over an element.
// let textArea = document.getElementById("textArea")
// textArea.addEventListener("mousemove",()=>{
//   let red = Math.round(Math.random()*255)
//   let green = Math.round(Math.random()*255)
//   let blue = Math.round(Math.random()*255)
//   textArea.style.background=`rgb(${red},${green},${blue})`
// })

//!INPUT AND CHANGE
let inputField = document.getElementById("inputField")

//!INPUT
//*The input event in JavaScript occurs whenever the value of an <input>, <textarea>, or <select> element changes as the user interacts with it. Unlike the change event, which fires when the element loses focus after its value has changed, the input event fires immediately when the value of the element is modified.
inputField.addEventListener("input", () => {
  let red = Math.round(Math.random() * 255)
  let green = Math.round(Math.random() * 255)
  let blue = Math.round(Math.random() * 255)
  inputField.style.color = "white"
  inputField.style.background = `rgb(${red},${green},${blue})`
})

//!CHANGE
//*The input event in JavaScript occurs whenever the value of an <input>, <textarea>, or <select> element changes as the user interacts with it. Unlike the change event, which fires when the element loses focus after its value has changed, the input event fires immediately when the value of the element is modified.
inputField.addEventListener("change", () => {
  inputField.style.height = "100px"
  inputField.style.width = "300px"
})