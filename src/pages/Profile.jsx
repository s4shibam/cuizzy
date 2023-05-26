import { useState } from 'react';
import { DesignComponent, UserDetail } from '../components';
import showAlert from '../components/AlertList';
import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { currentUser, updateProfileImage, updateUserName, resetPassword } =
    useAuth();
  const [resetLoading, setResetLoading] = useState(false);

  async function sendResetMail() {
    if (!confirm('Are you sure you want to reset?')) return;
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
    <div className='profile-page mx-auto flex animate-reveal flex-col items-center justify-center sm:text-xl'>
      <h1 className='page-heading'>Profile Details!</h1>

      <div className='profile-section frame-BG mx-10 my-8 flex flex-col items-center justify-center space-y-6 rounded-3xl px-10'>
        <UserDetail
          data='photoURL'
          currentUser={currentUser}
          updateDetail={updateProfileImage}
        />

        <div className='user-details flex flex-col gap-5 sm:gap-10'>
          <UserDetail
            data='displayName'
            currentUser={currentUser}
            updateDetail={updateUserName}
          />

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
              className='border-button reset rounded-xl border px-2'
              type='button'
              onClick={sendResetMail}
              disabled={resetLoading}
            >
              <span className='icon material-icons-outlined text-4xl text-darkText dark:text-darkText xl:text-2xl'>
                lock_reset
              </span>
              <span className='ml-2 text-sm uppercase dark:text-darkText sm:text-base'>
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
