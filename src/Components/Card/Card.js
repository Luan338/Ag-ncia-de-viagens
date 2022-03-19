import React from 'react';
import styles from './Card.module.css';

const Card = ({title, textLabel, textBtn, where, date, passenger, cardStyle, boxForms, formsDifference, forms, boxBtn}) => {
  return (
    <section className={cardStyle}>
      <h2 className={styles.title}>{title}</h2>
      <div className={boxForms}>
        <form className={formsDifference}>
          <label for="saida" >{textLabel}</label>
          <input id="saida" type="text" name="text" />
        </form> 
        <form className={forms}>
          <label for="onde">{where}</label>
          <input id="onde" type="text" name="text" />
        </form> 
        <form className={forms}>
          <label for="datas">{date}</label>
          <input id="datas" type="date" name="date" />
        </form> 
        <form className={forms}>
          <label for="passageiros" >{passenger}</label>
          <input id="passageiros" type="number" name="number" />
        </form> 
      </div>
      <div className={boxBtn}>
        <button className={styles.btnCard}>{textBtn}</button>
      </div>
    </section>
  )
}

export default Card;