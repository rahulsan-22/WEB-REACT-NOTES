import { useRef } from "react"
const UncontrolledForms = () => {
  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form 🙏</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" ref={nameRef} />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" ref={emailRef} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" ref={passwordRef} />
        <br /><br />
        <input type="submit" value="Register 😉" />
      </fieldset>
    </form>
  )
}
export default UncontrolledForms