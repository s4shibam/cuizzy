import { scoreCardImg } from '../assets';
import { ScoreCard } from './';

function ResultSummary({
  noq,
  correctAnswersCount,
  incorrectAnswersCount,
  unattemptedCount,
  obtainedPoints,
  obtainedPercentage
}) {
  return (
    <div className='summary mx-auto my-0 flex w-10/12 flex-col items-center justify-center gap-20 md:flex-row'>
      <img
        className='w-[60%] max-w-lg object-cover sm:w-[50%]'
        src={scoreCardImg}
        alt='Success'
      />

      <div className='flex flex-col items-center justify-center'>
        <ScoreCard
          location='result'
          correctAnswersCount={correctAnswersCount}
          incorrectAnswersCount={incorrectAnswersCount}
          unattemptedCount={unattemptedCount}
          obtainedPoints={obtainedPoints}
          obtainedPercentage={obtainedPercentage}
          noq={noq}
        />
      </div>
    </div>
  );
}

export default ResultSummary;
