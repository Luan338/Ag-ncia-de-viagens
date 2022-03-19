import React from 'react';
import CardPromo from '../CardPromo/CardPromo';
import styles from './Promocoes.module.css';

const Promocoes = () => {
    
  return(
    <section className="animeLeft">
        <div className={styles.contain}>
            <h2 className={styles.subTitle}>OS MELHORES PACOTES PARA 2022 EM ATÉ 12X</h2>
        </div>
        <div className={styles.boxDesconto}>
            <CardPromo 
            title="Pacotes"
            subTitle="Promo 2022"
            paragraph="3 diárias a partir de"
            price="R$ 200,00"
            children="Ver mais"
            />
            <CardPromo 
            title="Hotéis"
            subTitle="Promo 2022"
            paragraph="3 diárias a partir de"
            price="R$ 250,00"
            children="Ver mais"
            />
        </div>
    </section> 
  );
};

export default Promocoes;
