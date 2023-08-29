import { logo } from '../assets';

function Preloader() {
  return (
    <div className='preloader absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-light dark:bg-dark'>
      <img
        className='preloader-image w-24 animate-fade-upwards opacity-0'
        src={logo}
        alt='Quizzy'
      />
    </div>
  );
}

export default Preloader;
