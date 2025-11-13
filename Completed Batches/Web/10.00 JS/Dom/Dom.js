//!DOCUMENT OBJECT MODEL
//*When our browser renders our html page it creates a tree like sturucture interally knows "DOM"
//*DOM is a standard for how to get, change, add, or delete HTML elements.
// console.dir(document)

//!ACCESSING THE HTML ELEMENTS
//*TO ACCESS THE HTML ELEMENTS DOM PROVIDES 2 WAYS
//*1)DIRECT ACCESS
//*2)INDIRECT ACCESS

//!1)Direct Access
// console.log(document.all)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.images)
// console.log(document.links)
// console.log(document.forms)

//!2)Indirect Access
//*IT PROVIDES 6 DIFFERENT INBUILT METHODS TO ACCESS THE HTML ELEMENTS
//*1)getElementById()
//*2)getElementsByClassName()
//*3)getElementsByTagName()
//*4)getElementsByName()
//*5)querySelector()
//*6)querySelectorAll()

//!i)getElementById()
//* getElementById is a method in JavaScript that allows you to access an HTML element in a document by its unique id attribute
//@Example 1:
// let h1= document.getElementById("heading")
// console.dir(h1)
// h1.style.color="white"
// h1.style.background="black"

//@Example 2:
// let btn = document.getElementById("btn")
// console.dir(btn)
// btn.style.color="white"
// btn.style.backgroundColor="purple"
// btn.style.padding="10px 20px"

//!ii)getElementsByClassName()
//* getElementsByClassName is another method in JavaScript that allows you to select elements in the DOM based on their class names. This method returns a live HTMLCollection of all elements in the document that have the specified class name
//@Example 1:
// let images = document.getElementsByClassName("posters")
// console.dir(images)
// for(let i=0;i<images.length;i++){
//   images[i].style.border="10px solid red"
//   images[i].style.borderRadius="50%"
// }

//@Example 2:
// let anchors = document.getElementsByClassName("links")
// console.dir(anchors)
// for(let i=0;i<anchors.length;i++){
//   anchors[i].style.textDecoration="none"
//   anchors[i].style.color="green"
//   anchors[i].style.fontSize="25px"
// }

//!iii)getElementsByTagName()
//*getElementsByTagName is a method in JavaScript that allows you to select elements in the DOM based on their tag name. This method returns a live HTMLCollection of all elements in the document that have the specified tag name
//*Example:
// let links = document.getElementsByTagName("a")
// console.log(links)
// for(let i=0;i<links.length;i++){
//   links[i].style.color="firebrick"
//   links[i].style.fontSize="30px"
// }

//!iv)getElementsByName()
//* getElementsByName() is a method in JavaScript that allows you to select elements in the DOM based on their name attribute. This method returns a live NodeList of all elements in the document that have the specified name attribute.
//*Example:
// let inputs = document.getElementsByName("something")
// console.log(inputs)
//*Approach-1
// for(let i=0;i<inputs.length;i++){
//   inputs[i].style.color="white"
//   inputs[i].style.background="tomato"
// }
//*Approach-2
// inputs.forEach(ele=>{
//   ele.style.color="white"
//   ele.style.background="hotpink"
// })

//!v)querySelector()
//*querySelector() is a method in JavaScript that allows you to select the first element within the document that matches a specified CSS selector.
//*ID
// let heading1 =document.querySelector("#heading")
// console.log(heading1)
// heading1.style.color="red"

//*CLASS
// let images1 = document.querySelector(".posters")
// console.log(images1)
// images1.style.border="10px solid red"

//*TAG
// let anchor1 = document.querySelector("a")
// console.log(anchor1)
// anchor1.style.color="lime"

//!vi)querySelectorAll()
//*querySelectorAll() is a method in JavaScript that allows you to select all elements within the document that match a specified CSS selector. This method returns a static NodeList containing references to all matching elements
//*ID
// let heading2 = document.querySelectorAll("#heading")
// console.log(heading2)
// heading2.forEach((ele)=>{
//   ele.style.color="blue"
// })

