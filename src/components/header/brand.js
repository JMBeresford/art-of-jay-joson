import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import brandStyles from './brand.module.css'

const Brand = () => {
  const data = useStaticQuery(graphql`query MyQuery {
    file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }    
  `)
  return (
    <div className={brandStyles.brand}>
      <div className={brandStyles.imgWrapper}>
        <Img fluid={data.file.childImageSharp.fluid} alt="Brand Icon" />
      </div>
      <h3 className={brandStyles.brandText}>Art of Jay Joson</h3>
    </div>
  )
}

export default Brand