import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Navigation.module.css';

const Navigation = () => {
  return (
    <section className={styled.container}>
      <nav className={styled.nav}>
        <Link className={styled.text} to="/voos">Voos</Link>
        <Link className={styled.text} to="/destino">Hotéis</Link>
        <Link className={styled.text} to="/promocao">Top ofertas</Link>
      </nav>
    </section>
  )
}

export default Navigation;