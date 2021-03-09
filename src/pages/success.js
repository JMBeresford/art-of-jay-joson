import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import favicon from '../images/icon.png';

const SuccessPage = () => {
  return (
    <>
      <main style={{ height: '100vh' }}>
        <Helmet title='Art of Jay Joson'>
          <link rel='icon' href={favicon} />
        </Helmet>
        <Header />
        <div className='successWrapper'>
          <h2>message sent! i'll be in touch!</h2>
          <p>
            Feel free to head back to the <Link to='/'>home</Link> page
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SuccessPage;
