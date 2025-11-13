//!Props
// import Child from './Child'
// const Parent = () => {
//   return <Child product="Gold Chain" price={200000} original={true} proof={null}/>
// }

// export default Parent

//!Props Children
// import Child from './Child'
// let obj = {
//   name:"monty",
//   age:27
// }
// const Parent = () => {
//   return <Child details={obj}>
//     <ul>
//       <li>Python</li>
//       <li>Dancing</li>
//       <li>Singing</li>
//     </ul>
//   </Child>
// }

// export default Parent

//!Default Parameter
import Child from './Child'

const Parent = () => {
  return <Child firstName="Virat" obj={{lastName:"Kohli"}}>
     <p>My wife name is <b>Anushka Sharma</b></p>
  </Child>
}

export default Parent