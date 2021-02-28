import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import styles from './carouselImages.module.css';
import { Dialog } from '@reach/dialog';
import mobileMenuClose from '../../svg/mobileMenuClose.svg';

const CarouselImages = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/favorites/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const [image, setImage] = useState(null);
  const [lightbox, setLightbox] = useState(false);

  const handleClick = node => {
    setImage(node.childImageSharp.fluid);
    setLightbox(true);
  };

  const handleClose = () => {
    var lb = document.querySelector('[data-reach-dialog-overlay]');
    lb.classList.add('close');
    window.setTimeout(() => {
      setLightbox(false);
    }, 500);
  };

  return (
    <aside className={styles.carouselContent}>
      {lightbox && (
        <Dialog
          aria-label='image lightbox'
          className={styles.lightbox}
          onDismiss={() => handleClose()}
        >
          <div
            className={styles.closeWrapper}
            onClick={() => handleClose()}
            aria-hidden='true'
          >
            <img
              className={styles.closeBtn}
              src={mobileMenuClose}
              alt='close button'
            />
          </div>
          <Img fluid={image} className={styles.lightboxImage} />
        </Dialog>
      )}
      <div className={styles.spacer1} />
      {data.allFile.edges.map(({ node }) => (
        <div
          className={styles.image}
          key={node.id}
          onClick={() => handleClick(node)}
          aria-hidden
        >
          <Img fluid={node.childImageSharp.fluid} />
        </div>
      ))}
      <div className={styles.spacer2} />
    </aside>
  );
};

export default CarouselImages;
