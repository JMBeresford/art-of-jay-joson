import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styles from './carousel.module.css'

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: {eq: "avatar2.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <section className={styles.carousel}>
      <div className={styles.avatar}>
        <Img fluid={data.avatar.childImageSharp.fluid}/>
      </div>
      <p className={styles.avatarText}>
        Here are some of my best works...
      </p>

      
    </section>
  )
}

export default Carousel
