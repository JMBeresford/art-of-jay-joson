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
              ...GatsbyImageSharpFluid_tracedSVG
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
        <Img key={node.id} fluid={node.childImageSharp.fluid}
          className={styles.image} />
      ))}
    </aside>
  )
}

export default CarouselImages
