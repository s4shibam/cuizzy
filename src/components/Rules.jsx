import { useState } from 'react';

function Rules({ className }) {
  const [display, setDisplay] = useState(false);
  return (
    <button
      className={`card mb-6 w-full py-2 ${className}`}
      onClick={() => setDisplay((prevState) => !prevState)}
    >
      <span className="flex items-center">
        <span className=" material-symbols-outlined mr-2 text-2xl text-primary dark:text-secondary">
          description
        </span>
        <span className="text-xl font-semibold uppercase text-primary dark:text-secondary">
          RULES
        </span>
        <span
          className={`material-symbols-outlined ml-auto text-3xl text-primary transition-transform duration-300 dark:text-secondary ${
            display && 'rotate-45'
          }`}
        >
          add
        </span>
      </span>
      {display && (
        <>
          <hr className="my-3 h-px border-0 bg-primary" />
          <ol className="ml-6 list-disc text-left text-lg">
            <li className="mb-1">Questions may have multiple answers.</li>
            <li className="mb-1">Each question carries 10 Points.</li>
            <li className="mb-1">
              Incorrect or partially correct submission both leads to the deduction of 2 points.
            </li>
            <li className="mb-1">Not attempting any question does not affect points.</li>
          </ol>
        </>
      )}
    </button>
  );
}

export default Rules;
