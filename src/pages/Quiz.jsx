import { child, get, getDatabase, push, ref, update } from 'firebase/database';
import _ from 'lodash';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageNotFound } from './';

import { AnswerBox, ProgressBar, Rules } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useQuiz } from '../hooks';

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
      question[action.questionID].options[action.optionIndex].checked = action.value;
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
  const date = useMemo(() => new Date(), []);

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
    if (currentQuestion < qnaSet.length - 1) setCurrentQuestion((curr) => curr + 1);
  }, [currentQuestion, qnaSet]);

  // Get previous question
  const previousQuestion = useCallback(() => {
    if (currentQuestion >= 1 && currentQuestion <= qnaSet.length)
      setCurrentQuestion((curr) => curr - 1);
  }, [currentQuestion, qnaSet]);

  // Progress percentage
  const progressPercentage = qnaSet?.length > 0 ? ((currentQuestion + 1) * 100) / qnaSet.length : 0;

  // Submit Quiz and store result in the database
  const submitQuiz = useCallback(async () => {
    function getMarkSheet() {
      let correctAnswersCount = 0;
      let incorrectAnswersCount = 0;
      let unattemptedCount = 0;

      qnaSet?.forEach((question) => {
        const correctIndexes = [];
        const checkedIndexes = [];

        question.options.forEach((option, index2) => {
          if (option.correct) correctIndexes.push(index2);
          if (option.checked) checkedIndexes.push(index2);
        });

        if (checkedIndexes.length === 0) unattemptedCount += 1;
        else if (_.isEqual(correctIndexes, checkedIndexes)) correctAnswersCount += 1;
        else incorrectAnswersCount += 1;
      });

      const noq = qnaSet?.length;
      const obtainedPoints = correctAnswersCount * 10 - incorrectAnswersCount * 2;
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
      date: date.toLocaleDateString('en-IN'),
      time: `${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2, '0')} ${
        date.getHours() < 12 ? 'AM' : 'PM'
      }`,
      noq: noq,
      correctAnswersCount: correctAnswersCount,
      incorrectAnswersCount: incorrectAnswersCount,
      unattemptedCount: unattemptedCount,
      obtainedPoints: obtainedPoints,
      obtainedPercentage: obtainedPercentage,
      qnaSet: { ...qnaSet }
    };

    const { uid } = currentUser;
    const db = getDatabase();
    const submissionsKey = push(child(ref(db), `submissions/${uid}`)).key;
    const submissionsData = {};

    submissionsData[`submissions/${uid}/${submissionsKey}`] = markSheetObject;
    try {
      // Update submission data in the database
      await update(ref(db), submissionsData);

      // Manually increase submission count
      const submissionCountRef = ref(db, 'submissionCount');
      const snapshot = await get(submissionCountRef);
      if (snapshot.exists()) {
        const currentSubmissionCount = snapshot.val()[id] || 0;
        const updatedSubmissionCount = currentSubmissionCount + 1;

        await update(submissionCountRef, {
          [id]: updatedSubmissionCount
        });
      }

      // Navigate to the result page
      navigate(`/result/${id}`, { state: { qnaSet, markSheetObject } });
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  }, [currentUser, date, id, navigate, qnaSet]);

  return (
    <>
      {loading && <p className="page-heading text-lg">Loading ...</p>}
      {error && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length === 0 && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length > 0 && (
        <div className="mx-auto w-[85%] animate-reveal">
          <h1 className="page-heading">{id.split('-').join(' ')} Quiz!</h1>
          <Rules />
          <div className="card mb-40 flex flex-col justify-center rounded-md p-3">
            <div className="flex flex-col items-center justify-center text-xl font-bold text-black dark:text-white sm:text-3xl">
              Q. {qnaSet[currentQuestion].title}
            </div>

            <hr className="mb-8 mt-3 h-px border-0 bg-primary" />

            <AnswerBox
              input
              handleChange={handleAnswerChange}
              options={qnaSet[currentQuestion].options}
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
