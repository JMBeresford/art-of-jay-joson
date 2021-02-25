import React from 'react'
import styles from './header.module.css'
import Brand from './brand'
import Nav from './nav'

const Header = (props) => {

  return (
    <header className={styles.header}>
      <Brand/>
      <Nav scrollable={props.scrollable} />
    </header>
  )
}

export default Header