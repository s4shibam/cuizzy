import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import showAlert from './AlertList';

function SignInWithGoogleButton() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      document.body.style.cursor = 'wait';
      await signInWithGoogle();
      showAlert('success', 'login-success');
      document.body.style.cursor = 'default';
      navigate('/');
    } catch (err) {
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
    return null;
  }

  return (
    <div>
      <div className='my-5 inline-flex w-full items-center justify-center'>
        <p className='h-px w-full bg-brightViolet'></p>
        <p className='mx-5'>Or</p>
        <p className='h-px w-full bg-brightViolet'></p>
      </div>
      <button
        className='google flex w-full items-center justify-center rounded-lg border-2 border-amber-400 bg-transparent px-4 py-2 text-2xl font-bold uppercase tracking-wider  text-darkText transition-all duration-700 ease-in-out hover:bg-lightBG dark:text-lightText dark:hover:bg-darkBG'
        type='button'
        onClick={handleSubmit}
      >
        <img
          className='mr-4 h-8 w-8'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
        />
        Sign In
      </button>
    </div>
  );
}

export default SignInWithGoogleButton;
