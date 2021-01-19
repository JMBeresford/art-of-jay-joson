import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styles from './carouselImages.module.css'

const CarouselImages = () => {
  const data = useStaticQuery(graphql`{
    allFile(filter: {absolutePath: {regex: "/favorites/"}}) {
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
    <aside className={styles.carouselContent}>
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid} />
      ))}
    </aside>
  )
}

export default CarouselImages
