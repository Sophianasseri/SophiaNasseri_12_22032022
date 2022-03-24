import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { mainData } from '../../mockedData/mockedData';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {mainData.map((element) => (
          <div key={element.id}>
            <Link to={`user/${element.id}`}>
              Utilisateur
              {element.id}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
