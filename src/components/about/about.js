import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './about.module.css';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div id='about' className={styles.about}>
      <div className={styles.avatar}>
        <div className={styles.avatarText}>
          <p>"about</p>
          <p>me"?</p>
        </div>

        <Img fluid={data.file.childImageSharp.fluid} />
      </div>

      <div className={styles.text}>
        <h2 className={styles.head}>Who am I?</h2>

        <p className={styles.statement}>
          I am an illustrator, an animator, a designer. I am a creator. What is
          limited in reality is limitless in my mind. My work is a way for me to
          share my thoughts and fantasies through a visual medium, merging
          fantasy with reality, and art with science. Whether it’s with pen,
          pencil, or stylus, I strive to make my artwork pop.
        </p>
      </div>
    </div>
  );
};

export default About;
