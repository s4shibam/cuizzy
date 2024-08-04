import { logo } from '../../assets';

function Preloader() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-light dark:bg-dark">
      <img alt="Cuizzy" className="w-24 animate-fade-upwards opacity-0" src={logo} />
    </div>
  );
}

export default Preloader;
