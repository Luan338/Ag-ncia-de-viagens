import React from 'react';
import styles from './Destinos.module.css';
import circle from '../Img/circle.png';
import paisagem from '../Img/paisagem.png';

const Destinos = () => {
  return (
  <>
    <div className={styles.boxDestinos}>
      <h1>Destinos</h1>
      <img src={circle} alt="circulo"/>
    </div>
    <div className={styles.boxLandscape}>
      <div className={styles.boxForm}>
        <input placeholder="Busque seu destino" type="text" name="text" className={styles.input}/>
        <button className={styles.btn}>Buscar</button>
      </div>
      <img src={paisagem} alt="paisagem"/>
    </div>
  </>
  )
};

export default Destinos;
