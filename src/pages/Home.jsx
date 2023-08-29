import { coding, hero } from '../assets';
import { BasicInfo, ContactUs, Footer } from '../components';

function Home() {
  return (
    <div className='home-page mt-44 flex flex-col items-center justify-center xl:mt-28'>
      <div className='home-image mx-4 flex max-w-xl items-center justify-center xl:mt-8 2xl:max-w-3xl'>
        <img
          className='absolute top-36 w-12 animate-rotate rounded-md drop-shadow-md md:w-20 md:rounded-2xl'
          src={coding}
          alt=''
        />
        <img
          className='object-cover drop-shadow-xl'
          width={720}
          height={450}
          src={hero}
          alt=''
        />
      </div>

      <div className='home-details mx-8 flex flex-col items-center justify-center gap-2'>
        <p className='page-heading my-8 mt-10 text-center text-3xl font-bold uppercase text-black dark:text-white md:text-5xl'>
          The Best
          <span className='my-1 block text-center text-primary drop-shadow-2xl'>
            Coding Quiz Practice
          </span>
          Platform you have ever seen!
        </p>
        <p className='quote rounded-lg bg-primary px-4 py-2 text-center font-semibold uppercase tracking-wide text-black md:text-xl'>
          Quizzes are like a mental workout, except you don&apos;t need to break
          a sweat!
        </p>
      </div>

      <BasicInfo />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
