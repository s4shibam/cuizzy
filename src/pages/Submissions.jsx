import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DesignComponent } from '../components';
import { useSubmissions } from '../hooks';

function Submissions() {
  const navigate = useNavigate();
  const { loading, error, submissions } = useSubmissions();
  const [showDetails, setShowDetails] = useState(false);

  function showDetailedSubmission(index) {
    const submission = submissions[index];
    navigate(`/detailed-submission`, { state: { submission } });
  }

  return (
    <div className='submission-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center sm:text-xl'>
      <h1 className='page-heading'>My Submissions</h1>

      <div className='submission-list flex w-full flex-col-reverse text-center'>
        {submissions.map((submission, index) => (
          <button
            className='frame-BG mx-auto my-4 flex w-full max-w-4xl cursor-pointer flex-col justify-between gap-2 border-2 border-dullWhite transition-all duration-300 hover:border-brightViolet sm:flex-row'
            key={index}
            type='button'
            onClick={() => showDetailedSubmission(index)}
          >
            <div className='flex w-full flex-col border-r-brightViolet sm:border-r-[1px]'>
              <p className='text-2xl font-medium tracking-wide text-darkViolet dark:text-brightViolet sm:mr-auto'>
                {submission.topicId.split('-').join(' ')} Quiz
              </p>
              <p className='text-lg font-medium tracking-wide sm:mr-auto sm:text-xl'>
                Percentage: {submission.obtainedPercentage}%
              </p>
            </div>
            <hr className='h-px w-full border-0 bg-brightViolet sm:hidden' />
            <div className='flex w-full flex-col justify-center sm:w-6/12'>
              <p className='font-medium tracking-wide sm:ml-auto sm:text-lg'>
                Date: {submission.date ? submission.date : 'NA'}
              </p>
              <p className='font-medium tracking-wide sm:ml-auto sm:text-lg'>
                Time: {submission.time ? submission.time : 'NA'}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className='error flex items-center justify-center text-center text-xl'>
        {!loading && submissions.length === 0 && <>No data found!</>}
        {error && <>There was an error!</>}
        {loading && <>Loading ...</>}
      </div>
      <DesignComponent />
    </div>
  );
}

export default Submissions;
