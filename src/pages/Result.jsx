import _ from 'lodash';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { DesignComponent, DetailedReport, ResultSummary } from '../components';
import { useAnswers } from '../hooks';

function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { qna } = location.state;
  const { loading, error, answers } = useAnswers(id);
  const [showAnswers, setShowAnswers] = useState(false);

  function calculateScore() {
    let count = 0;

    answers.forEach((question, index1) => {
      const correctIndexes = [];
      const checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        count += 1;
      }
    });

    return count;
  }

  const correctAnswers = calculateScore();

  return (
    <div className='result mx-auto mt-44 mb-20 w-[85%] animate-reveal 2xl:mt-32'>
      {loading && <p className='text-center'>Loading ...</p>}
      {error && <p className='text-center'>There was an error!</p>}

      {answers && answers.length > 0 && (
        <>
          <ResultSummary
            correctAnswers={correctAnswers}
            noq={answers.length}
            userAnswers={answers}
          />

          <div className='mt-16 flex w-full items-center justify-center gap-6'>
            {!showAnswers && (
              <button
                type='button'
                onClick={() => setShowAnswers(true)}
                className='border-button border border-darkViolet px-4 py-2 uppercase'
                title='See Answers'
              >
                See Answers
              </button>
            )}

            <Link to={`/quiz/${id}`}>
              <button
                type='button'
                className='border-button border border-darkViolet px-4 py-2 uppercase'
                title='Retry Quiz'
              >
                Retry Quiz
              </button>
            </Link>
          </div>

          {showAnswers && <DetailedReport userAnswers={answers} />}
        </>
      )}

      <DesignComponent />
    </div>
  );
}

export default Result;
