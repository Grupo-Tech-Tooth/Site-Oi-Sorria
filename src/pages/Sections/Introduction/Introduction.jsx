import React from 'react';
import styles from "./Introduction.module.css";
import logo from "../../../utils/assets/logo.png";

const Introduction = ({ id }) => {
  return (
    <section className={styles.heroContainer} id={id}>
      <img src={logo} alt="Logo" className={`${styles.logo} d-inline-block align-text-top`}  />
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, Sorria</h1>
        <p className={styles.description}>
          Uma clínica dedicada para aumentar sua autoestima e melhorar sua saúde :)
        </p>
        <a href="#procedure-list" className={styles['a']}>
        <button className={`${styles.button} btn`}> Saiba Mais</button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
