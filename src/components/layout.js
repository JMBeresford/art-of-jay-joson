import React from 'react'
import './layout.css'

// used for global styling, found in layout.css
const Layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout