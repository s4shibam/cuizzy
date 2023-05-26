import { AnswerBox } from './';

function DetailedReport({ qnaSet = [] }) {
  return (
    <div className='result-analytics mx-auto my-8'>
      <hr className='my-12 h-px border-0 bg-dullWhite dark:bg-gray-600' />
      <h1 className='mb-10 text-center text-3xl font-bold uppercase tracking-wider text-darkText dark:text-lightText sm:text-5xl'>
        Your Answers!!
      </h1>

      {qnaSet.map((answer, index) => (
        <div
          className='question-set frame-BG pointer-events-none mb-10 select-none rounded-md p-3'
          key={index}
        >
          <div className='my-3 mb-3 flex items-center text-lg font-bold text-darkText dark:text-lightText sm:text-2xl'>
            <span className='material-icons-outlined m-2 mr-3 scale-150 self-start text-brightViolet'>
              quiz
            </span>
            {answer.title}
          </div>
          <hr className='mb-8 h-px border-0 bg-gray-400 dark:bg-gray-600' />
          <AnswerBox input={false} options={answer.options} />
        </div>
      ))}
    </div>
  );
}

export default DetailedReport;
