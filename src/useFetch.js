import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './models/User';
import Activity from './models/Activity';
import AverageSessions from './models/AverageSessions';
import Performance from './models/Performance';

/**
 * Custom hook for managing data
 * @param {string} userId Id of the user
 */

const useFetch = (userId) => {
  const [dataUser, setDataUser] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const endpoints = [
    `http://localhost:3000/user/${userId}`,
    `http://localhost:3000/user/${userId}/activity`,
    `http://localhost:3000/user/${userId}/average-sessions`,
    `http://localhost:3000/user/${userId}/performance`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all(
          endpoints.map((endpoint) => axios.get(endpoint)),
        ).then(
          axios.spread((...responses) => {
            const userData = new User(responses[0].data.data);
            const activityData = new Activity(responses[1].data.data);
            const sessionsData = new AverageSessions(responses[2].data.data);
            const performanceData = new Performance(responses[3].data.data);
            setDataUser(
              Array.from([
                userData,
                activityData,
                sessionsData,
                performanceData,
              ]),
            );
            setLoading(false);
          }),
        );
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchData();
  }, []);
  return { dataUser, error, isLoading };
};
export default useFetch;