//*CLASS
// let images2 = document.querySelectorAll(".posters")
// console.log(images2)
// images2.forEach((ele)=>{
//   ele.style.border="10px solid green"
// })

//*TAG
// let anchor2 = document.querySelectorAll("a")
// console.log(anchor2)
// anchor2.forEach((ele)=>{
//   ele.style.color="orange"
// })

//!Difference between queryselector() and queryselectorall()
//*querySelector() is used when you need to select a single element or the first element that matches a CSS selector, while querySelectorAll() is used when you need to select multiple elements that match the CSS selector.

//!write() and writeln()
//*write() and writeln() methods are used to write content to the HTML document. However, they differ in how they handle line breaks

//!write()
//* The write() method writes the specified content to the document without appending a newline character at the end.
// document.write("Hello")
// document.write("Hello")

//!writeln()
//*The writeln() method writes the specified content to the document appending a newline character at the end.
// document.writeln("Hello")
// document.writeln("Hello")

//!Acessing the text written in between the tags
// let para = document.getElementById("para")
//!innerText
//*can access only content which is visble on the ui.
// console.log(`innerText : ${para.innerText}`)
//!textContent
//*can access all the content if it is hidden.
// console.log(`textContent : ${para.textContent}`)
//!innerHTML
//*can access all the html Structure along with the text Content inside it.
// console.log(`innerHTML : ${para.innerHTML}`)

//!Setting the text Content
// let setTheContent = ()=>{
//    let container = document.querySelector("#container")
//    container.innerText = "Hello From innerText"
//    container.textContent = "Hello From textContent"
//    container.innerHTML = `<h1 style=color:red;>Hello from innerHTML</h1>
//    <p>This is a sample para</p>
//    <button>Click</button>`
// }

//!Getting the attributes
//*getAttribute() and getAttributeNode() are methods used to retrieve attribute values of an HTML element, but they serve slightly different purposes
// let heading = document.getElementById("something")
// console.log(heading)
//!getAttribute()
//* the getAttribute() method is used to retrieve the value of a specific attribute of an HTML element.
// console.log(heading.getAttribute("id")) //something
// console.log(heading.getAttribute("class")) //anything
// console.log(heading.getAttribute("title")) //everything
// console.log(heading.getAttribute("style")) //color:blue;
//!getAttributeNode()
//*The getAttributeNode() method is used to retrieve the attribute node itself, rather than just its value.
// console.log(heading.getAttributeNode("id")) //id="something"
// console.log(heading.getAttributeNode("class")) //class="anything"
// console.log(heading.getAttributeNode("title")) //title="everything"
// console.log(heading.getAttributeNode("style")) //style="color:blue;"

//!Setting the attributes
//!setAttribute()
//*In JavaScript, setAttribute is a method that allows you to set an attribute on a specified element in the HTML DOM (Document Object Model). It is primarily used to dynamically add or modify attributes of HTML elements.
// let setTheAttributes = () => {
//   let para = document.querySelector("p")
//   para.setAttribute("id", "holiday")
//   para.setAttribute("class", "noHoliday")
//   para.setAttribute("style", "color:green;")
//   para.setAttribute("late", "singAsong")
//   console.log(para)
// }
//!Removing the attributes
//!removeAttribute()
//*In JavaScript, removeAttribute is a method used to remove a specified attribute from an HTML element in the DOM (Document Object Model). This method is commonly used to dynamically manipulate the attributes of HTML elements.
// let removingTheAttributes = () => {
//  let marquee = document.querySelector("marquee")
//  marquee.removeAttribute("scrollamount")
//  marquee.removeAttribute("direction")
//  marquee.removeAttribute("behavior")
// }
//!attributes
//*In JavaScript, the attributes property of an HTML element provides access to a collection of all the attributes of that element. This collection is represented as a NamedNodeMap, which is similar to an array but contains nodes with key-value pairs representing attributes.
// let mark = document.querySelector("mark")
// console.log(mark.attributes)
//!className
//*fetches the name of the class of the targeted element
// console.log(mark.className)

