import { logo } from '../assets';

function Preloader() {
  return (
    <div className='preloader-BG absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-lightBG dark:bg-darkBG'>
      <img
        className='preloader-image w-24 animate-vanish opacity-0'
        src={logo}
        alt='Quizzy'
      />
    </div>
  );
}

export default Preloader;
