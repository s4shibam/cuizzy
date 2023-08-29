import { useLocation } from 'react-router-dom';
import { DetailedReport, ResultSummary } from '../components';

function DetailedSubmission() {
  const location = useLocation();
  const { submission } = location.state;

  const {
    topicId,
    date,
    time,
    noq,
    correctAnswersCount,
    incorrectAnswersCount,
    unattemptedCount,
    obtainedPoints,
    obtainedPercentage,
    qnaSet
  } = submission;

  return (
    <div className='about-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center'>
      <h1 className='page-heading mb-2'>Detailed Result</h1>
      <h3 className='page-heading my-0 text-base font-semibold text-black dark:text-white sm:text-2xl'>
        Topic: {topicId.split('-').join(' ')}
      </h3>
      <h3 className='page-heading my-0 text-base font-semibold text-black dark:text-white sm:text-2xl'>
        Date: {date ? date : 'NA'}
      </h3>
      <h3 className='page-heading mt-0 text-base font-semibold text-black dark:text-white sm:text-2xl'>
        Time: {time ? time : 'NA'}
      </h3>

      <div className='w-full max-w-7xl'>
        <ResultSummary
          noq={noq}
          topicId={topicId}
          date={date}
          correctAnswersCount={correctAnswersCount}
          incorrectAnswersCount={incorrectAnswersCount}
          unattemptedCount={unattemptedCount}
          obtainedPoints={obtainedPoints}
          obtainedPercentage={obtainedPercentage}
        />
        <br />
        <DetailedReport qnaSet={qnaSet} />
      </div>
    </div>
  );
}

export default DetailedSubmission;
