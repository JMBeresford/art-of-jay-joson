import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState, useEffect, useRef } from 'react'
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

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const [direction, setdirection] = useState(1); // 1 = right, -1 = right

  function defaultAction() {
    let el = document.querySelector("#carousel");

    el.scrollBy({
      top: 0,
      left: direction * 20,
      behavior: 'smooth'
    });
  }

  useInterval(defaultAction, 100);

  return (
    <aside className={styles.carouselContent} id={"carousel"}>
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid}
          className={styles.image} />
      ))}
    </aside>
  )
}

export default CarouselImages
