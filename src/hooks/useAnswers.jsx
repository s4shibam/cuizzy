import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswers(topicID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch answers from database to check result
    async function fetchAnswers() {
      const db = getDatabase();
      const answersRef = ref(db, `answers/${topicID}/questions`);
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        // Request to firebase database
        const snapshot = await get(answersQuery);
        setLoading(false);

        if (snapshot.exists())
          setAnswers((prevAnswers) => [
            ...prevAnswers,
            ...Object.values(snapshot.val())
          ]);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [topicID]);

  return { loading, error, answers };
}
