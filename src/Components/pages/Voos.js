import React from 'react';
import styles from './Voos.module.css';
import aviao from '../../Img/aviao.jpg';
import Card from '../Card/Card';

const Voos = () => {
  return (
    <section className='animeLeft'>
      <div className={styles.boxLandscape}>
        <div className={styles.boxCard}>
          <Card 
          title="Voos"
          textLabel="De onde você está saindo ?"
          textBtn="Buscar"
          where="Para onde você vai ?"
          date="Escolha as datas"
          passenger="Passageiros"
          />
        </div>
        <img src={aviao} alt="paisagem"/>
      </div>
  </section>
  )
}

export default Voos