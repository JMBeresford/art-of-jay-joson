import React, { useState, useEffect, useRef, useCallback } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './carousel.module.css'
import CarouselImages from './carouselImages'

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: {eq: "avatar2.png"}) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const [delta, setDelta] = useState(1)
  const [direction, setDirection] = useState(1)
  let carouselRef = useRef()
  let requestRef = useRef()
  let deltaRef = useRef(1)

  const doScroll = useCallback(() => {
    if (carouselRef.current !== undefined) {
      carouselRef.current.scrollLeft += delta * direction
    }

    requestRef.current = requestAnimationFrame(doScroll)
  }, [delta, direction])

  // default scroll
  useEffect(() => {
    requestRef.current = requestAnimationFrame(doScroll)
    console.log("doscroll changed")

    return () => cancelAnimationFrame(requestRef.current)
  }, [doScroll])

  const changeDirection = (newDirection) => {
    if (direction === newDirection) {
      return
    }

    setDirection(newDirection)
  }

  const handleLeft = () => {
    if (delta !== 5) {
      setDelta(5)
      deltaRef.current = delta
    }

    changeDirection(-1)
  }

  const handleRight = () => {
    if (delta !== 5) {
      setDelta(5)
      deltaRef.current = delta
    }
    
    changeDirection(1)
  }

  const handleMiddle = () => {
    if (delta !== 0) {
      setDelta(0)
      deltaRef.current = delta
    }

    changeDirection(0)
  }

  const handleExit = () => {
    if (delta !== 1) {
      setDelta(1)
      deltaRef.current = delta
    }
    
    changeDirection(1)
  }


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
      <div
        ref={carouselRef}
        onMouseEnter={() => handleMiddle()}
        onMouseLeave={() => handleExit()}
        className={styles.carouselImages}
        data-sal="slide-left"
        data-sal-duration="1000"
      >
        <CarouselImages />
      </div>

      <div
        onMouseEnter={() => handleLeft()}
        onMouseLeave={() => handleExit()}
        className={styles.scrollLeft}
      />

      <div
        onMouseEnter={() => handleRight()}
        onMouseLeave={() => handleExit()}
        className={styles.scrollRight}
      />

    </section>
  )
}

export default Carousel
