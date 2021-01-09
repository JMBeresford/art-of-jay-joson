import React from 'react'
import headerStyles from './header.module.css'
import Brand from './brand'
import Nav from './nav'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Brand/>
      <Nav />
    </header>
  )
}

export default Header