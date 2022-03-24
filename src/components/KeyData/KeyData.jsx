/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './keyData.module.css';

function KeyData({ icon, count, unit, name }) {
  return (
    <div className={styles.keyData}>
      <img className={styles.image} src={icon} alt={name} />
      <div>
        <p className={styles.count}>
          {count}
          {unit}
        </p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}

export default KeyData;

KeyData.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
