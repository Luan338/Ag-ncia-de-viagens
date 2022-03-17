import React from 'react';
import styles from './Destinos.module.css';
import aviao from '../../Img/aviao.jpg';

const Destinos = () => {
  return (
  <section className='animeLeft'>
    <div className={styles.boxDestinos}>
      {/* <h1>Destinos</h1>
      <img src={circle} alt="circulo"/> */}
    </div>
    <div className={styles.boxLandscape}>
      <div className={styles.boxForm}>

        {/* <input placeholder="Busque seu destino" type="text" name="text" className={styles.input}/>
        <button className={styles.btn}>Buscar</button> */}
      </div>
      <img src={aviao} alt="paisagem"/>
    </div>
  </section>
  )
};

export default Destinos;
