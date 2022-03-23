import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
