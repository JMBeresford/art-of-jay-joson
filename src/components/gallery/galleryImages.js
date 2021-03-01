import React, { useState } from 'react';
import styles from './galleryImages.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Video } from '../gatsby-video/src/index';
import 'simplebar/src/simplebar.css';
import mobileMenuClose from '../../svg/mobileMenuClose.svg';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { isMobile } from 'react-device-detect';

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
            childVideoFfmpeg {
              webm: transcode(
                codec: "libvpx-vp9"
                fileExtension: "webm"
                outputOptions: ["-crf 20", "-b:v 0"]
                maxWidth: 10
              ) {
                src
                width
                aspectRatio
                height
                presentationMaxHeight
                presentationMaxWidth
                fileExtension
                originalName
              }
              mp4: transcode(
                maxWidth: 900
                fileExtension: "mp4"
                codec: "libx264"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
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
  const [video, setVideo] = useState(null);
  const [lightbox, setLightbox] = useState(false);

  const handleClick = node => {
    if (props.category === 1) {
      setVideo(node.childVideoFfmpeg);
    } else {
      setImage(node.childImageSharp.fluid);
    }
    setLightbox(true);
  };

  const handleHover = node => {
    if (isMobile) {
      return;
    }
    var el = document.getElementById(node.id);

    if (el !== null) {
      el.play();
    }
  };

  const pause = id => {
    var el = document.getElementById(id);

    if (el !== null) {
      el.pause();
    }
  };

  const handleExit = node => {
    if (isMobile) {
      return;
    }
    var el = document.getElementById(node.id);

    el.pause();
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
          {props.category === 1 ? (
            <Video
              muted
              autoPlay
              loop
              controls
              playsInline
              sources={[video.webm, video.mp4]}
            />
          ) : (
            <Img
              fluid={image}
              className={styles.lightboxImage}
              imgStyle={{ objectFit: 'contain' }}
            />
          )}
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
            {props.category === 1 ? (
              <Video
                id={node.id}
                muted
                autoPlay
                onLoadedData={() => pause(node.id)}
                loop
                playsInline
                onClick={() => null}
                onMouseEnter={() => handleHover(node)}
                onMouseLeave={() => handleExit(node)}
                sources={[
                  node.childVideoFfmpeg.webm,
                  node.childVideoFfmpeg.mp4,
                ]}
              />
            ) : (
              <Img fluid={node.childImageSharp.fluid} loading='eager' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
