function ProgressBar({ nextQ, prevQ, progress, submit }) {
  return (
    <div className='progress-bar frame-BG fixed left-0 right-0 bottom-6 mx-auto grid w-[calc(100vw-50px)] grid-cols-[auto_1fr_auto] items-center justify-between gap-5 p-2 sm:p-4 lg:w-[calc(100vw-150px)]'>
      <button
        className='next-button fill-button back-button py-2 px-3 font-medium'
        type='button'
        onClick={prevQ}
      >
        <span className='material-icons-outlined text-2xl text-darkText'>
          {' '}
          arrow_back_ios{' '}
        </span>
        <span className='ml-1 hidden text-xl text-darkText lg:block'>
          {' '}
          Go Back{' '}
        </span>
      </button>

      <div className='w-full rounded-full bg-dullWhite dark:bg-gray-600'>
        <div
          className='rounded-full bg-activeGreen text-center text-xs font-medium leading-none tracking-wider text-darkText transition-all duration-700 ease-in
          lg:text-sm'
          title={`${progress.toFixed(0)}%`}
          style={{ width: `${progress.toFixed(0)}%` }}
        >
          {progress.toFixed(0)}%
        </div>
      </div>

      <button
        className='next-button fill-button py-2 px-3 font-medium'
        type='button'
        onClick={progress === 100 ? submit : nextQ}
      >
        <span className='mr-1 hidden text-xl text-darkText lg:block'>
          {progress === 100 ? 'Submit Quiz' : 'Next Question'}
        </span>
        <span className='material-icons-outlined text-2xl text-darkText'>
          {progress === 100 ? 'check_circle' : 'arrow_forward_ios'}
        </span>
      </button>
    </div>
  );
}

export default ProgressBar;
