import React from 'react'
import styles from './galleryImages.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import SimpleBar from 'simplebar-react';
import 'simplebar/src/simplebar.css';

const GalleryImages = () => {
  const illustrations = useStaticQuery(graphql`{
    allFile(filter: {absolutePath: {regex: "/illustrations/"}}) {
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
  }
  `)
  
  return (
    <SimpleBar className={styles.scroll}>
      <div className={styles.images}>
        {illustrations.allFile.edges.map(({ node }) => (
          <Img key={node.id} fluid={node.childImageSharp.fluid}
            className={styles.image} />
        ))}
      </div>
    </SimpleBar>
  )
}

export default GalleryImages
