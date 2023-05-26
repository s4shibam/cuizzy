import { useAuth } from '../contexts/AuthContext';
import getCertificate from './Certificate';

function ScoreCard({
  topicId,
  location,
  noq,
  date,
  correctAnswersCount,
  incorrectAnswersCount,
  unattemptedCount,
  obtainedPoints,
  obtainedPercentage
}) {
  const { currentUser } = useAuth();

  return (
    <div className='score-card frame-BG flex flex-col rounded-xl lg:w-[500px]'>
      <span className='score-card-heading mb-2 w-full text-center text-4xl font-semibold uppercase tracking-wider text-darkText drop-shadow-xl dark:text-dullWhite lg:text-5xl'>
        Score Card
      </span>
      <span className='score-percentage mb-4 w-full text-center text-3xl font-bold text-darkViolet drop-shadow-xl dark:text-brightViolet lg:text-4xl'>
        SCORE {obtainedPercentage}%
      </span>
      <hr className='mb-6 h-px border-0 bg-gray-400 dark:bg-gray-600' />

      <div className='[&>*]:text-lg [&>*]:lg:text-2xl'>
        <div className='score-row [&>*]:text-darkViolet [&>*]:dark:text-brightViolet'>
          <p className='text-left'>Answers</p>
          <p>No.</p>
          <p>Points</p>
        </div>

        <div className='score-row [&>*]:text-activeGreen'>
          <p className='text-left'>Correct</p>
          <p>{correctAnswersCount}</p>
          <p>+{correctAnswersCount * 10}</p>
        </div>

        <div className='score-row [&>*]:text-failureRed'>
          <p className='text-left'>Incorrect</p>
          <p>{incorrectAnswersCount}</p>
          <p>-{incorrectAnswersCount * 2}</p>
        </div>
        <div className='score-row [&>*]:text-slate-700 [&>*]:dark:text-slate-400'>
          <p className='text-left'>Unattempted</p>
          <p>{unattemptedCount}</p>
          <p>NA</p>
        </div>
      </div>
      <hr className='mt-4 mb-3 h-px border-0 bg-gray-400 dark:bg-gray-600' />
      <span className='mr-9 flex justify-between text-lg font-semibold uppercase lg:text-2xl'>
        Obtained Points <span>{obtainedPoints}</span>
      </span>
      <span className='mr-9 flex justify-between text-lg font-semibold uppercase lg:text-2xl'>
        No of Questions <span>{noq}</span>
      </span>
      <span className='mr-9 flex justify-between text-lg font-semibold uppercase lg:text-2xl'>
        Total Points <span>{noq * 10}</span>
      </span>
      {location === 'result' && obtainedPercentage >= 60 ? (
        <button
          type='button'
          className='border-button mx-auto mt-6 mb-2 w-fit rounded-xl border border-darkViolet px-4 py-2'
          title='Get Certificate'
          onClick={() =>
            getCertificate(
              currentUser.displayName,
              topicId,
              obtainedPercentage,
              date
            )
          }
        >
          <span className='text uppercase'>Get Certificate 🔥</span>
        </button>
      ) : (
        <p className='mt-6 text-center sm:text-lg font-medium uppercase text-failureRed'>
          Score at least 60% to get Certificate
        </p>
      )}
    </div>
  );
}

export default ScoreCard;
