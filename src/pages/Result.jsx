import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DesignComponent, DetailedReport, ResultSummary } from '../components';

function Result() {
  const location = useLocation();
  const { qnaSet, markSheetObject } = location.state;
  const [showAnswers, setShowAnswers] = useState(false);

  const {
    noq,
    topicId,
    correctAnswersCount,
    incorrectAnswersCount,
    unattemptedCount,
    obtainedPoints,
    obtainedPercentage,
    date
  } = markSheetObject;

  return (
    <div className='result mx-auto mt-44 mb-20 w-[85%] animate-reveal 2xl:mt-32'>
      {qnaSet?.length > 0 && (
        <>
          <ResultSummary
            topicId={topicId}
            noq={noq}
            date={date}
            correctAnswersCount={correctAnswersCount}
            incorrectAnswersCount={incorrectAnswersCount}
            unattemptedCount={unattemptedCount}
            obtainedPoints={obtainedPoints}
            obtainedPercentage={obtainedPercentage}
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

            <Link to={`/quiz/${topicId}`}>
              <button
                type='button'
                className='border-button border border-darkViolet px-4 py-2 uppercase'
                title='Retry Quiz'
              >
                Retry Quiz
              </button>
            </Link>
          </div>

          {showAnswers && <DetailedReport qnaSet={qnaSet} />}
        </>
      )}

      <DesignComponent />
    </div>
  );
}

export default Result;
