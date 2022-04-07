import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, isLoading };
};
export default useFetch;
