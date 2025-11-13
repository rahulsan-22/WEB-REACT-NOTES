import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[seagreen] text-white p-7 text-2xl font-semibold'>
      <NavLink to="/" className='mx-2.5'>Home</NavLink>
      <NavLink to="/about" className='mx-2.5'>About</NavLink>
      <NavLink to="/contact" className='mx-2.5'>Contact</NavLink>
    </nav>
  )
}

export default Navbar