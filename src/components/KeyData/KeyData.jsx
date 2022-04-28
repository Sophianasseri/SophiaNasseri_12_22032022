/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './keyData.module.css';

/**
 * Component for rendering user's key data
 * @example
 * const icon = calories.png
 * const count = 1930
 * const unit = kCal
 * const name = Calories
 * return (
 *  <KeyData icon={icon} count={count} unit={unit} name={name} />
 * )
 */

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
  /**
   * Icon iamge path
   */
  icon: PropTypes.string.isRequired,
  /**
   * User's key data count
   */
  count: PropTypes.number.isRequired,
  /**
   * Key data unit
   */
  unit: PropTypes.string.isRequired,
  /**
   * Key data name
   */
  name: PropTypes.string.isRequired,
};
