import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';
import Form from '../elements/Form';
import TextInput from '../elements/TextInput';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

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
    // eslint-disable-next-line react/jsx-no-bind
    <Form className='signup gap-4 py-0' onSubmit={handleSubmit}>
      <TextInput
        type='email'
        required
        placeholder='Enter Registered Email ID'
        icon='mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type='password'
        required
        placeholder='Enter The Password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

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

      <div className='user-signup text-center text-sm md:text-base font-medium tracking-wide text-darkText dark:text-slate-300'>
        Don&apos;t have an account?
        <Link to='/signup'>
          <span className='link-text'> Sign Up </span>
        </Link>
        instead.
      </div>
    </Form>
  );
}

export default LoginForm;
