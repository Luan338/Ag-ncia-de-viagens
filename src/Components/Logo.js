import React from 'react';
import styles from './Logo.module.css';
import logo from '../Img/logo1.png';


const Logo = () => {
  return(
    <section className={styles.boxLogo}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <h3>VoandoAlto</h3>
    </section>
  );
};

export default Logo;
