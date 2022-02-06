import React from 'react';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <div className={styles.boxFooter}>
        <Logo />
        <p className={styles.paragraph}>Todos os direitos reservados.</p>
    </div>
  );
};

export default Footer;
