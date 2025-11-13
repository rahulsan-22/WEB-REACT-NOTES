let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    alert("SUCCESSFULLY REGISTERED✅")
})