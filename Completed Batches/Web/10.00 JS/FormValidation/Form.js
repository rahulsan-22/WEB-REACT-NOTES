let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let name = document.getElementById("name")
  let nameFieldValue = document.getElementById("name").value
  let nameFieldErrorMessage = document.getElementById("nameFieldErrorMessage")
  let phone = document.getElementById("phone")
  let phoneFieldValue = document.getElementById("phone").value
  let phoneFieldErrorMessage = document.getElementById("phoneFieldErrorMessage")
  let password = document.getElementById("password")
  let passwordFieldValue = document.getElementById("password").value
  let cpassword = document.getElementById("cpassword")
  let cpasswordFieldValue = document.getElementById("cpassword").value
  let cpasswordFieldErrorMessage = document.getElementById("cpasswordFieldErrorMessage")

  //!Name Field Validation
  if (nameFieldValue.length < 3 || nameFieldValue.length > 10) {
    nameFieldErrorMessage.innerText = "Please enter valid name"
    name.style.border = "1px solid red"
  } else {
    nameFieldErrorMessage.innerText = ""
    name.style.border = "1px solid black"
  }

  //!Phone Field Validation
  let result = isNaN(phoneFieldValue)
  if (phoneFieldValue.length != 10 || result) {
    phoneFieldErrorMessage.innerText = "Please enter valid number"
    phone.style.border = "1px solid red"
  } else {
    phoneFieldErrorMessage.innerText = ""
    phone.style.border = "1px solid black"
  }

  //!Password and Confirm Password
  if (passwordFieldValue != cpasswordFieldValue) {
    cpasswordFieldErrorMessage.innerText = "Please check your password"
    cpassword.style.border = "1px solid red"
  } else {
    cpasswordFieldErrorMessage.innerText = ""
    cpassword.style.border = "1px solid black"
  }
})

let password_eye = document.getElementById("password_eye")
let isPasswordVisible=false;
let passwordField = document.getElementById("password")
password_eye.addEventListener("click",()=>{
  if(isPasswordVisible){
    passwordField.type="password";
    isPasswordVisible=false
    password_eye.classList.replace("fa-eye-slash","fa-eye")
  }else{
    passwordField.type="text";
    isPasswordVisible=true;
    password_eye.classList.replace("fa-eye","fa-eye-slash")
  }
})