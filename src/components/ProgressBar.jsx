function ProgressBar({ nextQ, prevQ, progress, submit }) {
  return (
    <div className="card fixed inset-x-0 bottom-6 mx-auto grid w-[calc(100vw-30px)] grid-cols-[auto_1fr_auto] items-center justify-between gap-2 p-2 sm:p-4 lg:w-[calc(100vw-150px)] lg:gap-5">
      <button
        className="fill-button flex gap-2 border-red-700 bg-red-400 px-3 py-2 font-medium hover:bg-red-500"
        type="button"
        onClick={prevQ}
      >
        <span className="material-symbols-outlined text-3xl text-black">arrow_circle_left</span>
        <span className="hidden text-xl text-black lg:block">Back</span>
      </button>

      <div className="w-full rounded-full bg-black/10 dark:bg-white/10">
        <div
          className={`rounded-full text-center text-xs font-medium leading-none tracking-wider text-black transition-all duration-700 ease-in
          lg:text-sm ${
            progress === 100 ? 'bg-green-400' : progress >= 60 ? 'bg-amber-400' : 'bg-red-400'
          }`}
          style={{ width: `${progress.toFixed(0)}%` }}
          title={`${progress.toFixed(0)}%`}
        >
          {progress.toFixed(0)}%
        </div>
      </div>

      <button
        className="fill-button flex gap-2 border-green-700 bg-green-400 px-3 py-2 font-medium hover:bg-green-500"
        type="button"
        onClick={progress === 100 ? submit : nextQ}
      >
        <span className="hidden text-xl text-black lg:block">
          {progress === 100 ? 'Submit' : 'Next'}
        </span>
        <span className="material-symbols-outlined text-3xl text-black">
          {progress === 100 ? 'check_circle' : 'arrow_circle_right'}
        </span>
      </button>
    </div>
  );
}

export default ProgressBar;
