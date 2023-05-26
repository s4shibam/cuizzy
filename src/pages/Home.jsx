import { coding, hero } from '../assets';
import { BasicInfo, ContactUs, DesignComponent, Footer } from '../components';

function Home() {
  return (
    <div className='home-page mt-44 flex flex-col items-center justify-center xl:mt-24'>
      <div className='home-image mx-4 flex max-w-xl items-center justify-center 2xl:max-w-3xl'>
        <img
          className='absolute top-36 w-12 animate-flip rounded-md drop-shadow-md md:w-20 md:rounded-2xl'
          src={coding}
          alt='Coding'
        />
        <img
          className='object-cover drop-shadow-xl'
          width={720}
          height={450}
          src={hero}
          alt='Quizzy'
        />
      </div>

      <div className='home-details mx-8 flex flex-col items-center justify-center gap-2'>
        <p className='page-heading my-8 text-center text-3xl font-bold uppercase text-darkText dark:text-lightText md:text-5xl '>
          The Greatest
          <span className='block text-darkViolet drop-shadow-2xl dark:text-brightViolet'>
            {' '}
            Quiz Competition{' '}
          </span>
          Platform you have ever seen!
        </p>
        <p className='quote text-center font-bold uppercase text-slate-700 dark:text-slate-400 md:text-xl'>
          &quot; Quizzes are like a mental workout, except you don&apos;t need
          to break a sweat! &quot;
        </p>
      </div>

      <BasicInfo />
      <hr className='mb-3 h-px w-[85%] border-0 bg-dullWhite dark:bg-gray-600' />
      <ContactUs />
      <Footer />
      <DesignComponent />
    </div>
  );
}

export default Home;
