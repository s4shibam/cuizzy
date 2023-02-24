import scoreCardImg from '../assets/images/Score-Card.png';
import ScoreCard from './ScoreCard';

function ResultSummary({ correctAnswers, noq, userAnswers = [] }) {
  function getIncorrectAnswers(userAnswersLocal = []) {
    let incorrectAnswersCount = 0;
    userAnswersLocal.forEach((answer) => {
      let correctOptionCount = 0;
      let attemptedOptionCount = 0;
      let isIncorrect = false;
      answer.options.forEach((option) => {
        if (!option.correct && option.checked) {
          incorrectAnswersCount += 1;
          isIncorrect = true;
          return;
        }
        if (option.correct) correctOptionCount += 1;
        if (option.checked) attemptedOptionCount += 1;
      });

      if (!isIncorrect && attemptedOptionCount !== 0) {
        if (correctOptionCount !== attemptedOptionCount)
          incorrectAnswersCount += 1;
      }
    });

    return incorrectAnswersCount;
  }

  const incorrectAnswers = getIncorrectAnswers(userAnswers);
  const unattempted = noq - (correctAnswers + incorrectAnswers);

  return (
    <div className='summary mx-auto my-0 flex w-10/12 flex-col items-center justify-center gap-20 md:flex-row'>
      <img
        className='w-[60%] max-w-lg object-cover sm:w-[50%]'
        src={scoreCardImg}
        alt='Success'
      />

      <div className='flex flex-col items-center justify-center'>
        <ScoreCard
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          unattempted={unattempted}
          noq={noq}
        />
      </div>
    </div>
  );
}

export default ResultSummary;
