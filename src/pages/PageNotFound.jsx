import React from 'react';
import { Link } from 'react-router-dom';
import { error } from '../assets';
import { Footer } from '../components';
function Error() {
  return (
    <>
      <div className='error mx-auto mt-32 flex w-[85%] flex-col items-center justify-center xl:mt-20'>
        <img
          className='mx-auto w-[90%] max-w-lg 2xl:max-w-2xl'
          src={error}
          height={500}
          width={500}
          loading='lazy'
          alt='Error 404'
        />

        <p className='text-center text-xl font-semibold uppercase'>
          Page not found
        </p>

        <Link to='/'>
          <button
            type='button'
            className='border-button my-10 rounded-md border-2 border-primary px-4 py-2 font-medium uppercase'
            title='Home'
          >
            Go to home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Error;
