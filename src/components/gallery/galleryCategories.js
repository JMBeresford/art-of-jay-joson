import React from 'react';
import styles from './galleryCategories.module.css';

const GalleryCategories = props => {
  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <div className={styles.mobileDashes}>
          <div className={styles.fader1} />
          <p>—</p>
          <p>—</p>
          <div className={styles.fader2} />
        </div>
        <div className={styles.categories}>
          <button
            href='#'
            onClick={() => props.changeCategory(0)}
            className={props.category === 0 ? '' : styles.inactive}
          >
            Illustrations
          </button>
          <button
            href='#'
            onClick={() => props.changeCategory(1)}
            className={props.category === 1 ? '' : styles.inactive}
          >
            Animations
          </button>
          <button
            href='#'
            onClick={() => props.changeCategory(2)}
            className={props.category === 2 ? '' : styles.inactive}
          >
            Character Designs
          </button>
          <button
            href='#'
            onClick={() => props.changeCategory(3)}
            className={props.category === 3 ? '' : styles.inactive}
          >
            Story Boards
          </button>
          <button
            href='#'
            onClick={() => props.changeCategory(4)}
            className={props.category === 4 ? '' : styles.inactive}
          >
            Reels
          </button>
        </div>
      </nav>
    </div>
  );
};

export default GalleryCategories;
