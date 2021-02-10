import React, { useState } from 'react'
import styles from './socials.module.css'

const Socials = () => {

  const [dropped, setDropped] = useState(false)

  return (
    <div className={styles.socialsMenu + (dropped ? ` ${styles.open}` : '')}>
      <div className={styles.wrapper} aria-hidden="true" onClick={() => setDropped(!dropped)}>
        <p>Socials</p>

        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="7.266" height="14.533" viewBox="0 0 7.266 14.533">
          <path id="Icon_ionic-md-arrow-dropright" data-name="Icon ionic-md-arrow-dropright" d="M13.5,9l7.266,7.266L13.5,23.533Z" transform="translate(-13.5 -9)" fill="#404453"/>
        </svg>
      </div>

      <div className={styles.menu}>
        <a href="http://instagram.com/artofjayjoson">Instagram</a>
        <a href="https://www.artstation.com/jayjoson">ArtStation</a>
        <a href="https://www.linkedin.com/in/jayson-cabanas-joson-21a628126/">LinkedIn</a>
      </div>
    </div>
  )
}

export default Socials
