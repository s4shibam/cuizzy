import { useState } from 'react';

import { UserDetail } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useAlert, useGAEventTracker } from '../hooks';

function Profile() {
  const gaEventTracker = useGAEventTracker('Profile Page');
  const { currentUser, updateProfileImage, updateUserName, resetPassword } = useAuth();
  const [resetLoading, setResetLoading] = useState(false);

  async function sendResetMail() {
    gaEventTracker({ label: 'Reset Password' });
    if (!confirm('Are you sure you want to reset?')) return;
    try {
      setResetLoading(true);
      document.body.style.cursor = 'wait';
      await resetPassword(currentUser.email);
      useAlert('success', 'mail-sent');
      document.body.style.cursor = 'default';
    } catch (err) {
      setResetLoading(false);
      document.body.style.cursor = 'default';
      useAlert('error', err.code);
    }
  }
  return (
    <div className="mx-auto flex animate-reveal flex-col items-center justify-center sm:text-xl">
      <h1 className="page-heading">Profile Details</h1>

      <div className="card mx-10 my-8 flex flex-col items-center justify-center space-y-6 rounded-3xl px-10">
        <UserDetail currentUser={currentUser} data="photoURL" updateDetail={updateProfileImage} />

        <div className="flex flex-col gap-5 sm:gap-10">
          <UserDetail currentUser={currentUser} data="displayName" updateDetail={updateUserName} />

          <div className="flex flex-col justify-start sm:flex-row">
            <span className="mr-4 text-secondary">Email:</span>
            <span className="font-medium text-black dark:text-white">{currentUser.email}</span>
          </div>

          <div className="flex flex-col justify-start sm:flex-row">
            <span className="mr-4 text-secondary">Phone Number:</span>
            <span className="font-medium text-black dark:text-white">
              {currentUser.phoneNumber ? currentUser.phoneNumber : 'Not Yet Provided!'}
            </span>
          </div>

          <div className="flex flex-col justify-start sm:flex-row">
            <span className="mr-4 text-secondary">Email Verification:</span>
            <span className="font-medium text-black dark:text-white">
              {currentUser.emailVerified ? 'Completed' : 'Pending!'}
            </span>
          </div>

          <div className="my-2 flex w-full items-center justify-center">
            <button
              className="border-button rounded-lg border px-4 py-2"
              disabled={resetLoading}
              type="button"
              onClick={sendResetMail}
            >
              <span className="material-symbols-outlined text-4xl text-black dark:text-black xl:text-2xl">
                lock_reset
              </span>
              <span className="ml-2 text-sm font-medium uppercase dark:text-black sm:text-base">
                Reset Password
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
