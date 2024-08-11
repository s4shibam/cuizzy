import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Footer, Thumbnail } from '../components';
import { useData, useGAEventTracker } from '../hooks';

function Quizzes() {
  const gaEventTracker = useGAEventTracker('Quiz Thumbnail');

  const { loading, error, data } = useData('topics');
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const quizzes = data.filter((obj) => obj.noq !== 0);
      const comingSoonQuizzes = data.filter((obj) => obj.noq === 0);

      for (let i = quizzes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizzes[i], quizzes[j]] = [quizzes[j], quizzes[i]];
      }

      const shuffledArray = quizzes.concat(comingSoonQuizzes);
      setShuffledData(shuffledArray);
    }
  }, [data]);

  return (
    <>
      <div className="mx-auto mb-32 flex min-h-screen w-[90%] animate-reveal flex-col items-center">
        <h1 className="page-heading">Attempt Quizzes</h1>
        {shuffledData.length > 0 && (
          <div className="mx-auto grid h-full w-full grid-cols-quizzes justify-items-center gap-7">
            {shuffledData.map((topic, index) =>
              topic.noq > 0 ? (
                <Link
                  key={topic.topicID}
                  className="w-fit"
                  to={`/quiz/${topic.topicID}`}
                  onClick={() => gaEventTracker({ label: topic.topicID })}
                >
                  <Thumbnail id={topic.topicID} noq={topic.noq} title={topic.title} type="quiz" />
                </Link>
              ) : (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  key={index}
                  className="w-full"
                  onClick={() => gaEventTracker({ label: topic.topicID })}
                >
                  <Thumbnail id={topic.topicID} noq={topic.noq} title={topic.title} type="quiz" />
                </div>
              )
            )}
          </div>
        )}

        <div className="flex items-center justify-center text-center text-xl">
          {!loading && data.length === 0 && <>No data found!</>}
          {error && <>There was an error!</>}
          {loading && <>Loading ...</>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Quizzes;
