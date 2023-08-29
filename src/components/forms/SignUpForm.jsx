import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckBox, Form, TextInput } from '../';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function SignUpForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState('');
  const [loading, setLoading] = useState('');

  const [show, setShow] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showAlert('error', 'password-no-match');
      return;
    }
    try {
      setLoading(true);
      document.body.style.cursor = 'wait';
      await signUp(email, password, userName);
      document.body.style.cursor = 'default';
      showAlert('success', 'account-created');
      navigate('/');
    } catch (err) {
      setLoading(false);
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
  }

  return (
    <Form className='signup gap-4' onSubmit={handleSubmit}>
      <TextInput
        type='text'
        required
        placeholder='Enter Your Name'
        icon='person'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        type='email'
        required
        placeholder='Enter Email ID'
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

      <TextInput
        type='password'
        required
        placeholder='Confirm Password'
        icon='lock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        className='my-2 mx-auto flex items-center justify-center text-sm font-medium tracking-wide text-black dark:text-white sm:text-base'
        text='I agree to the Terms &amp; Conditions'
        required
        value={consent}
        onChange={(e) => setConsent(e.target.value)}
      />

      <button
        className='signup fill-button mt-2'
        type='submit'
        disabled={loading}
      >
        Sign Up
      </button>

      <div className='user-login -mt-1 text-center text-sm font-medium tracking-wide text-black dark:text-slate-300 md:text-base'>
        Already have an account?{' '}
        <span className='inline-block'>
          <Link to='/login'>
            <span className='link-text'>Login</span>
          </Link>
          instead.
        </span>
      </div>
    </Form>
  );
}

export default SignUpForm;
