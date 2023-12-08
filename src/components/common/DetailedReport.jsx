import { AnswerBox } from '..';

function DetailedReport({ qnaSet = [] }) {
  return (
    <div className="mx-auto my-8 max-w-6xl">
      <hr className="my-12 h-px border-0 bg-primary" />
      <h1 className="mb-10 text-center text-3xl font-bold uppercase tracking-wider text-black dark:text-white sm:text-5xl">
        Your Answers
      </h1>

      {qnaSet.map((answer, index) => (
        <div key={index} className="card pointer-events-none mb-10 select-none rounded-md p-3">
          <div className="my-3 flex items-center text-lg font-bold text-black dark:text-white sm:text-2xl">
            <span className="material-symbols-outlined m-2 mr-3 scale-150 self-start text-secondary">
              quiz
            </span>
            {answer.title}
          </div>
          <hr className="mb-8 h-px border-0 bg-primary" />
          <AnswerBox input={false} options={answer.options} />
        </div>
      ))}
    </div>
  );
}

export default DetailedReport;
