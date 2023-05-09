import loginImage from '../assets/images/Login.webp';
import DesignComponent from '../components/DesignComponent';
import LoginForm from '../components/forms/LoginForm';

function Login() {
  return (
    <div className='login-page mx-auto w-[85%] animate-reveal'>
      <h1 className='page-heading'>Log in to Quizzy!</h1>
      <div className='responsive gap-16'>
        <div className='signup-image hidden items-center justify-center lg:flex '>
          <img
            className='w-full justify-self-center lg:max-w-[75%]'
            src={loginImage}
            alt='Sign Up'
          />
        </div>
        <div className='frame-BG'>
          <LoginForm />
        </div>
      </div>
      <DesignComponent />
    </div>
  );
}

export default Login;
