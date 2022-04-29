/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            Bienvenue sur <span>SportSee</span>!
          </h1>
          <p>
            Vous pouvez retrouver un échantillon de données pour 2 utilisateurs
            :
          </p>
          <div className={styles.links}>
            <Link to="user/12">Utilisateur 12</Link>
            <Link to="user/18">Utilisateur 18</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
