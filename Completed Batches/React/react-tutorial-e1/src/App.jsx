//!23-07-2025
//!Components
//*Class Based Component
// import { Component } from "react";
// class App extends Component{
//     render(){
//         return <h1>IM CLASS BASED COMPONENT 😎</h1>
//     }
// }
// export default App



//*Function Based Component
// let App = ()=>{
//     return <h1>IM FUNCTION BASED COMPONENT 🔥</h1>
// }
// export default App

//!24/07/2025
//!JSX

// import JavascriptXML from "./Jsx/JavascriptXML"
// let App = ()=>{
//     return <JavascriptXML/>
// }
// export default App

//!25/07/2025
//!useState()
// import State from "./useState/State"
// let App = ()=>{
//     return <State/>
// }
// export default App

//!28/07/2025
//!Props
// import Parent from "./Props/Parent"
// const App = () => {
//     return <Parent />
// }

// export default App

//!29/07/2025
//!Props Children
// import Parent from './Props/Parent'
// const App = () => {
//   return <Parent/>
// }

// export default App

//!Default Parameter
// import Parent from './Props/Parent'
// const App = () => {
//   return <Parent/>
// }

// export default App

//!30/07/2025
//!Props Drilling
// import Krishna from './Props/PropsDrilling/Krishna'

// const App = () => {
//   return <Krishna/>
// }

// export default App


//!State Task(Step Counter)
// import StepCounter from './StateTask/StepCounter'
// import "./StepCounter.css"

// const App = () => {
//   return <StepCounter/>
// }

// export default App

//!01/08/2025
//!useContext()
// import { Icecream, SoftDrinks, Stuff } from './useContext/Instamart'
// import Musarambagh from './useContext/Musarambagh'

// const App = () => {
//   return <>
//     <Icecream value='Arun Icecream'>
//     <SoftDrinks value="Coke">
//         <Stuff value={{item1:"MasalaPeanuts",item2:"MoongDal",item3:"AluBhujia"}}>
//           <Musarambagh/>
//         </Stuff>
//     </SoftDrinks>
//   </Icecream>
//   </>
// }
// export default App

//!02/08/2025
//!Adding Styles (Inline CSS)
// import Inline from './AddingCss/Inline'

// const App = () => {
//   return <Inline/>
// }

// export default App

//!04/08/2025
//!Global CSS
// import Global from './AddingCss/Global'
// import "./Global.css"
// const App = () => {
//   return <Global/>
// }

// export default App

//!ModuleCSS
// import HomeNavbar from './AddingCss/ModuleCSS/HomeNavbar'
// import AboutNavbar from './AddingCss/ModuleCSS/AboutNavbar'
// const App = () => {
//   return <>
//     <HomeNavbar/>
//     <AboutNavbar/>
//   </>
// }

// export default App

//!05/08/2025
//!Tailwind CSS
// import TailwindNavbar from './AddingCss/TailwindNavbar'

// const App = () => {
//   return <TailwindNavbar/>
// }

// export default App

//!06/08/2025
//!Uncontrolled Forms
// import UncontrolledForms from './Forms/UncontrolledForms'
// const App = () => {
//   return <UncontrolledForms/>
// }

// export default App


//!Controlled Forms
// import ControlledForms from './Forms/ControlledForms'

// const App = () => {
//   return <ControlledForms/>
// }

// export default App

//!12/08/2025
//!Formik
// import FormikComponent from './Forms/FormikComponent'

// const App = () => {
//   return <FormikComponent/>
// }

// export default App

//!14/08/2025
//!Lifecycle Methods
// import Lifecycle from './LifecycleMethods/Lifecycle'

// const App = () => {
//   return <Lifecycle/>
// }

// export default App

//!15/08/2025
//!Error Boundary Phase
// import FallbackUI from './ErrorBoundary/FallbackUI'
// import WishIndependeceDay from './ErrorBoundary/WishIndependeceDay'

// const App = () => {
//   return <>
//     <FallbackUI>
//       <WishIndependeceDay name="Pavan" />
//     </FallbackUI>
//     <FallbackUI>
//       <WishIndependeceDay name="Monty" />
//     </FallbackUI>
//     <FallbackUI>
//       <WishIndependeceDay name="Asnan" />
//     </FallbackUI>
//   </>
// }

// export default App

//!16/08/2025
//!useEffect()
// import Effect from './useEffect/Effect'

// const App = () => {
//   return <Effect/>
// }

// export default App

//!18/08/2025
//!Axios
// import FetchData from './Axios/FetchData'

// const App = () => {
//   return <FetchData/>
// }

// export default App

//!20/08/2025
//!Higher Order Components (HOC)
// import GrandFather from './HigherOrderComponents/GrandFather'

// const App = () => {
//   return <GrandFather/>
// }

// export default App

//!Pure Components
// import Pure from './PureComponents/Pure'

// const App = () => {
//   return <Pure />
// }

// export default App

//!21/08/2025
//!Memo()
// import Regular from './Memo/Regular'
// import MemoComponent from './Memo/MemoComponent'
// import { useState } from 'react'

// const App = () => {
//      let [day,setDay] =useState({
//       festival:"Ganesh Chaturthi"
//      })
//      let handleDay = ()=>{
//        setDay({festival:"Vinayaka Chavti"})
//      }
//   return (
//     <>
//       <Regular holiday={day.festival}/>
//       <MemoComponent holiday={day.festival}/>
//       <button onClick={handleDay}>Click to change</button>
//     </>
//   )
// }
// export default App

//!Portals
// import Portal from "./Portals/Portal"
// const App = () => {
//   return <Portal/>
// }

// export default App

//!22/08/2025
//!useMemo()
// import MemoHook from './useMemo/MemoHook'

// const App = () => {
//   return <MemoHook/>
// }

// export default App

//!23/08/2025
//!useCallback()
// import { useCallback, useState } from 'react'
// import Count from './useCallback/Count'
// import Title from './useCallback/Title'
// import Btn from './useCallback/Btn'

// const App = () => {
//   let [age,setAge]=useState(23)
//   let [salary,setSalary]=useState(10000)

//   let handleAge = useCallback(()=>{
//    setAge(age+1)
//   },[age])

//   let handleSalary = useCallback(()=>{
//    setSalary(salary+10000)
//   },[salary])
//   return (
//     <>
//       <Title/>
//       <Count text="Age" val={age}/>
//       <Btn fun={handleAge}>Increment Age</Btn>
//       <Count text="Salary" val={salary}/>
//       <Btn fun={handleSalary}>Increment Salary</Btn>
//     </>
//   )
// }
// export default App

//!29/08/2025
//!Router(V5)
// np

//!31/08/2025
//!Router (V6)
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./Router/Home"
import About from "./Router/About"
import Profile from "./Router/Profile"
import Reviews from "./Router/Reviews"
import Contact from "./Router/Contact"
import PageNotFound from "./Router/PageNotFound"
import "./Router.css"
  
let routes = createBrowserRouter([
   {
    path:"/",
    element:<Home/>
   },
   {
    path:"/about",
    element:<About/>,
    children:[
      {
        path:"/about/profile",
        element:<Profile/>
      },
      {
        path:"/about/reviews",
        element:<Reviews/>
      }
    ]
   },
   {
    path:"/contact",
    element:<Contact/>
   },
   {
    path:"*",
    element:<PageNotFound/>
   }
  ])

const App = () => {
  return (
   <RouterProvider router={routes}/>
  )
}

export default App