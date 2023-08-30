import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useData(address) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch video list from database
    async function fetchTopics() {
      const db = getDatabase();
      const dataRef = ref(db, address);
      const dataQuery = query(dataRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        // Request to firebase database
        const snapshot = await get(dataQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setData((prevData) => [...prevData, ...Object.values(snapshot.val())]);
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchTopics();
  }, [address]);

  return { loading, error, data };
}
