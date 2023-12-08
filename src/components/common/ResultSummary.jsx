import { useParams } from 'react-router-dom';

import { ScoreCard } from '..';

function ResultSummary({
  showTopicID = false,
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
    <div className="mx-auto">
      {showTopicID && <h1 className="page-heading">{id?.split('-').join(' ')} Quiz</h1>}
      <ScoreCard
        correctAnswersCount={correctAnswersCount}
        date={date}
        incorrectAnswersCount={incorrectAnswersCount}
        location="result"
        noq={noq}
        obtainedPercentage={obtainedPercentage}
        obtainedPoints={obtainedPoints}
        topicId={topicId}
        unattemptedCount={unattemptedCount}
      />
    </div>
  );
}

export default ResultSummary;
