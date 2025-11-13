//!Example 1
// import Axios from "axios"
// import { useEffect, useState } from "react"

// const FetchData = () => {
//   let [details, setDetails] = useState(null)
//   let extractingData = async () => {
//     let { data: { products } } = await Axios.get("https://dummyjson.com/products")
//     setDetails(products)
//   }
//   useEffect(() => {
//     extractingData()
//   }, [])
//   return (
//     <table border="1" cellPadding="10" rules="all" width="100%">
//       <thead>
//         <tr>
//         <th>Id</th>
//         <th>Title</th>
//         <th>Description</th>
//         <th>Category</th>
//         <th>Price</th>
//         <th>Image</th>
//       </tr>
//       </thead>
//      <tbody>
//        {details == null ? <tr><td>Loading....</td></tr>: details.map(data => {
//         return <tr key={data.id}>
//           <td>{data.id}</td>
//           <td>{data.title}</td>
//           <td>{data.description}</td>
//           <td>{data.category}</td>
//           <td>${data.price}</td>
//           <td><img src={data.images} alt={data.title} height={200} width={200}/></td>
//         </tr>
//       })}
//      </tbody>
//     </table>
//   )
// }
// export default FetchData

//!Example 2
// import Axios from "axios"
// import { useEffect, useState } from "react"

// const FetchData = () => {
//   let [details,setDetails]=useState(null)
//   let extractingData = async()=>{
//     let {data:{recipes}} = await Axios.get("https://dummyjson.com/recipes")
//     setDetails(recipes)
//   }
//   useEffect(()=>{
//     extractingData()
//   },[])
//   return (
//     <table border="1" cellPadding="10" rules="all" width="100%">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Ingredients</th>
//           <th>Instructions</th>
//           <th>Cuisine</th>
//           <th>Image</th>
//         </tr>
//       </thead>
//       <tbody>
//         {details == null ? <tr><td>Loading...</td></tr> : details.map( ele =>{
//              return <tr key={ele.id}>
//                 <td>{ele.id}</td>
//                 <td>{ele.name}</td>
//                 <td>{ele.ingredients}</td>
//                 <td>{ele.instructions}</td>
//                 <td>{ele.cuisine}</td>
//                 <td><img src={ele.image} alt={ele.name} height="200" width="200"/></td>
//              </tr>
//         })}
//       </tbody>
//     </table>
//   )
// }

// export default FetchData

//!Example 3
import Axios from "axios"
import { useEffect, useState } from "react"

const FetchData = () => {
  let [quote,setQuote]=useState(null)
  let extractingData = async() => {
      let {data} = await Axios.get("https://dummyjson.com/quotes/random")
     setQuote(data)
  }
  useEffect(()=>{
     extractingData()
  },[])
  let handleReload=()=>{
    location.reload()
  }
  return (
    <>
      {quote == null ? "Loading..." : <>
        <h2>Author: {quote.author}</h2>
        <marquee>
           <h1>{quote.quote}</h1>
        </marquee>
        <button onClick={handleReload}>Generate Quote</button>
      </>}
    </>
  )
}

export default FetchData