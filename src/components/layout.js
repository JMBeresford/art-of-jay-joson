import React from 'react'
import './layout.css'

// used for global styling, found in layout.css
const Layout = ({children}) => {

  return (
    <div>
      <div className="scrollIndicator">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {children}
    </div>
  )
}

export default Layout