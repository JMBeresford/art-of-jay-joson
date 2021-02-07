import React, { useState } from 'react'
import styles from './galleryContent.module.css'
import GalleryCategories from "./galleryCategories"
import GalleryImages from "./galleryImages"

const GalleryContent = () => {
  const [category, setCategory] = useState(0)

  function changeCategory(i) {
    return setCategory(i);
  }

  return (
    <div className={styles.content}>
      <div
        className={styles.categories}
        data-sal="fade"
        data-sal-duration="600"
        data-sal-delay="400"
      >
        <GalleryCategories
          category={category}
          changeCategory={changeCategory}
        />
      
      </div>

      <div
        className={styles.images}
        data-sal="fade"
        data-sal-duration="600"
        data-sal-delay="800"
      >
        <GalleryImages category={category} />
      </div>
    </div>
  )
}

export default GalleryContent
