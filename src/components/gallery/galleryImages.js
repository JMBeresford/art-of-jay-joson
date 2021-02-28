import React, { useState } from 'react';
import styles from './galleryImages.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import 'simplebar/src/simplebar.css';
import mobileMenuClose from '../../svg/mobileMenuClose.svg';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const GalleryImages = props => {
  let imageData = null;

  const data = useStaticQuery(graphql`
    {
      illustrations: allFile(
        filter: { absolutePath: { regex: "/illustrations/" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }

      animations: allFile(filter: { absolutePath: { regex: "/animations/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }

      charDesigns: allFile(
        filter: { absolutePath: { regex: "/characterDesigns/" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }

      storyBoards: allFile(
        filter: { absolutePath: { regex: "/storyBoards/" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  switch (props.category) {
    case 0:
      imageData = data.illustrations;
      break;

    case 1:
      imageData = data.animations;
      break;

    case 2:
      imageData = data.charDesigns;
      break;

    case 3:
      imageData = data.storyBoards;
      break;

    default:
      break;
  }

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
    <div className={styles.wrapper}>
      {lightbox && (
        <Dialog
          allowPinchZoom={true}
          aria-label='image lightbox'
          className={styles.lightbox}
          onDismiss={() => handleClose()}
        >
          <img
            className={styles.closeBtn}
            src={mobileMenuClose}
            alt='close button'
            onClick={() => handleClose()}
            aria-hidden='true'
          />
          <Img
            fluid={image}
            className={styles.lightboxImage}
            imgStyle={{ objectFit: 'contain' }}
          />
        </Dialog>
      )}

      <div className={styles.fadeAway}></div>
      <div className={styles.images}>
        {imageData.edges.map(({ node }) => (
          <div
            key={node.id}
            className={styles.image}
            onClick={() => handleClick(node)}
            aria-hidden='true'
          >
            <Img fluid={node.childImageSharp.fluid} loading='eager' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
