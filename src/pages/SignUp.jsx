import { signup } from '../assets';
import DesignComponent from '../components/DesignComponent';
import SignUpForm from '../components/forms/SignUpForm';

function SignUp() {
  return (
    <div className='signup mx-auto w-[85%] animate-reveal'>
      <h1 className='page-heading'>Create an account!</h1>
      <div className='responsive gap-16'>
        <div className='signup-image hidden items-center justify-center lg:flex'>
          <img
            className='w-full justify-self-center lg:max-w-[80%]'
            height={600}
            width={600}
            src={signup}
            alt='Sign Up'
          />
        </div>
        <div className='frame-BG'>
          <SignUpForm />
        </div>
      </div>
      <DesignComponent />
    </div>
  );
}

export default SignUp;
