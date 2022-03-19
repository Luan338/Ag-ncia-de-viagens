import React from 'react';
import styles from './Destinos.module.css';
import Card from '../Card/Card';

const Destinos = () => {
  return (
  <section className='animeLeft'>
    <div className={styles.boxCard}>
      <Card 
      title="Hotéis"
      textBtn="Buscar Hotel"
      where="Para onde você vai ?"
      date="Escolha a data"
      passenger="Quartos"
      cardStyle={styles.card}
      boxForms={styles.boxForms}
      forms={styles.forms}
      boxBtn={styles.boxBtn}
      formsDifference={styles.formsDifference}
      />
    </div>
  </section>
  )
};

export default Destinos;
