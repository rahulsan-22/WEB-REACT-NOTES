import Styles from "./HomeNavbar.module.css"

const HomeNavbar = () => {
  return (
    <nav className={Styles.nav}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </nav>
  )
}

export default HomeNavbar