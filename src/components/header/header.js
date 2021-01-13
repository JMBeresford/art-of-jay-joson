import React from 'react'
import styles from './header.module.css'
import Brand from './brand'
import Nav from './nav'

const Header = () => {

  return (
    <header className={styles.header}>
      <Brand/>
      <Nav />
    </header>
  )
}

export default Header