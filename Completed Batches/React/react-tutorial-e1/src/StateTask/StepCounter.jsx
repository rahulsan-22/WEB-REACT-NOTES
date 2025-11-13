import { useState } from "react"

const StepCounter = () => {
   let [steps, setSteps] = useState(0)
   let [isOpen, setIsOpen] = useState(true)
   let msgs = [
      "Eat 😋",
      "Sleep 😴",
      "Repeat 🔁"
   ]
   let handleNext = () => {
      if (steps < 2)
         setSteps(steps + 1)
   }
   let handlePrevious = () => {
      if (steps > 0)
         setSteps(steps - 1)
   }
   let handleOpenClose = () => {
      setIsOpen(!isOpen)
   }
   return <section className="step-counter">
      <main className="counter-container">
         {
            isOpen ? <>
               <aside id="container1" onClick={handleOpenClose}>&times;</aside>
               <aside id="container2">
                  <p className={steps == 0 ? "active" : ""}>1</p>
                  <p className={steps == 1 ? "active" : ""}>2</p>
                  <p className={steps == 2 ? "active" : ""}>3</p>
               </aside>
               <aside id="container3">
                  <h2>{msgs[steps]}</h2>
               </aside>
               <aside id="container4">
                  <button onClick={handlePrevious}>Previous</button>
                  <button onClick={handleNext}>Next</button>
               </aside>
            </>
               : ""
         }
      </main>
   </section>
}

export default StepCounter