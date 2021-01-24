import React from 'react'
import styles from './galleryImages.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
    <div className={styles.images}>
      <SimpleBar>
        {illustrations.allFile.edges.map(({ node }) => (
          <Img key={node.id} fluid={node.childImageSharp.fluid}
            className={styles.image} />
        ))}
      </SimpleBar>
    </div>
  )
}

export default GalleryImages
