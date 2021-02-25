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
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
  `)

  return (
    <aside className={styles.carouselContent}>
      <div className={styles.spacer} />
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid}
        className={styles.image} />
        ))}
      <div className={styles.spacer} />
    </aside>
  )
}

export default CarouselImages
