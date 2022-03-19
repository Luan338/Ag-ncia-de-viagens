import React from 'react';
import styles from '../CardPromo/CardPromo.module.css';

const CardPromo = ({title, subTitle, paragraph, price, children}) => {
  return (
    <section className={styles.cardPromo}>
        <div className={styles.text}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        <div className={styles.containPromo}>
            <div>
                <p>{paragraph}</p>
                <h4>{price}</h4>
            </div>
            <div className={styles.containBtn}>
                <button>{children}</button>
            </div>
        </div>
    </section>
  )
}

export default CardPromo