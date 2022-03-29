import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import KeyData from '../../components/KeyData/KeyData';
import { mainData } from '../../mockedData/mockedData';
import calories from '../../assets/calories.svg';
import protein from '../../assets/protein.svg';
import carbs from '../../assets/carbs.svg';
import fat from '../../assets/fat.svg';
import styles from './user.module.css';
import AverageSession from '../../components/Charts/AverageSession/AverageSession';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      const element = mainData.find((elt) => elt.id.toString() === id);
      // Redirect to 404 error page if user change id parameter to an undefined one
      if (element === undefined) {
        navigate('/404');
      } else {
        setUser(element);
      }
    }
  }, []);
  return (
    <main className={styles.main}>
      {user ? (
        <div className={styles.container}>
          <div>
            <h1 className={styles.name}>
              Bonjour&nbsp;
              <span className={styles}>{user.userInfos.firstName}</span>
            </h1>
            <p className={styles.message}>
              Félicitations! vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div>
            <AverageSession />
          </div>
          <div className={styles.keyData}>
            <KeyData
              icon={calories}
              count={user.keyData.calorieCount}
              unit="kCal"
              name="Calories"
            />
            <KeyData
              icon={protein}
              count={user.keyData.proteinCount}
              unit="g"
              name="Protéines"
            />
            <KeyData
              icon={carbs}
              count={user.keyData.carbohydrateCount}
              unit="g"
              name="Glucides"
            />
            <KeyData
              icon={fat}
              count={user.keyData.lipidCount}
              unit="g"
              name="Lipides"
            />
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default User;
