import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
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
  const [scroll, setScroll] = useState(0)
  
  let carouselRef = useRef()
  let requestRef = useRef()
  let sliderRef = useRef(0)

  const doScroll = useCallback(() => {
    if (carouselRef.current !== undefined) {
      carouselRef.current.scrollLeft += delta * direction
      setScroll(carouselRef.current.scrollLeft)
    }

    requestRef.current = requestAnimationFrame(doScroll)
  }, [delta, direction])

  // start auto-scroll animation
  useEffect(() => {
    requestRef.current = requestAnimationFrame(doScroll)

    return () => cancelAnimationFrame(requestRef.current)
  }, [doScroll])

  useEffect(() => {
    if (scroll === 0) {
      setDirection(1)
    } else if (`${scroll}` === sliderRef.current.max) {
      setDirection(-1)
    }
  }, [scroll])

  useLayoutEffect(() => {
    if (sliderRef.current !== undefined) {
      sliderRef.current.max = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    }
  }, [])

  function pauseAnimation(e) {
    if (delta !== 0) {
      setDelta(0)
    }
  }

  function resumeAnimation(e) {
    if (delta !== 1) {
      setDelta(1)
    }
  }

  const handleSlide = (e) => {
    setScroll(e.target.value)
    if (carouselRef.current !== undefined) {
      carouselRef.current.scrollLeft = scroll
    }
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
        aria-hidden="true"
        onMouseEnter={pauseAnimation}
        onMouseLeave={resumeAnimation}
        className={styles.carouselImages}
        data-sal="slide-left"
        data-sal-duration="1000"
      >
        <CarouselImages />

      </div>

      <input
        className={styles.sliderLiteral}
        ref={sliderRef}
        type="range"
        min="0"
        value={scroll}
        onChange={handleSlide}
        step="1"
      />

    </section>
  )
}

export default Carousel
