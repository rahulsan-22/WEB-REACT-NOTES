import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

const Contact = () => {
  let navigate = useNavigate()
  return (
    <>
      <Navbar />
      <h1>Contact</h1>
      <button className="px-4 py-2.5 bg-blue-700 text-white m-4 rounded" onClick={()=>navigate("/")}>Go to home</button>
    </>
  )
}

export default Contact