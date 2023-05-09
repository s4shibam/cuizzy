import { bgGradient } from '../assets';

function DesignComponent() {
  return (
    <div>
      <img
        src={{ bgGradient }}
        className='fixed top-0 left-[80%] -z-40 h-[350px] w-[200px] blur-[250px] lg:h-[700px] lg:w-[400px]'
        alt='bg-gradient'
      />
      <div className='fixed bottom-10 -left-40 -z-40 h-[350px] w-[350px] rounded-full bg-brightViolet/20 blur-[100px] lg:h-[450px] lg:w-[450px]' />
    </div>
  );
}

export default DesignComponent;
