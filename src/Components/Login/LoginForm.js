import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import styleBtn from '../Forms/Button.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';


const LoginForm = () => {
  return(
      <section className={styles.animeLeft}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form}>
              <Input 
              type= "text"
              name= "email"
              label="Usúario"
              placeholder= "viagem@viagem.com"
              />
              <Input 
              type= "password"
              name= "password"
              label="Senha"
              placeholder= "********"
              />
              <Button>Entrar</Button>
          </form>
          <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>
          <div className={styles.cadastro}>
              <h2 className={styles.subtitle}>Cadastre-se</h2>
              <p>Ainda não possui conta ? Cadastre-se no site.</p>
              <Link className={styleBtn.btn} to="/login/criar">Cadastro</Link>
          </div>
      </section>
  )
};

export default LoginForm;
