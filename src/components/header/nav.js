import React, { useState, useEffect } from 'react'
import styles from './nav.module.css'
import { Link } from 'gatsby'
import mobileMenuSvg from '../../svg/mobileMenu.svg'
import mobileMenuClose from '../../svg/mobileMenuClose.svg'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  function handleScroll(e) {
    setOpen(false)
    if (window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  })

  return (
    <>
      <nav className={styles.nav + (scrolled ? " " + styles.navscrolled : "")}>
        <Link className={styles.navLinkDesktop} to="/gallery">Gallery</Link>
        <Link className={styles.navLinkDesktop} to="/contact">Contact Me</Link>
        <a href="#socials" className={styles.navLinkDesktop}>Socials</a>
      </nav>

      <nav className={styles.navMobile + ((open) ? " " + styles.open: "") +
                      (scrolled ? " " + styles.navMobileScrolled : "")}>
        <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <img src={open ? mobileMenuClose : mobileMenuSvg} alt="menu button"/>
        </button>
        <Link className={styles.navLink} to="/gallery">Gallery</Link>
        <Link className={styles.navLink} to="/contact">Contact Me</Link>
        <a href="#socials" className={styles.navLink}>Socials</a>
      </nav>
    </>
  )
}

export default Nav
