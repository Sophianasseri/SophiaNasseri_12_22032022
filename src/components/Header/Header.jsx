import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';

/**
 * Component for rendering the app's header
 * @component
 * return (
 *  <Header />
 * )
 */
function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
