import React, { useState } from 'react'
import styles from './nav.module.css'
import { Link } from 'gatsby'
import mobileMenuSvg from '../../images/mobileMenu.svg'
import mobileMenuClose from '../../images/mobileMenuClose.svg'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/gallery">Gallery</Link>
        <p href="#aboutMe">About Me</p>
        <Link to="/contact">Contact Me</Link>
        <p>Socials</p>
      </nav>

      <nav className={styles.navMobile + (open ? " " + styles.open: "")}>
        <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <img src={open ? mobileMenuClose : mobileMenuSvg} alt="menu button"/>
        </button>
        <Link className={styles.navLink} to="/gallery">Gallery</Link>
        <p className={styles.navLink} href="#aboutMe">About Me</p>
        <Link className={styles.navLink} to="/contact">Contact Me</Link>
        <p className={styles.navLink}>Socials</p>
      </nav>
    </>
  )
}

export default Nav
