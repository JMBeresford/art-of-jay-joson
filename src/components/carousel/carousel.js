import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './carousel.module.css'
import CarouselImages from './carouselImages'

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

  return (
    <section className={styles.carousel}>
      <div
        className={styles.avatar}
        data-sal="fade"
        data-sal-duration="400"
      >
        <Img fluid={data.avatar.childImageSharp.fluid}/>
      </div>
      <p
        className={styles.avatarText}
        data-sal="fade"
        data-sal-duration="400"
      >
        Here are some of my best works...
      </p>

      <div
        className={styles.seeMore}
        data-sal="fade"
        data-sal-delay="1000"
      >
        <Link to="/gallery">Check out the rest</Link>
        
        
        <svg xmlns="http://www.w3.org/2000/svg" width="7.266" height="14.533" viewBox="0 0 7.266 14.533">
          <path id="Icon_ionic-md-arrow-dropright" data-name="Icon ionic-md-arrow-dropright" d="M13.5,9l7.266,7.266L13.5,23.533Z" transform="translate(-13.5 -9)" fill="#404453"/>
        </svg>
      </div>
      <div className={styles.carouselImages}>
        <CarouselImages />
      </div>
    </section>
  )
}

export default Carousel
