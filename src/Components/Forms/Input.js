import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, name}) => {
    return(
      <div>
          <input
          placeholder={placeholder} 
          type={type} 
          name={name}
          className={styles.input}
          />
      </div>
    ) 
  };
  
  export default Input;