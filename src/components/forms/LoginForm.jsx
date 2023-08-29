import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, SignInWithGoogleButton, TextInput } from '../';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const [show, setShow] = useState(false);

  const { logIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      document.body.style.cursor = 'wait';
      await logIn(email, password);
      showAlert('success', 'login-success');
      document.body.style.cursor = 'default';
      navigate('/');
    } catch (err) {
      document.body.style.cursor = 'default';
      setLoading(false);
      showAlert('error', err.code);
    }
    return null;
  }

  return (
    <>
      <Form className='signup gap-4 py-0' onSubmit={handleSubmit}>
        <TextInput
          type='email'
          required
          placeholder='Enter Registered Email ID'
          icon='mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='text-input flex h-[52px] w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50'>
          <input
            className='ml-1 w-full rounded-lg border-none bg-transparent font-medium tracking-wide text-black outline-none dark:text-white lg:text-xl'
            type={show ? 'text' : 'password'}
            required
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='material-symbols-outlined mx-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl'
            type='button'
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? 'visibility_off' : 'visibility'}
          </button>
        </div>

        <div className='ml-auto'>
          <Link
            to='/reset'
            className='link-text user-signup justify-self-end text-base font-medium tracking-wide'
          >
            Forgot Password?
          </Link>
        </div>

        <button
          className='user-login fill-button mt-2'
          type='submit'
          disabled={loading}
        >
          Log In
        </button>

        <div className='user-signup text-center text-sm font-medium tracking-wide text-black dark:text-slate-300 md:text-base'>
          Don&apos;t have an account?
          <Link to='/signup'>
            <span className='link-text'> Sign Up </span>
          </Link>
          instead.
        </div>
      </Form>
      {/* <SignInWithGoogleButton /> */}
    </>
  );
}

export default LoginForm;
