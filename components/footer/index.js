import React from 'react'
import styles from './styles.module.scss'
import Links from './Links';
import Payment from './Payment';
import Socials from './Socials';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';

const Footer = ({country}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright country={country}  />
      </div>
    </footer>
  );
}

export default Footer