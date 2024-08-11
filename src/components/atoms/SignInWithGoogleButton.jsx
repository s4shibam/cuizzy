import { useNavigate } from 'react-router-dom';

import { google } from '../../assets';
import { useAuth } from '../../contexts/AuthContext';
import { useAlert, useGAEventTracker } from '../../hooks';

function SignInWithGoogleButton({ title }) {
  const gaEventTracker = useGAEventTracker('Auth');
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    gaEventTracker({ action: 'Submit', label: 'Google Sign In' });

    try {
      document.body.style.cursor = 'wait';
      await signInWithGoogle();
      useAlert('success', 'login-success');
      document.body.style.cursor = 'default';
      navigate('/');
    } catch (err) {
      document.body.style.cursor = 'default';
      useAlert('error', err.code);
    }
    return null;
  }

  return (
    <div>
      <div className="my-5 inline-flex w-full items-center justify-center">
        <p className="h-px w-full bg-secondary"></p>
        <p className="mx-5">Or</p>
        <p className="h-px w-full bg-secondary"></p>
      </div>
      <button
        className="flex w-full items-center justify-center rounded-lg border-2 border-amber-500 bg-white px-4 py-3 text-2xl font-bold uppercase tracking-wider text-black transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
        type="button"
        onClick={handleSubmit}
      >
        <img alt="" className="mr-4 h-8 w-8" src={google} />
        {title}
      </button>
    </div>
  );
}

export default SignInWithGoogleButton;
