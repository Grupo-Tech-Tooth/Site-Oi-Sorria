import React from 'react';
import styles from './TeamMember.module.css';

const TeamMember = ({ image, name, description }) => (
  <div className={styles.teamMember}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} className={styles.memberImage} />
    </div>
    <h3 className={styles.memberName}>{name}</h3>
    <p className={styles.memberDescription}>{description}</p>
  </div>
);

export default TeamMember;