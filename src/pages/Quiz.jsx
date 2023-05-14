import { child, getDatabase, push, ref, update } from 'firebase/database';
import _ from 'lodash';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnswerBox, ProgressBar, Rules } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useQuiz } from '../hooks';
import { PageNotFound } from './';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'quiz': {
      const qnaSet = _.cloneDeep(action.value);
      qnaSet.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return qnaSet;
    }
    case 'answer': {
      const question = _.cloneDeep(state);
      question[action.questionID].options[action.optionIndex].checked =
        action.value;
      return question;
    }

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const { loading, error, quiz } = useQuiz(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qnaSet, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'quiz',
      value: quiz
    });
  }, [quiz]);

  // Answer option selection
  const handleAnswerChange = useCallback(
    (e, index) => {
      dispatch({
        type: 'answer',
        questionID: currentQuestion,
        optionIndex: index,
        value: e.target.checked
      });
    },
    [dispatch, currentQuestion]
  );

  // Get next question
  const nextQuestion = useCallback(() => {
    if (currentQuestion < qnaSet.length - 1)
      setCurrentQuestion((curr) => curr + 1);
  }, [currentQuestion, qnaSet]);

  // Get previous question
  const previousQuestion = useCallback(() => {
    if (currentQuestion >= 1 && currentQuestion <= qnaSet.length)
      setCurrentQuestion((curr) => curr - 1);
  }, [currentQuestion, qnaSet]);

  // Progress percentage
  const progressPercentage =
    qnaSet?.length > 0 ? ((currentQuestion + 1) * 100) / qnaSet.length : 0;

  // Submit Quiz and store result in the database
  const submitQuiz = useCallback(async () => {
    function getMarkSheet() {
      let correctAnswersCount = 0;
      let incorrectAnswersCount = 0;
      let unattemptedCount = 0;

      qnaSet?.forEach((question, index1) => {
        const correctIndexes = [];
        const checkedIndexes = [];

        question.options.forEach((option, index2) => {
          if (option.correct) correctIndexes.push(index2);
          if (option.checked) checkedIndexes.push(index2);
        });

        if (checkedIndexes.length === 0) unattemptedCount += 1;
        else if (_.isEqual(correctIndexes, checkedIndexes))
          correctAnswersCount += 1;
        else incorrectAnswersCount += 1;
      });

      const noq = qnaSet?.length;
      const obtainedPoints =
        correctAnswersCount * 10 - incorrectAnswersCount * 2;
      const obtainedPercentage = obtainedPoints / (0.1 * noq);

      return [
        noq,
        correctAnswersCount,
        incorrectAnswersCount,
        unattemptedCount,
        obtainedPoints,
        obtainedPercentage
      ];
    }

    const [
      noq,
      correctAnswersCount,
      incorrectAnswersCount,
      unattemptedCount,
      obtainedPoints,
      obtainedPercentage
    ] = getMarkSheet();

    const markSheetObject = {
      topicId: id,
      date: new Date().toLocaleDateString('en-IN'),
      noq: noq,
      correctAnswersCount: correctAnswersCount,
      incorrectAnswersCount: incorrectAnswersCount,
      unattemptedCount: unattemptedCount,
      obtainedPoints: obtainedPoints,
      obtainedPercentage: obtainedPercentage
    };
    
    const { uid } = currentUser;
    const db = getDatabase();
    const key = push(child(ref(db), `submissions/${uid}`)).key;
    const data = {};

    data[`submissions/${uid}/${key}`] = markSheetObject;
    await update(ref(db), data);
    navigate(`/result/${id}`, { state: { qnaSet, markSheetObject } });
  }, [currentUser, id, navigate, qnaSet]);

  return (
    <>
      {loading && <p className='page-heading text-lg'>Loading ...</p>}
      {error && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length === 0 && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length > 0 && (
        <div className='quiz mx-auto w-[85%] animate-reveal'>
          <h1 className='page-heading'>{id.split('-').join(' ')} Quiz!</h1>
          <Rules />
          <div className='question frame-BG mb-40 flex flex-col justify-center rounded-md p-3'>
            <div className='flex flex-col items-center justify-center text-xl font-bold text-darkText dark:text-lightText sm:text-3xl'>
              Q. {qnaSet[currentQuestion].title}
            </div>
            <hr className='mt-3 mb-8 h-px border-0 bg-gray-400 dark:bg-gray-600' />

            <AnswerBox
              input
              options={qnaSet[currentQuestion].options}
              handleChange={handleAnswerChange}
            />
          </div>

          <ProgressBar
            nextQ={nextQuestion}
            prevQ={previousQuestion}
            progress={progressPercentage}
            submit={submitQuiz}
          />
        </div>
      )}
    </>
  );
}

export default Quiz;
