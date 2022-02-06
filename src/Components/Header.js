import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useRef } from 'react'
import Logo from './Logo';


const Header = () => {
    
    const navRef = useRef();

    function activeBtn(){
     navRef.current.classList.toggle('active');
    }

  return(
    <header>
        <Link className={styles.linkzada} to="/" aria-label="VoandoAlto - Home">
            <Logo />
        </Link>
        <nav className={styles.navList} ref={navRef}>
            <ul className={styles.boxList}>
                <Link className={styles.list} to="/">Home</Link>
                <Link className={styles.list} to="/destino">Destinos</Link>
                <Link className={styles.list} to="/promocao">Promoções</Link>
                <Link className={styles.list} to="/login">Login | Criar</Link>
            </ul>
        </nav>
        <div className={styles.containerMenu}>
            <div className={styles.boxMenuMobile} >
                <input type="checkbox" id={styles.checkBoxMenu} />
                <label htmlFor="checkBoxMenu" id={styles.btnMobile} onClick={activeBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </div>     
    </header>
    );
};

export default Header;
