let user = document.getElementById("user")
user.innerText = localStorage.getItem("username")
let fetchData = async () => {
    let data = await fetch("https://fakestoreapi.com/products")
    let finalData = await data.json()
    let container = document.getElementById("card_container")
    finalData.forEach((ele) => {
        container.innerHTML += `
        <main class="card">
        <img src=${ele.image}> 
        <h1>${ele.title.slice(0,28)}</h1>
        <p>${ele.description.slice(0, 80)}</p>
        <b>Rs.${ele.price}</b>
        <button onclick='addToCart("${ele.title}", ${ele.price})'>ADD TO CART</button>
        </main>
        `
    })
}
fetchData()
let count = 0;
let cart = []
let cartPrice = []
let cart_value = document.getElementById("cart_value")
let addToCart = (productTitle, productPrice) => {
    // console.log(productPrice)
    // console.log(productTitle)
    count++
    cart_value.innerText = count
    let finalObj = {
        name: productTitle,
        price: productPrice
    }
    cart.push(finalObj)
    let cartItems = document.getElementById("cart_items")
    cartPrice.push(cart[cart.length - 1].price)
    let finalPrice = cartPrice.reduce((storage, ele) => {
        return storage += ele
    })
    cartItems.innerHTML += `
    <article id="single_cart">
    <h1>${cart[cart.length - 1].name} </h1>
    <p>Rs.${cart[cart.length - 1].price}</p>
    </article>
    `
    let priceContainer = document.querySelector("#price_container")
     priceContainer.innerHTML=`
     <p>Your Total Price is:${Math.round(finalPrice)}</p>
    `
    // cartItems.style.display = "block"
}