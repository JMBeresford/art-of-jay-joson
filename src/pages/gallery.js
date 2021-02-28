import * as React from 'react';
import Header from '../components/header/header';
import GalleryContent from '../components/gallery/galleryContent';
import favicon from '../images/icon.png';
import Helmet from 'react-helmet';

const GalleryPage = () => {
  return (
    <main>
      <Helmet>
        <link rel='icon' href={favicon} />
      </Helmet>
      <Header />
      <GalleryContent />
    </main>
  );
};

export default GalleryPage;
