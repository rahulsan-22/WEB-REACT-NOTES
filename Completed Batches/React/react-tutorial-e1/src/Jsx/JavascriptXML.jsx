//!Jsx
// let JavascriptXML = ()=>{
//     return <h1>JSX</h1>
// }
// export default JavascriptXML

//!Rules
//*1)Multiple JSX Elements must be wrapped in a common parent element
// let JavascriptXML = () => {
//     return <div>
//         <h1>Hello</h1>
//         <p>Lorem ipsum dolor sit amet.</p>
//     </div>
// }
// export default JavascriptXML

//@Fragments
// let JavascriptXML = ()=>{
//    return <>
//     <h1>Hello</h1>
//    <p>Lorem ipsum dolor sit amet.</p>
//    </>
// }
// export default JavascriptXML

//*2)Unpaired Tags must be closed properly
// let JavascriptXML = () => {
//     return <>
//         <img src="path" height="200" width="150" />
//         <input></input>
//         <hr/>
//     </>
// }
// export default JavascriptXML
//*3)Attributes like for and class should be replaced with htmlFor and className
// let JavascriptXML = ()=>{
//     return <>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" className="inputField"/>
//     </>
// }
// export default JavascriptXML

//*4)JSX Elements should always be written in lowercase
// let JavascriptXML = ()=>{
//     return <>
//       <h1>Are you feeling Hungry?</h1>
//       <Button>Click</Button>
//     </>
// }
// export default JavascriptXML

//!Expression
let bioData = {
    name:"Rahul",
    age:25,
    isEmployee:true,
    skills:["Html","Css","Js","React"]
}
let {name,age,isEmployee,skills:[a,b,c,d]}=bioData
let JavascriptXML = ()=>{
    return <>
        <h1>My name is {name}</h1>
        <p>My age is {age}</p>
        <p>{isEmployee ? "Yes I am a Employee" : "Im Unemployed"}</p>
        <b>My skills are: </b>
        <ul>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
        </ul>
    </>
}
export default JavascriptXML