import React, { useState, useEffect } from 'react';
import styles from './nav.module.css';
import { Link } from 'gatsby';
import mobileMenuSvg from '../../svg/mobileMenu.svg';
import mobileMenuClose from '../../svg/mobileMenuClose.svg';
import Socials from './socials';
import IdentityModal from 'react-net';

const Nav = props => {
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleScroll(e) {
    setOpen(false);
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={styles.nav + (scrolled ? ' ' + styles.navscrolled : '')}>
        <Link className={styles.navLinkDesktop} to='/gallery'>
          Gallery
        </Link>
        <Link className={styles.navLinkDesktop} to='/contact'>
          Contact Me
        </Link>
        <Socials scrolled={scrolled} className={styles.navLinkDesktop} />
      </nav>

      <a
        className={styles.arrow + (scrolled ? ' ' + styles.scrolled : '')}
        href='#index'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16.616'
          height='9.503'
          viewBox='0 0 23.616 13.503'
        >
          <path
            id='Icon_ionic-ios-arrow-down'
            data-name='Icon ionic-ios-arrow-down'
            d='M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z'
            transform='translate(-6.188 -11.246)'
          />
        </svg>
      </a>

      <button
        style={{ position: props.scrollable ? 'fixed' : 'absolute' }}
        className={
          styles.menuBtn +
          (open ? ' ' + styles.open : '') +
          (scrolled && props.scrollable ? ' ' + styles.scrolled : '')
        }
        onClick={() => setOpen(prev => !prev)}
      >
        <img src={open ? mobileMenuClose : mobileMenuSvg} alt='menu button' />
      </button>

      <nav
        className={
          styles.navMobile +
          (open ? ' ' + styles.open : '') +
          (scrolled ? ' ' + styles.navMobileScrolled : '')
        }
      >
        <Link className={styles.navLink} to='/gallery'>
          Gallery
        </Link>
        <div className={styles.navLink}>
          <Socials mobile={true} />
        </div>
        <Link className={styles.navLink} to='/contact'>
          Contact Me
        </Link>
      </nav>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  );
};

export default Nav;
