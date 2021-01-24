import React from 'react'
import styles from './galleryContent.module.css'
import GalleryCategories from "./galleryCategories"
import GalleryImages from "./galleryImages"

const GalleryContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.categories}>
        <GalleryCategories />
      </div>

      <div className={styles.images}>
        <GalleryImages />
      </div>
    </div>
  )
}

export default GalleryContent
