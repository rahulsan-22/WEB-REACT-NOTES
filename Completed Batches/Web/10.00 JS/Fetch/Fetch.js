//!FETCH
//*The fetch method in JavaScript is used to make network requests to fetch resources (like JSON data, images, or any other files) from a server.
//*In Simpler Words , it helps us to extract the data from the api

//!ASYNC AND AWAIT
//*async and await are keywords introduced in ECMAScript 2017 (ES8) that work together to simplify asynchronous JavaScript code
//*They help us to handle the promises gracefully
//!async - The async keyword is used to declare an asynchronous function. An asynchronous function returns a promise implicitly, which resolves to the value returned by the async function.
//!await - The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise passed to await is settled.
//!handling using async and await

//*NOTE:
//*json() method is used when working with the fetch API or any other mechanism that returns a promise representing a response from a server. It is specifically used to extract the JSON body content from the response object, converting it into a JavaScript object that can be easily manipulated and used within your application.

//!Example 1
//!then()
let api1 = fetch('https://dummyjson.com/recipes')
console.log(api1)
api1.then((res) => {
//   return res.json()
}).then((res) => {
  console.log(res.recipes)
})

//!async and await
let fetchData1 = async() => {
  let api1 = await fetch("https://dummyjson.com/recipes")
  let data = await api1.json()
  console.log(data.recipes)
  let container = document.getElementById("table1")
  console.log(container)
  data.recipes.forEach((ele)=>{
   container.innerHTML+=`
    <tr>
      <td>${ele.id}</td>
      <td>${ele.name}</td>
      <td>${ele.cuisine}</td>
      <td>${ele.ingredients}</td>
      <td>${ele.instructions}</td>
      <td><img src=${ele.image} height=200 width=200></td>
    </tr>
   `
  })
}
fetchData1()

//!Example 2
//!then()
let api2 = fetch("https://fakestoreapi.com/products")
console.log(api2)
api2.then((res)=>{
   return res.json()
}).then((res)=>{
   console.log(res)
})

//!async and await
let fetchData2 = async () => {
  let api2 = await fetch("https://fakestoreapi.com/products")
  let data = await api2.json()
  console.log(data)
  let container = document.getElementById("table2")
  data.forEach((ele)=>{
    container.innerHTML+=`
    <tr>
      <td>${ele.id}</td>
      <td>${ele.title}</td>
      <td>${ele.category}</td>
      <td>${ele.description}</td>
      <td><img src=${ele.image} height=200 width=200></td>
      <td>${ele.price}</td>
    </tr>
    `
  })
}
fetchData2()

//!Example 3
let fetchData3 = async () => {
  let api3 = await fetch("https://api.github.com/users")
  let data = await api3.json()
  console.log(data)
  let container = document.getElementById("table3")
  data.forEach((ele)=>{
   container.innerHTML+=`
    <tr>
    <td>${ele.id}</td>
    <td>${ele.login}</td>
    <td>${ele.type}</td>
    <td><img src=${ele.avatar_url} height=200 width=200></td>
    <td><a href=${ele.html_url}><button>GitHub Url</button></a></td>
    </tr>
   `
  })
}
fetchData3()

//!Example 4
let fetchData4 = async()=>{
  let api4 =await fetch("https://dog.ceo/api/breeds/image/random")
  let data = await api4.json()
  let imgTag = document.querySelector("img")
  imgTag.src=data.message
}

//!Example 5
let fetchData5=async()=>{
  let api5 = await fetch("https://dummyjson.com/quotes/random")
  let data = await api5.json()
  let marqueeTag = document.querySelector("marquee")
  marqueeTag.innerHTML=`
  <h1>${data.quote}</h1>
  `
}