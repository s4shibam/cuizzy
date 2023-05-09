import React from 'react';
import { Link } from 'react-router-dom';
import { error } from '../assets';
import Footer from '../components/Footer';
function Error() {
  return (
    <>
      <div class='error mx-auto mt-32 flex w-[85%] flex-col items-center justify-center xl:mt-20'>
        <img
          className='mx-auto w-[90%] max-w-2xl'
          src={error}
          alt='Error 404'
        />
        <p className='text-center text-xl font-semibold uppercase'>
          Page not found!
        </p>

        <Link to='/'>
          <button
            type='button'
            className='border-button my-10 border border-darkViolet px-4 py-2 uppercase'
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
