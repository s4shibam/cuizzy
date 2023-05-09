import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AnswerBox from '../components/AnswerBox';
import ProgressBar from '../components/ProgressBar';
import Rules from '../components/Rules';
import { useAuth } from '../contexts/AuthContext';
import { useQuiz } from '../hooks';
import PageNotFound from './PageNotFound';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions': {
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    }
    case 'answer': {
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    }

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuiz(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions
    });
  }, [questions]);

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
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion((curr) => curr + 1);
  }, [currentQuestion, questions]);

  // Get previous question
  const previousQuestion = useCallback(() => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length)
      setCurrentQuestion((curr) => curr - 1);
  }, [currentQuestion, questions]);

  // Progress percentage
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) * 100) / questions.length : 0;

  // Submit Quiz
  const submit = useCallback(async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna
    });

    navigate(`/result/${id}`, { state: { qna } });
  }, [currentUser, id, navigate, qna]);

  return (
    <>
      {loading && <p className='page-heading text-lg'>Loading ...</p>}
      {error && <PageNotFound />}
      {!loading && !error && qna && qna.length === 0 && <PageNotFound />}
      {!loading && !error && qna && qna.length > 0 && (
        <div className='quiz mx-auto w-[85%] animate-reveal'>
          <h1 className='page-heading'>{id.split('-').join(' ')} Quiz!</h1>
          <Rules />
          <div className='question frame-BG mb-40 flex flex-col justify-center rounded-md p-3'>
            <div className='flex flex-col items-center justify-center text-xl font-bold text-darkText dark:text-lightText sm:text-3xl'>
              Q. {qna[currentQuestion].title}
            </div>
            <hr className='mt-3 mb-8 h-px border-0 bg-gray-400 dark:bg-gray-600' />

            <AnswerBox
              input
              options={qna[currentQuestion].options}
              handleChange={handleAnswerChange}
            />
          </div>

          <ProgressBar
            nextQ={nextQuestion}
            prevQ={previousQuestion}
            progress={percentage}
            submit={submit}
          />
        </div>
      )}
    </>
  );
}

export default Quiz;
