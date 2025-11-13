import { useMemo, useState } from "react"

const MemoHook = () => {
  let [age, setAge] = useState(23)
  let [salary, setSalary] = useState(10000)

  let handleAge = () => {
    setAge(age + 1)
  }
  let handleSalary = () => {
   setSalary(salary + 10000)
  }

  let checkAgeisEven = useMemo(()=>{
    let i=0;
    while(i<1000000000) i++
    return age%2
  },[age])
  return (
    <>
      <h1>Age - {age}</h1>
      <button onClick={handleAge}>Increment Age</button>
      <h2>Age is {checkAgeisEven == 1 ? <mark>Odd</mark> : <mark>Even</mark>}</h2>
      <h1>Salary - {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </>
  )
}
export default MemoHook