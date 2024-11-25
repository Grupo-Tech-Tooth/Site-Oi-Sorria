import React from 'react';
import styles from './ProcedureStep.module.css';

const ProcedureStep = ({ title, icon, description, highlight }) => {
  return (
    <div className={`${styles.step} ${highlight ? styles.highlight : ''} col-md-6 col-lg-4`}>
      <div className={styles.icon}>
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProcedureStep;
