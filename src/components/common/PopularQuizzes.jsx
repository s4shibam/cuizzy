import { Link } from 'react-router-dom';

import { Thumbnail } from '..';
import { usePopularQuizzes } from '../../hooks';

function PopularQuizzes() {
  const { popularQuizzes } = usePopularQuizzes();

  return (
    <div className="mx-auto my-24 flex w-full flex-col justify-center">
      <p className="mx-auto mb-14 w-[90%] text-center text-4xl font-bold uppercase tracking-wider lg:text-5xl">
        Most Popular Quizzes
      </p>
      {popularQuizzes.length > 0 && (
        <div className="mx-auto grid w-[85%] grid-cols-1 place-items-center gap-x-10 gap-y-16 xl:grid-cols-2 2xl:grid-cols-4">
          {popularQuizzes.map((quiz) => (
            <Link
              key={quiz?.topicID}
              className="w-full max-w-[500px]"
              to={`/quiz/${quiz?.topicID}`}
            >
              <Thumbnail
                id={quiz.topicID}
                submissions={quiz?.submissions}
                title={quiz?.topicID?.split('-').join(' ')}
                type="popularQuiz"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularQuizzes;
