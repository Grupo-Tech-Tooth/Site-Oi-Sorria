import styles from './TeamMember.module.css';
import PropTypes from 'prop-types';

const TeamMember = ({ image, name, description }) => (
  <div className={`${styles.teamMember} carousel-item active`}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} className={`${styles.memberImage} card-img-top`} />
    </div>
    <h3 className={styles.memberName}>{name}</h3>
    <p className={styles.memberDescription}>{description}</p>
  </div>
);
TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TeamMember;