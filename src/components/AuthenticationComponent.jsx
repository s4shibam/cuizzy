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
            className='peer mx-2 my-1 grid aspect-square w-9 place-content-center rounded-full bg-dullWhite xl:w-11'
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
              <span className='icon material-icons-outlined text-3xl text-darkText xl:text-4xl'>
                sentiment_very_satisfied
              </span>
            )}
          </button>

          <div className='absolute top-10 mr-2 flex flex-col py-4 opacity-0 transition-opacity duration-300 hover:opacity-100 peer-hover:opacity-100 xl:top-12'>
            <div className='h-1 bg-transparent'></div>
            <hr className='h-px border-0 bg-gray-300 dark:bg-gray-500' />
            <div className='bg-brightViolet'>
              <Link to='/profile'>
                <button className='flex w-full items-center px-3 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl'>
                  <span className='icon material-icons-outlined text-2xl'>
                    person
                  </span>
                  <span className='text ml-2'>My Profile</span>
                </button>
              </Link>
              <hr />
              <Link to='/submissions'>
                <button className='flex w-full items-center px-3 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl'>
                  <span className='icon material-icons-outlined text-2xl'>
                    history
                  </span>
                  <span className='text ml-2'>Submissions</span>
                </button>
              </Link>
              <hr />
              <Link to='/'>
                <button
                  className='flex w-full items-center px-3 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl'
                  onClick={handleLogOut}
                >
                  <span className='icon material-icons-outlined text-2xl'>
                    logout
                  </span>
                  <span className='text ml-2'>Log Out</span>
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to='/login'>
            <button type='button' className='border-button' title='Log in'>
              <span className='icon material-icons-outlined text-2xl'>
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
                Sign Up
              </span>
              <span className='icon material-icons-outlined text-2xl'>
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
