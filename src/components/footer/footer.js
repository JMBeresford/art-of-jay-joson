import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './footer.module.css';
import Img from 'gatsby-image';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query icon {
      file(relativePath: { eq: "icon_transparent.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [path, setPath] = useState(null);

  useEffect(() => {
    if (window !== null) {
      setPath(window.location.pathname);
    }
  }, [path]);

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.imgWrapper}>
          <Img
            className={styles.icon}
            imgStyle={{ objectFit: 'contain' }}
            fluid={data.file.childImageSharp.fluid}
          />
        </li>
        <li>
          Navigation
          <ul className={styles.subList}>
            <li className={path === '/' ? styles.disabled : ''}>
              <Link disabled={path === '/'} to='/'>
                Home
              </Link>
            </li>
            <li className={path === '/gallery' ? styles.disabled : ''}>
              <Link disabled={path === '/gallery'} to='/gallery'>
                Gallery
              </Link>
            </li>
            <li className={path === '/contact' ? styles.disabled : ''}>
              <Link disabled={path === '/contact'} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Social Media
          <ul className={styles.subList}>
            <li>
              <a href='http://instagram.com/artofjayjoson'>Instagram</a>
            </li>
            <li>
              <a href='https://www.artstation.com/jayjoson'>ArtStation</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/jayson-cabanas-joson-21a628126/'>
                LinkedIn
              </a>
            </li>
          </ul>
        </li>
        <li>
          Administration
          <ul className={styles.subList}>
            <li>
              <Link to='/admin'>Login</Link>
            </li>
            <li>
              <p className={styles.pSpacer}>spacer</p>
            </li>
            <li>
              <p className={styles.pSpacer}>spacer</p>
            </li>
          </ul>
        </li>
      </ul>
      <p className={styles.tm}>
        A <a href='http://beresforddesign.net'>Beresford Design</a>™
      </p>
    </footer>
  );
};

export default Footer;
