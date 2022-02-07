import React, { useState } from 'react';
import styles from './Promocoes.module.css';
import PorDoSol from '../Img/fimdetarde.jpg';
import Button from '../Components/Forms/Button';

const Promocoes = () => {

    const [cupom, setCupom] = useState();

    function handleClick(){
        setCupom(Math.floor(Math.random() * (20000 - 999))) ;
    }
    
  return(
    <>
        <div className={styles.contain}>
            <h1>Promoções</h1>
        </div>
        <div className={styles.boxDesconto}>
            <img className={styles.imgPaz} src={PorDoSol} alt="Fim de tarde"/>
            <div className={styles.card}>
                <p>Cupom com 20% de desconto para qualquer viagem nacional.</p>
                <p>{cupom}</p>
                <Button onClick={handleClick}>Solicitar Cupom</Button>
            </div>
        </div>
    </> 
  );
};

export default Promocoes;
