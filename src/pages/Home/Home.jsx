import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <Link to="user/12">Utilisateur 12</Link>
          <Link to="user/18">Utilisateur 18</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
