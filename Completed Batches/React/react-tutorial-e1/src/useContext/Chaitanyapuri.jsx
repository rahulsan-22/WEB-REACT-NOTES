import { use, useContext } from "react"
import { Icecream, Stuff } from "./Instamart"
const Chaitanyapuri = () => {
    let product1 = useContext(Icecream)
    let items = use(Stuff)
   let {item1,item2,item3}= items
  return (
    <div>
      <h1>Chaitanyapuri - <mark>{product1}</mark></h1>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  )
}
export default Chaitanyapuri