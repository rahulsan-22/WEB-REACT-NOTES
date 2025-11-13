import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <Navbar/>
      <h1>Home</h1>
      <button className="px-4 py-2.5 bg-blue-700 text-white m-4 rounded" onClick={()=>navigate(-1)}>Go to previous page</button>
    </>
  )
}
export default Home