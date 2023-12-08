import { useAuth } from '../../contexts/AuthContext';
import { useCertificate } from '../../hooks';

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
    <div className="card mx-auto flex flex-col rounded-xl lg:w-[500px]">
      <span className="mb-2 w-full text-center text-4xl font-semibold uppercase tracking-wider text-black drop-shadow-xl dark:text-white lg:text-5xl">
        Score Card
      </span>
      <span className="mb-4 w-full text-center text-3xl font-bold text-primary drop-shadow-xl dark:text-secondary lg:text-4xl">
        SCORE {obtainedPercentage}%
      </span>
      <hr className="mb-6 h-px border-0 bg-gray-400 dark:bg-gray-600" />

      <div className="[&>*]:text-lg [&>*]:lg:text-2xl">
        <div className="score-row [&>*]:text-black [&>*]:dark:text-white">
          <p className="text-left">Answers</p>
          <p>No.</p>
          <p>Points</p>
        </div>

        <div className="score-row [&>*]:text-green-500">
          <p className="text-left">Correct</p>
          <p>{correctAnswersCount}</p>
          <p>+{correctAnswersCount * 10}</p>
        </div>

        <div className="score-row [&>*]:text-red-500">
          <p className="text-left">Incorrect</p>
          <p>{incorrectAnswersCount}</p>
          <p>-{incorrectAnswersCount * 2}</p>
        </div>

        <div className="score-row [&>*]:text-gray-500">
          <p className="text-left">Unattempted</p>
          <p>{unattemptedCount}</p>
          <p>NA</p>
        </div>
      </div>
      <hr className="mb-3 mt-4 h-px border-0 bg-gray-400 dark:bg-gray-600" />
      <div className="marks">
        <div className="justify-self-start">Obtained Points</div>
        <div>{obtainedPoints}</div>
      </div>
      <div className="marks">
        <div className="justify-self-start">No of Questions</div>
        <div>{noq}</div>
      </div>
      <div className="marks">
        <div className="justify-self-start">Total Points</div>
        <div>{noq * 10}</div>
      </div>
      {location === 'result' && obtainedPercentage >= 60 ? (
        <button
          className="border-button mx-auto mb-2 mt-6 w-fit rounded-lg border-2 border-primary px-4 py-2 font-semibold tracking-wider"
          title="Get Certificate"
          type="button"
          onClick={() => useCertificate(currentUser.displayName, topicId, obtainedPercentage, date)}
        >
          <span className="uppercase">Get Certificate</span>
        </button>
      ) : (
        <p className="mt-6 text-center font-medium uppercase text-red-500 sm:text-lg">
          Score at least 60% to get Certificate
        </p>
      )}
    </div>
  );
}

export default ScoreCard;
