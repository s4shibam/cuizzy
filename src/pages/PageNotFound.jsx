import { Link } from 'react-router-dom';

import { error } from '../assets';
import { Footer } from '../components';

function Error() {
  return (
    <>
      <div className="mx-auto mt-32 flex w-[85%] flex-col items-center justify-center xl:mt-20">
        <img
          alt="Error 404"
          className="mx-auto w-[90%] max-w-lg 2xl:max-w-2xl"
          height={500}
          loading="lazy"
          src={error}
          width={500}
        />

        <p className="text-center text-xl font-semibold uppercase">Page not found</p>

        <Link to="/">
          <button
            className="border-button my-10 rounded-md border-2 border-primary px-4 py-2 font-medium uppercase"
            title="Home"
            type="button"
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
