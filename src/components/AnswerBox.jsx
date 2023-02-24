import { Fragment } from 'react';
import CheckBox from './elements/CheckBox';

function AnswerBox({ input, handleChange, options = [] }) {
  return (
    <div className='answer-box mb-2'>
      <div className='options grid grid-cols-options grid-rows-[repeat(3,auto)] gap-2 lg:grid-flow-col lg:gap-4'>
        {options.map((option, index) => (
          <Fragment key={index}>
            {input ? (
              <CheckBox
                key={index}
                value={index}
                text={option.title}
                checked={option.checked}
                className='answer-option'
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <CheckBox
                key={index}
                text={option.title}
                defaultChecked={option.checked}
                className={`answer-option ${
                  option.correct
                    ? 'answer-correct'
                    : option.checked
                    ? 'answer-wrong'
                    : null
                }`}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default AnswerBox;
