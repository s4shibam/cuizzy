import React, { useState } from 'react';
import { DesignComponent } from '../components';
import { useSubmissions } from '../hooks';

function Submissions() {
  const { loading, error, submissions } = useSubmissions();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='submission-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center sm:text-xl'>
      <h1 className='page-heading'>My Submissions</h1>

      <div className='submission-list flex w-full flex-col-reverse text-center'>
        {submissions.map((submission) => (
          <div
            className='frame-BG mx-auto my-4 flex w-full max-w-4xl flex-col justify-between gap-1 sm:flex-row'
            key={Math.random()}
          >
            <p className='text text-2xl font-medium tracking-wide text-darkViolet dark:text-brightViolet'>
              {submission.topicId.split('-').join(' ')} Quiz
            </p>
            <div className='flex items-center justify-between gap-2'>
              <p className='text font-medium tracking-wide sm:text-xl'>
                Percentage: {submission.obtainedPercentage}%
              </p>
              <p className='text font-medium tracking-wide sm:text-xl'>
                Date: {submission.date ? submission.date : 'NA'}
              </p>
            </div>
          </div>
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
