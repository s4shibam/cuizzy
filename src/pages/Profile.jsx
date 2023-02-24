import { useState } from 'react';
import showAlert from '../components/AlertList';
import DesignComponent from '../components/DesignComponent';
import UserName from '../components/UserName';
import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { currentUser, resetPassword } = useAuth();
  const [resetLoading, setResetLoading] = useState(false);

  async function sendResetMail() {
    try {
      setResetLoading(true);
      document.body.style.cursor = 'wait';
      await resetPassword(currentUser.email);
      showAlert('success', 'mail-sent');
      document.body.style.cursor = 'default';
    } catch (err) {
      setResetLoading(false);
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
  }
  return (
    <div className='profile-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center sm:text-xl'>
      <h1 className='page-heading'>Profile Details!</h1>

      <div className='profile-section frame-BG mx-10 my-8 flex flex-col items-center justify-center rounded-3xl px-10 sm:gap-8'>
        <span className='icon material-icons-outlined mb-5 text-8xl'>
          account_circle
        </span>

        <div className='user-details flex flex-col gap-5 sm:gap-10'>
          <UserName />

          <div className='email-id flex flex-col justify-start sm:flex-row'>
            <span className='mr-4 text-brightViolet'>Email:</span>
            <span className='text-darkText dark:text-white'>
              {currentUser.email}
            </span>
          </div>

          <div className='phone-number flex flex-col justify-start sm:flex-row'>
            <span className='mr-4 text-brightViolet'>Phone Number:</span>
            <span className='text-darkText dark:text-white'>
              {currentUser.phoneNumber
                ? currentUser.phoneNumber
                : 'Not Available!'}
            </span>
          </div>

          <div className='email-verification flex flex-col justify-start sm:flex-row'>
            <span className='mr-4 text-brightViolet'>Email Verification:</span>
            <span className='text-darkText dark:text-white'>
              {currentUser.emailVerified ? 'Completed' : 'Pending!'}
            </span>
          </div>

          <div className='my-2 flex w-full items-center justify-center'>
            <button
              className='border-button reset rounded-xl border bg-white px-2'
              type='button'
              onClick={sendResetMail}
              disabled={resetLoading}
            >
              <span className='icon material-icons-outlined text-4xl text-darkText dark:text-darkText xl:text-2xl'>
                lock_reset
              </span>
              <span className='text ml-2 uppercase dark:text-darkText'>
                Reset Password
              </span>
            </button>
          </div>
        </div>
      </div>

      <DesignComponent />
    </div>
  );
}

export default Profile;
