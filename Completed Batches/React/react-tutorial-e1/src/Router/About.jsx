import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <NavLink to="/about/profile">Profile</NavLink>
      <NavLink to="/about/reviews">Reviews</NavLink>
      <Outlet/>
    </>
  )
}

export default About