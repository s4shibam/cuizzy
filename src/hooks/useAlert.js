import { toast } from 'react-hot-toast';

const successList = {
  'login-success': 'Successfully logged in!',
  'logout-success': 'Logged out successfully!',
  'account-created': 'Account created successfully!',
  'mail-sent': 'Mail sent!',
  'username-updated': 'Name updated!',
  'profile-image-updated': 'Profile image updated!'
};

const errorList = {
  // Firebase errors
  'auth/wrong-password': 'Wrong password!',
  'auth/email-already-exists': 'Email already exists!',
  'auth/invalid-argument': 'Invalid argument!',
  'auth/invalid-display-name': 'Invalid display name!',
  'auth/invalid-password': 'Password should contain minimum 6 characters!',
  'auth/invalid-photo-url': 'Invalid image details',
  'auth/invalid-uid': 'Invalid user ID!',
  'auth/missing-uid': 'User ID is missing!',
  'auth/phone-number-already-exists': 'Phone number already exists!',
  'auth/email-already-in-use': 'Email already in use!',
  'auth/uid-already-exists': 'User ID already exists!',
  'auth/code-expired': 'The SMS code has expired!',
  'auth/expired-action-code': 'The action code has expired.',
  'auth/invalid-verification-code': 'Verification code is invalid!',
  'auth/missing-phone-number': 'Phone number is missing!',
  'auth/too-many-requests': 'Too many requests!',
  'auth/unverified-email': 'The operation requires a verified email.',
  'auth/user-not-found': 'User not found!',
  'auth/weak-password': 'The password should contain at least 6 characters!',
  'auth/timeout': 'The operation has timed out.',
  'auth/user-disabled': 'The user account has been disabled by the administrator.',
  'auth/user-mismatch': 'User not matching!',

  // Custom error
  'password-no-match': 'Passwords not matched!',
  'login-needed': 'Login first to access!',
  'already-logged-in': 'Invalid access!',
  'unknown-error': 'Unknown error occurred!'
};

export default function useAlert(type = '', msg = '') {
  if (type === 'success') {
    const message = successList[msg] || msg;

    if (!message) {
      toast.success('Success!', {
        position: 'bottom-left',
        theme: 'colored'
      });
    }
    // toast.success('Success!');
    else {
      toast.success(message, {
        position: 'bottom-left',
        theme: 'colored'
      });
    }
    // toast.success(message);
  }

  if (type === 'error') {
    const message = errorList[msg] || msg;

    if (!message) {
      toast.error('Error occurred!', {
        position: 'bottom-left',
        theme: 'colored'
      });
    } else {
      toast.error(message, {
        position: 'bottom-left',
        theme: 'colored'
      });
    }
  }

  return null;
}