//!classList
// let dealWithClass = ()=>{
//   let heading = document.querySelector("h2")
  //!add()
  //*Adds one or more classes to the element. If the class is already present, it will not add it again.
  // heading.classList.add("mon","tue","wed")
  //!remove()
  //*Removes one or more classes from the element.
  // heading.classList.remove("mon")
  //!toggle()
  //*Toggles the presence of a class. If the class is present, it removes it; if it's absent, it adds it.
  // heading.classList.toggle("thurs")
  //!contains()
  //*Checks if the element has a specific class. Returns true if the class is present, false otherwise.
  // console.log(heading.classList.contains("tue"))
  // console.log(heading.classList.contains("mon"))
  // console.log(heading.classList.contains("thurs"))
  //!item(index)
  //*Returns the class name at the specified index. This is useful when you want to access a class by its position.
  // console.log(heading.classList.item(0)) 
  // console.log(heading.classList.item(1)) 
  // console.log(heading.classList.item(2)) 
  //!length
  //*Returns the number of classes on the element.
  // console.log(heading.classList.length)
// }

//!createElement()
//*used to dynamically create HTML elements.
// let marquee = document.createElement("marquee")
// let para = document.createElement("p")
// let btn = document.createElement("button")

//!createTextNode()
//*used to create a new text node. Text nodes are used to represent textual content within HTML elements.
// let marqueeText = document.createTextNode("There are holidays for ganesh chaturthi")
// let paraText = document.createTextNode("This is a sample Para")
// let btnText = document.createTextNode("Click")

//!createComment()
//*used to create a comment node in the HTML DOM (Document Object Model). Comment nodes are used to insert comments into the HTML structure, which are not rendered by the browser but can be useful for adding notes or annotations to the HTML code.
// let comment = document.createComment("This is a comment created using DOM")

//!appendChild()
//*appendChild is a method used to append a single node (element, text node, etc.) as the last child of a parent node.
// marquee.appendChild(marqueeText)
// para.appendChild(paraText)
// btn.appendChild(btnText)

//!append()
//*append is a newer method introduced in JavaScript, and it is used to append one or more nodes or DOMString objects to a parent node.
// marquee.append(marqueeText,paraText,btnText)
// para.append(paraText)
// btn.append(btnText)

//!Displaying Content on UI
// let body = document.body
// body.append(marquee,para,btn)


//!childNodes and children
// let body = document.body
//!childNodes
//*contains all child nodes (including element nodes, text nodes, comment nodes, etc.).
// console.log(body.childNodes)
//!children
//*contains only the element nodes (i.e., the child elements) of the current node.
// console.log(body.children)

//!insertBefore()
//*insertBefore is a method used to insert a new node before an existing child node of a specified parent node in the HTML DOM (Document Object Model). This method provides a way to dynamically insert elements or nodes at specific positions within a parent node's children.
let shalini = document.getElementById("shalini")
let shivani = document.getElementById("shivani")
let sandhya = document.getElementById("sandhya")
let parent = document.body

parent.insertBefore(sandhya,shalini)
parent.insertBefore(shivani,shalini)
parent.insertBefore(shivani,sandhya)

//!replaceChild()
//*This method replaces an existing child node (oldChild) with a new child node (newChild).
let swapChildren=()=>{
  let hospital = document.getElementById("hospital")
  let Raj = document.getElementById("toBeReplaced")
  let Bantu = document.createElement("li")
  Bantu.innerText="Bantu"
  hospital.replaceChild(Bantu,Raj)
}

//!removeChild()
//*This method removes a specified child node from the DOM.
let killNurse = ()=>{
  let hospital = document.getElementById("hospital")
  let nurse = document.getElementById("toBeKilled")
  hospital.removeChild(nurse)
}