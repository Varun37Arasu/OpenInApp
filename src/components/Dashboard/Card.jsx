import React, { useState } from "react";
import styles from "./Dashboard.module.css";

const Card = ({ title, number, icon, color }) => {
  return (
    <>
      <div className={styles.cardBody}>
        <div className={styles.card}>
          <div className={styles.card1} style={{ backgroundColor: color }} />
        </div>
        {/* <div className={styles.cardIcon}>{icon}</div> */}
        {console.log(icon)}
        {icon && <img src={`${icon}`} alt="Icon" className={styles.cardIcon} />}
        <div className={styles.totalTransactions1}>{title}</div>
        <b className={styles.b}>{number}</b>
      </div>
    </>
  );
};

export default Card;
