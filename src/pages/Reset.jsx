import { ResetPasswordForm } from '../components';

function Reset() {
  return (
    <div className="mx-auto flex h-screen w-[85%] animate-reveal flex-col items-center">
      <h1 className="page-heading">Reset Password</h1>
      <div className="card mx-4 w-full max-w-xl">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

export default Reset;
