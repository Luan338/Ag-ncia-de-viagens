import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginCreate.module.css';


const LoginCreate = () => {


  return(
    <section className={styles.animeLeft}>
      <h1 className={styles.title}>Cadastre-se</h1>
      <form>
        <Input type="text" name="username" placeholder="Apelido"/>
        <Input type="email" name="email" placeholder="dogs@dogs.com"/>
        <Input type="password" name="password" placeholder="****************"/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  ) 
};

export default LoginCreate;
