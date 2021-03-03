import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './brand.module.css';
import { Link } from 'gatsby';

const Brand = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={styles.brand}>
      <Link className={styles.home} to='/'>
        <div className={styles.imgWrapper}>
          <Img fluid={data.file.childImageSharp.fluid} alt='logo' />
        </div>
        <h3 className={styles.brandText}>Art of Jay Joson</h3>
      </Link>
    </div>
  );
};

export default Brand;
