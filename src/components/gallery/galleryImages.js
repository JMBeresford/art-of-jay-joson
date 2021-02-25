import React from 'react'
import styles from './galleryImages.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import SimpleBar from 'simplebar-react';
import 'simplebar/src/simplebar.css';

const GalleryImages = (props) => {
  let images = null;

  const data = useStaticQuery(graphql`{
    illustrations: allFile(filter: {absolutePath: {regex: "/illustrations/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              base64
            }
          }
        }
      }
    }

    animations: allFile(filter: {absolutePath: {regex: "/animations/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              base64
            }
          }
        }
      }
    }

    charDesigns: allFile(filter: {absolutePath: {regex: "/characterDesigns/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              base64
            }
          }
        }
      }
    }

    storyBoards: allFile(filter: {absolutePath: {regex: "/storyBoards/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              base64
            }
          }
        }
      }
    }
  }`)

  switch (props.category) {
    case 0:
      images = data.illustrations;
      break;
  
    case 1:
      images = data.animations;
      break;
  
    case 2:
      images = data.charDesigns;
      break;
  
    case 3:
      images = data.storyBoards;
      break;
  
    default:
      break;
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeAway}></div>
      <SimpleBar className={styles.scroll}>
        <div className={styles.images}>
          {images.edges.map(({ node }) => (
            <Img key={node.id} fluid={node.childImageSharp.fluid}
              className={styles.image} loading="eager" />
          ))}
        </div>
      </SimpleBar>
    </div>
  )
}

export default GalleryImages
