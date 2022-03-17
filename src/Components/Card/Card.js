import React from 'react';
import styles from './Card.module.css';

const Card = ({title, textLabel, textBtn, where, date, passenger}) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.boxForms}>
        <form className={styles.forms}>
          <label for="saida" >{textLabel}</label>
          <input id="saida" type="text" name="text" />
        </form> 
        <form className={styles.forms}>
          <label for="onde">{where}</label>
          <input id="onde" type="text" name="text" />
        </form> 
        <form className={styles.forms}>
          <label for="datas">{date}</label>
          <input id="datas" type="date" name="date" />
        </form> 
        <form className={styles.forms}>
          <label for="passageiros" >{passenger}</label>
          <input id="passageiros" type="number" name="number" />
        </form> 
      </div>
      <div className={styles.boxBtn}>
        <button className={styles.btnCard}>{textBtn}</button>
      </div>
    </section>
  )
}

export default Card;