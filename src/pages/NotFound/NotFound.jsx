import React from 'react';
import styles from './notFound.module.css';

function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.error}>
            Nous sommes désolés la page que vous avez demandée n&apos;existe
            pas!
          </p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
