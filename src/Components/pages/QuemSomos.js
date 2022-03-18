import React from 'react';
import principal from '../../Img/principal.png';
import grafico from '../../Img/grafico.png';
import circle from '../../Img/circle.png';
import styles from './QuemSomos.module.css';

const QuemSomos = () => {
  return(
    <section className={styles.groupPrincipal}>
      <section className={`${styles.container} animeLeft`}>
        <div className={styles.contain}>
          <h1>VoandoAlto</h1>
          <p>A melhor e mais completa agência de viagens do país.</p>
        </div>
        <div className={styles.principal}>
          <img src={principal} alt="Imagem principal" className={styles.imgEu} />
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
    </section>
  );
};

export default QuemSomos;
