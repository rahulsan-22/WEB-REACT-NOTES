//!EVENT PROPAGATION
//*IT IS THE PROCESS OF PROPAGATION(TRAVELLING)OF EVENTS FROM ONE ELEMENT TO
//*ANOTHER ELEMENT

//!TYPES
//*EVENT BUBBLING PHASE
//*EVENT CAPTURING PHASE
let outer = document.getElementById("outer")
let inner = document.getElementById("inner")

//!Event Bubbling Phase
//*If the event propagates from target element to parent element then it is in bubbling phase
//*can be achieved by setting third parameter of addeventlistener to false
outer.addEventListener("click",()=>{
  alert("Outer Box Clicked 😁")
},false)

inner.addEventListener("click",()=>{
  alert("Inner Box Clicked 😎")
},false)

//!Event Capturing Phase
//*If the event propagates from parent element to target element then it is in capturing phase
//*can be achieved by setting third parameter of addeventlistener to true
outer.addEventListener("click",()=>{
  alert("Outer Box Clicked 😁")
},true)

inner.addEventListener("click",()=>{
  alert("Inner Box Clicked 😎")
},true)

//!Stop Propagation()
//*The stopPropagation() method in JavaScript is used to prevent an event from bubbling up the DOM hierarchy. When an event occurs on an element, it normally triggers the event handler on that element and then propagates (or "bubbles") up to its parent elements and so on, potentially triggering other event handlers along the way.
//*By calling event.stopPropagation(), you stop this bubbling behavior, ensuring that the event only affects the current target and does not trigger handlers on parent elements.
outer.addEventListener("click",()=>{
  alert("Outer Box Clicked 😁")
},false)

inner.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("Inner Box Clicked 😎")
},false)