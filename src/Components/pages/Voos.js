import React from 'react';
import styles from './Voos.module.css';
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
        <div className={styles.boxs}>
        </div>
      </div>
  </section>
  )
}

export default Voos