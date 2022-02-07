import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, name, label}) => {
    return(
      <div>
          <input
          placeholder={placeholder} 
          type={type} 
          name={name}
          label={label}
          className={styles.input}
          />
      </div>
    ) 
  };
  
  export default Input;