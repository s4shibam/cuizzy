import { get, getDatabase, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

import { useAuth } from '../contexts/AuthContext';

export default function useSubmissions() {
  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch answers from database to check result
    async function fetchAnswers() {
      const db = getDatabase();
      const submissionsRef = ref(db, `submissions/${uid}`);
      const submissionsQuery = query(submissionsRef);

      try {
        setError(false);
        setLoading(true);

        // Request to firebase database
        const snapshot = await get(submissionsQuery);
        setLoading(false);

        if (snapshot.exists())
          setSubmissions((prevSubmissions) => [
            ...prevSubmissions,
            ...Object.values(snapshot.val())
          ]);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [uid]);

  return { loading, error, submissions };
}
