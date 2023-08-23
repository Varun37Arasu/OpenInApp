import React from 'react';
import styles from "../signup.module.css";

const Fields = ({label,type,placeholder}) => {
  return (
    <>
    <label for={type} className={styles.label}>{label}</label>
            <input className={styles.input}
              type={type}
              id={type}
              name={type}
              placeholder={placeholder}
              required
            />
    </>
  )
}

export default Fields