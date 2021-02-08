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
            fluid(maxWidth: 400) {
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
    <aside
      data-sal="slide-left"
      data-sal-duration="1000"
      className={styles.carouselContent} id={"carousel"}
    >
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid}
          className={styles.image} loading="lazy" />
      ))}
    </aside>
  )
}

export default CarouselImages
