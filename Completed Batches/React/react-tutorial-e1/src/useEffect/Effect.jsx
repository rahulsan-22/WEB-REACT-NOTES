import { useEffect, useState } from "react"
import EffectUnmount from "./EffectUnmount"

const Effect = () => {
    let [count,setCount]=useState(0)
    let [salary,setSalary]=useState(10000)
    //*no dependency
    useEffect(()=>{
       console.log("useEffect acts like updating phase...")
    })
    //*empty dependency
    useEffect(()=>{
        console.log("useEffects acts like mounting phase....")
    },[])
    //*with dependency
    useEffect(()=>{
        console.log("useEffect runs only when one of its dependency change...")
    },[salary])
  return (
    <>
        <h1>Count-{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <h1>Salary-{salary}</h1>
        <button onClick={()=>setSalary(salary+10000)}>Increment Salary</button>
        {count<5 && <EffectUnmount/>}
    </>
  )
}
export default Effect