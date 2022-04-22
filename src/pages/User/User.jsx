import React from 'react';
import { useParams } from 'react-router-dom';
import KeyData from '../../components/KeyData/KeyData';
import calories from '../../assets/calories.svg';
import protein from '../../assets/protein.svg';
import carbs from '../../assets/carbs.svg';
import fat from '../../assets/fat.svg';
import styles from './user.module.css';
import Performance from '../../components/Charts/Performance/Performance';
import DayScore from '../../components/Charts/DayScore/DayScore';
import AverageSession from '../../components/Charts/AverageSession/AverageSession';
import Activity from '../../components/Charts/Activity/Activity';
import useFetch from '../../useFetch';

function User() {
  const { id } = useParams();

  const { data, isLoading } = useFetch(id);

  const userData = data[0];
  const activityData = data[1];
  const sessionsData = data[2];
  const performanceData = data[3];

  console.log(data);

  return (
    <main className={styles.main}>
      {!isLoading ? (
        <div className={styles.container}>
          <div>
            <h1 className={styles.name}>
              Bonjour&nbsp;
              <span className={styles}>{userData.userInfos.firstName}</span>
            </h1>
            <p className={styles.message}>
              Félicitations! vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div>
            <Activity data={activityData.sessions} />
            <AverageSession data={sessionsData.sessions} />
            <Performance data={performanceData} />
            <DayScore data={userData.todayScore || userData.score} />
          </div>
          <div className={styles.keyData}>
            <KeyData
              icon={calories}
              count={userData.keyData.calorieCount}
              unit="kCal"
              name="Calories"
            />
            <KeyData
              icon={protein}
              count={userData.keyData.proteinCount}
              unit="g"
              name="Protéines"
            />
            <KeyData
              icon={carbs}
              count={userData.keyData.carbohydrateCount}
              unit="g"
              name="Glucides"
            />
            <KeyData
              icon={fat}
              count={userData.keyData.lipidCount}
              unit="g"
              name="Lipides"
            />
          </div>
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader} />
        </div>
      )}
    </main>
  );
}

export default User;
