import React from 'react';
import yoga from '../../assets/yoga.svg';
import swimming from '../../assets/swimming.svg';
import bike from '../../assets/bike.svg';
import halter from '../../assets/halter.svg';
import styles from './sideNav.module.css';

function SideNav() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <img src={yoga} alt="" />
          </li>
          <li>
            <img src={swimming} alt="" />
          </li>
          <li>
            <img src={bike} alt="" />
          </li>
          <li>
            <img src={halter} alt="" />
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default SideNav;
