import { Link } from 'react-router-dom';

import { Thumbnail } from '../components';
import { useData } from '../hooks';

function Quizzes() {
  const { loading, error, data } = useData('topics');

  return (
    <div className="mx-auto flex w-[85%] animate-reveal flex-col justify-center">
      <h1 className="page-heading">Attempt Quizzes</h1>
      {data.length > 0 && (
        <div className="mx-auto grid h-full w-full grid-cols-quizzes justify-items-center gap-5">
          {data.map((topic, index) =>
            topic.noq > 0 ? (
              <Link key={topic.topicID} to={`/quiz/${topic.topicID}`}>
                <Thumbnail id={topic.topicID} noq={topic.noq} title={topic.title} type="quiz" />
              </Link>
            ) : (
              <div key={index} className="w-full">
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

      <br />
    </div>
  );
}

export default Quizzes;
