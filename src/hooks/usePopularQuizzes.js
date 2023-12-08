import { get, getDatabase, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function usePopularQuizzes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [popularQuizzes, setPopularQuizzes] = useState([]);

  useEffect(() => {
    async function fetchPopularQuizzes() {
      const db = getDatabase();
      const submissionsRef = ref(db, 'submissionCount');
      const submissionsQuery = query(submissionsRef);

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(submissionsQuery);

        setLoading(false);
        if (snapshot.exists()) {
          const submissionsData = snapshot.val();
          const popularQuizzesData = Object.entries(submissionsData)
            .sort(([, countA], [, countB]) => countB - countA)
            .slice(0, 4)
            .map(([key, value]) => ({ topicID: key, submissions: value }));

          setPopularQuizzes(popularQuizzesData);
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchPopularQuizzes();
  }, []);

  return { loading, error, popularQuizzes };
}
