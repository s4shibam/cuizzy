import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuiz(topicID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    // Fetch question-answer sets from database
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, `quizzes/${topicID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        // Request to firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists())
          setQuiz((prevQuestions) => [...prevQuestions, ...Object.values(snapshot.val())]);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [topicID]);

  return { loading, error, quiz };
}
