import React from 'react'
import Styles from "./AboutNavbar.module.css"
const AboutNavbar = () => {
    return <nav className={Styles.nav}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </nav>
}

export default AboutNavbar