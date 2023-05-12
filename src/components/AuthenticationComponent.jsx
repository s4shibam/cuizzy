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
      {currentUser !== null ? (
        <>
          <button
            type='button'
            className='peer mx-2 my-1 aspect-square w-9 rounded-full bg-dullWhite xl:w-11'
            title={currentUser.displayName}
          >
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className='aspect-square'
                style={{ clipPath: 'circle()' }}
              />
            ) : (
              <span className='icon material-icons-outlined text-2xl xl:text-xl'>
                account_circle
              </span>
            )}
          </button>

          <div className='absolute top-10 mr-2 hidden flex-col py-4 hover:flex peer-hover:flex xl:top-12'>
            <div className='h-1 bg-transparent'></div>
            <div className='bg-brightViolet'>
              <Link to='/profile'>
                <button className='flex w-full items-center px-3 py-2 font-medium  tracking-wider hover:bg-gray-900/30 dark:hover:bg-gray-900/30 md:text-xl'>
                  <span className='icon material-icons-outlined text-2xl text-white dark:text-white xl:text-xl'>
                    account_circle
                  </span>
                  <span className='text ml-2 text-white dark:text-white'>
                    My Profile
                  </span>
                </button>
              </Link>
              <Link to='/'>
                <button
                  className='flex w-full items-center px-3 py-2 font-medium  tracking-wider hover:bg-gray-900/30 dark:hover:bg-gray-900/30 md:text-xl'
                  onClick={handleLogOut}
                >
                  <span className='icon material-icons-outlined ml-0.5 text-2xl text-white dark:text-white xl:text-xl'>
                    logout
                  </span>
                  <span className='text ml-2 text-white dark:text-white'>
                    Log Out
                  </span>
                </button>
              </Link>
            </div>
          </div>
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
