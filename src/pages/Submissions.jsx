import { useNavigate } from 'react-router-dom';

import { useSubmissions } from '../hooks';

function Submissions() {
  const navigate = useNavigate();
  const { loading, error, submissions } = useSubmissions();

  function showDetailedSubmission(index) {
    const submission = submissions[index];
    navigate(`/detailed-submission`, { state: { submission } });
  }

  return (
    <div className="mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center sm:text-xl">
      <h1 className="page-heading">My Submissions</h1>

      <div className="flex w-full flex-col-reverse text-center">
        {submissions.map((submission, index) => (
          <button
            key={index}
            className="card mx-auto my-4 flex w-full max-w-4xl cursor-pointer flex-col justify-between gap-2 border-2 border-white/50 transition-all duration-300 hover:border-secondary sm:flex-row"
            type="button"
            onClick={() => showDetailedSubmission(index)}
          >
            <div className="flex w-full flex-col border-r-secondary sm:border-r-[1px]">
              <p className="text-2xl font-medium tracking-wide text-primary dark:text-secondary sm:mr-auto">
                {submission.topicId.split('-').join(' ')} Quiz
              </p>
              <p className="text-lg font-medium tracking-wide sm:mr-auto sm:text-xl">
                Percentage: {submission.obtainedPercentage}%
              </p>
            </div>
            <hr className="h-px w-full border-0 bg-primary sm:hidden" />
            <div className="flex w-full flex-col justify-center sm:w-6/12">
              <p className="font-medium tracking-wide sm:ml-auto sm:text-lg">
                Date: {submission.date ? submission.date : 'NA'}
              </p>
              <p className="font-medium tracking-wide sm:ml-auto sm:text-lg">
                Time: {submission.time ? submission.time : 'NA'}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center text-center text-xl">
        {!loading && submissions.length === 0 && <>No data found!</>}
        {error && <>There was an error!</>}
        {loading && <>Loading ...</>}
      </div>
    </div>
  );
}

export default Submissions;
