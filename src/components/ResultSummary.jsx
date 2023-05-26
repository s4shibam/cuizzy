import { scoreCardImg } from '../assets';
import { ScoreCard } from './';

function ResultSummary({
  showImage = true,
  topicId,
  noq,
  correctAnswersCount,
  incorrectAnswersCount,
  unattemptedCount,
  obtainedPoints,
  obtainedPercentage,
  date
}) {
  return (
    <div className='summary mx-auto my-0 flex w-10/12 flex-col items-center justify-center gap-20 md:flex-row'>
      {showImage && (
        <img
          className='w-[60%] max-w-lg object-cover sm:w-[50%]'
          src={scoreCardImg}
          alt='Success'
        />
      )}
      <div className='flex flex-col items-center justify-center'>
        <ScoreCard
          location='result'
          topicId={topicId}
          correctAnswersCount={correctAnswersCount}
          incorrectAnswersCount={incorrectAnswersCount}
          unattemptedCount={unattemptedCount}
          obtainedPoints={obtainedPoints}
          obtainedPercentage={obtainedPercentage}
          noq={noq}
          date={date}
        />
      </div>
    </div>
  );
}

export default ResultSummary;
