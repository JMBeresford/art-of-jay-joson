import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './carousel.module.css';
import CarouselImages from './carouselImages';
import ScrollContainer from 'react-indiana-drag-scroll';

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar2.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const [scrolling, setScrolling] = useState(false);

  const handleEndScroll = () => {
    window.setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.avatar}>
        <Img fluid={data.avatar.childImageSharp.fluid} />
      </div>

      <p className={styles.avatarText}>Here are some of my best works...</p>

      <div className={styles.carouselImages}>
        <ScrollContainer
          vertical={false}
          className={styles.carouselImages}
          onStartScroll={() => setScrolling(true)}
          onEndScroll={() => handleEndScroll()}
        >
          <CarouselImages scrolling={scrolling} />
        </ScrollContainer>
      </div>

      <div className={styles.seeMore}>
        <Link to='/gallery'>Check out the rest</Link>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='7.266'
          height='14.533'
          viewBox='0 0 7.266 14.533'
        >
          <path
            id='Icon_ionic-md-arrow-dropright'
            data-name='Icon ionic-md-arrow-dropright'
            d='M13.5,9l7.266,7.266L13.5,23.533Z'
            transform='translate(-13.5 -9)'
            fill='#404453'
          />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
