import { useEffect } from "react"

const EffectUnmount = () => {
    useEffect(()=>{
        return ()=>{
            console.log("useEffect acts like unMountingPhase")
        }
    },[])
  return (
    <h1>EffectUnmount</h1>
  )
}

export default EffectUnmount