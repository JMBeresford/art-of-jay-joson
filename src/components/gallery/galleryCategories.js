import React from 'react'
import styles from './galleryCategories.module.css'

const GalleryCategories = (props) => {
  return (
    <div className={styles.categories}>
      <p
        onClick={props.changeCategory(0)}
        className={props.category === 0 ? '' : styles.inactive}
      >Illustrations</p>
      <p
        onClick={props.changeCategory(1)}
        className={props.category === 1 ? '' : styles.inactive}
      >Animations</p>
      <p
        onClick={props.changeCategory(2)}
        className={props.category === 2 ? '' : styles.inactive}
      >Character Designs</p>
      <p
        onClick={props.changeCategory(3)}
        className={props.category === 3 ? '' : styles.inactive}
      >Story Boards</p>
    </div>
  )
}

export default GalleryCategories
