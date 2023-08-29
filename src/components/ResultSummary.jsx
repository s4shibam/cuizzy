import { useParams } from 'react-router-dom';
import { ScoreCard } from './';

function ResultSummary({
  topicId,
  noq,
  correctAnswersCount,
  incorrectAnswersCount,
  unattemptedCount,
  obtainedPoints,
  obtainedPercentage,
  date
}) {
  const { id } = useParams();
  return (
    <div className='summary mx-auto'>
      <h1 className='page-heading'>{id?.split('-').join(' ')} Quiz</h1>
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
  );
}

export default ResultSummary;
