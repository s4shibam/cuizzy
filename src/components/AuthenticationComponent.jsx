import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import showAlert from './AlertList';

function AuthenticationComponent() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    logOut();
    showAlert('success', 'logout-success');
    navigate('/');
  }

  return (
    <div className='authentication flex items-center justify-end xl:gap-4'>
      {currentUser ? (
        <>
          <Link to='/profile'>
            <button
              type='button'
              className='border-button'
              title={currentUser.displayName}
            >
              <span className='icon material-icons-outlined text-2xl xl:text-xl'>
                account_circle
              </span>
              <span className='text ml-2 hidden max-w-[200px] truncate uppercase xl:block'>
                Hi! {currentUser?.displayName?.split(' ')[0]}
              </span>
            </button>
          </Link>

          <Link to='/'>
            <button
              type='button'
              className='border-button'
              title='Log out'
              onClick={handleLogOut}
            >
              <span className='text mr-2 hidden uppercase xl:block'>
                Log Out
              </span>
              <span className='icon material-icons-outlined text-2xl xl:text-xl'>
                logout
              </span>
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to='/login'>
            <button type='button' className='border-button' title='Log in'>
              <span className='icon material-icons-outlined text-2xl xl:text-xl'>
                {' '}
                login
              </span>
              <span className='text ml-2 hidden uppercase xl:block'>
                Log In
              </span>
            </button>
          </Link>

          <Link to='/signup'>
            <button type='button' className='border-button' title='Sign up'>
              <span className='text mr-2 hidden uppercase xl:block'>
                {' '}
                Sign Up
              </span>
              <span className='icon material-icons-outlined text-2xl xl:text-xl'>
                person_add
              </span>
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthenticationComponent;
