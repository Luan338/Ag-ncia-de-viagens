import React from 'react';
import triangulo from '../Img/triangulo.png';
import principal from '../Img/principal.png';
import grafico from '../Img/grafico.png';
import circle from '../Img/circle.png';
import styles from './Home.module.css';

const Home = () => {
  return(
    <>
    <section className={styles.container}>
      <div className={styles.contain}>
        <h1>Agência de viagens</h1>
        <p>A melhor e mais completa agência de viagens do país.</p>
        <div className={styles.boxTriangulo}>
          <img className={styles.triangulo1} src={triangulo} alt="triangulo"/>
          <img className={styles.triangulo2} src={triangulo} alt="triangulo"/>
        </div>
      </div>
      <div className={styles.principal}>
        <img src={principal} alt="Imagem principal" />
      </div>
    </section>
    <section className={styles.boxContact}>
      <div className={styles.titleContact}>
        <img src={grafico} alt="grafico"/>
        <h2>Nossos contatos</h2>
        <img src={circle} alt="circle"/>
      </div>
      <div className={styles.box}>
        <p>E-mail: voandoalto@gmail.com</p>
        <p>Telefone: (21)99999-9999</p>
      </div>
    </section>
    </>
  );
};

export default Home;
