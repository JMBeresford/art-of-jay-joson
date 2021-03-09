import * as React from 'react';
import Header from '../components/header/header';
import GalleryContent from '../components/gallery/galleryContent';
import favicon from '../images/icon.png';
import Helmet from 'react-helmet';
import Footer from '../components/footer/footer';

const GalleryPage = () => {
  return (
    <main>
      <Helmet>
        <link rel='icon' href={favicon} />
      </Helmet>
      <Header scrollable={false} />
      <GalleryContent />
      <Footer />
    </main>
  );
};

export default GalleryPage;
