import React from 'react'
import navStyles from './nav.module.css'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link to="/gallery">Gallery</Link>
      <p href="#aboutMe">About Me</p>
      <Link to="/contact">Contact Me</Link>
      <p>Socials</p>
    </nav>
  )
}

export default Nav
