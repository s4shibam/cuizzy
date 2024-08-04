import { LoginForm, SignInWithGoogleButton } from '../components';

function Login() {
  return (
    <div className="mx-auto flex min-h-screen w-[85%] animate-reveal flex-col items-center">
      <h1 className="page-heading">Log in to Cuizzy</h1>
      <div className="card mx-auto w-full max-w-xl">
        <LoginForm />
      </div>
      <div className="mx-auto w-full max-w-xl">
        <SignInWithGoogleButton title="Log In" />
      </div>
    </div>
  );
}

export default Login;
