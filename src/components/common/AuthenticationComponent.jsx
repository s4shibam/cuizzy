import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { useAlert, useGAEventTracker } from '../../hooks';

function AuthenticationComponent() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const gaEventTracker = useGAEventTracker('Nav Button');

  function handleLogOut() {
    logOut();
    useAlert('success', 'logout-success');
    navigate('/');
  }

  return (
    <div className="mr-2 flex items-center justify-end xl:gap-2">
      {currentUser !== null ? (
        <>
          <button
            className="peer mx-2 grid h-8 w-8 place-content-center overflow-hidden rounded-full bg-secondary xl:h-10 xl:w-10"
            title={currentUser.displayName}
            type="button"
          >
            {currentUser?.photoURL ? (
              <img alt="" className="h-full w-full object-cover" src={currentUser.photoURL} />
            ) : (
              <span className="material-symbols-outlined text-3xl text-black xl:text-4xl">
                account_circle
              </span>
            )}
          </button>

          <div className="pointer-events-none absolute top-8 mr-2 flex flex-col py-4 opacity-0 transition-opacity duration-300 hover:pointer-events-auto hover:opacity-100 peer-hover:pointer-events-auto peer-hover:opacity-100 xl:top-10">
            <div className="h-1 bg-transparent"></div>
            <hr className="h-px border-0 bg-primary" />
            <div className="bg-primary">
              <Link to="/profile" onClick={() => gaEventTracker({ label: 'Profile' })}>
                <button className="flex w-full items-center gap-3 px-4 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl">
                  <span className="material-symbols-outlined text-2xl">person</span>
                  <span className="ml-2">My Profile</span>
                </button>
              </Link>
              <hr />
              <Link to="/submissions" onClick={() => gaEventTracker({ label: 'Submissions' })}>
                <button className="flex w-full items-center gap-3 px-4 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl">
                  <span className="material-symbols-outlined text-2xl">history</span>
                  <span className="ml-2">Submissions</span>
                </button>
              </Link>
              <hr />
              <Link to="/" onClick={() => gaEventTracker({ label: 'Logout' })}>
                <button
                  className="flex w-full items-center gap-3 px-4 py-2 font-medium tracking-wider transition-all duration-300 hover:bg-gray-100/40 dark:hover:bg-gray-900/30 md:text-xl"
                  onClick={handleLogOut}
                >
                  <span className="material-symbols-outlined text-2xl">logout</span>
                  <span className="ml-2">Log Out</span>
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/login" onClick={() => gaEventTracker({ label: 'Login' })}>
            <button className="border-button mr-2" title="Log in" type="button">
              <span className="material-symbols-outlined text-2xl">login</span>
              <span className="ml-2 hidden uppercase xl:block">Log In</span>
            </button>
          </Link>

          <Link to="/signup" onClick={() => gaEventTracker({ label: 'Signup' })}>
            <button className="border-button" title="Sign up" type="button">
              <span className="mr-2 hidden uppercase xl:block">Sign Up</span>
              <span className="material-symbols-outlined text-2xl">person_add</span>
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthenticationComponent;
