import { useState } from 'react';

import { coding, hero } from '../assets';
import { BasicInfo, ContactUs, Footer, PopularQuizzes } from '../components';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`mt-36 flex animate-reveal flex-col items-center justify-center xl:mt-28 ${
        !imageLoaded && 'hidden'
      }`}
    >
      <div className="relative mx-auto aspect-[8/5] max-w-xl overflow-hidden px-4 xl:mt-8 2xl:max-w-3xl">
        <div className="absolute left-0 top-0 flex w-full justify-center pr-1">
          <img
            alt=""
            className="w-12 origin-center animate-rotate rounded-md drop-shadow-md md:w-20 md:rounded-xl"
            src={coding}
          />
        </div>

        <img
          alt=""
          className="object-cover drop-shadow-lg"
          height={450}
          src={hero}
          width={720}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="mx-8 flex flex-col items-center justify-center gap-2">
        <p className="page-heading my-8 mt-10 text-center text-3xl font-bold uppercase text-black dark:text-white md:text-5xl">
          The Best
          <span className="my-1 block text-center text-primary drop-shadow-2xl">
            Coding Quiz Practice
          </span>
          Platform you have ever seen!
        </p>
        <p className="rounded-lg bg-primary px-4 py-2 text-center font-semibold uppercase tracking-wide text-black md:text-xl">
          Quizzes are like a mental workout, except you don&apos;t need to break a sweat!
        </p>
      </div>

      <BasicInfo />
      <PopularQuizzes />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
