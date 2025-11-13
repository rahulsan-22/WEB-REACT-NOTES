//!Example 1
// import { useState } from "react"
// let State = () => {
//     let [count, setCount] = useState(0)
//     let handleIncrement = () => {
//         setCount(count + 1)
//     }
//     let handleDecrement = () => {
//         setCount(count - 1)
//     }
//     let handleReset = () => {
//         setCount(0)
//     }
//     return <>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//         <button onClick={handleReset}>Reset</button>
//     </>
// }
// export default State

//!Example 2
// import { useState } from "react"
// let State = ()=>{
//     let [food,setFood] = useState("")

//     let handleChickenBiryani=()=>{
//         setFood("🐔 Biryani")
//     }
//     let handleMuttonBiryani=()=>{
//         setFood("🐐 Biryani")
//     }
//     let handleFishBiryani=()=>{
//         setFood("🦈 Biryani")
//     }
//   return <>
//     <h1>My fav food is: {food}</h1>
//     <button onClick={handleChickenBiryani}>🐔 Biryani</button>
//     <button onClick={handleMuttonBiryani}>🐐 Biryani</button>
//     <button onClick={handleFishBiryani}>🦈 Biryani</button>
//   </>
// }
// export default State

//!Example 3
import { useState } from "react"
let State = () => {
    let [details, setDetails] = useState({
        name: "",
        age: null,
        isEmployee:false
    })
    let {name,age,isEmployee} = details

    let handleDetails = () => {
        setDetails({
            name: "Rahul",
            age: 25,
            isEmployee:true
        })
    }
    
    return <>
        <h1>My name is:{name}</h1>
        <p>My age is:{age}</p>
        <p>{isEmployee && "Yes I am working"}</p>
        <button onClick={handleDetails}>Reveal Details</button>
    </>
}
export default State