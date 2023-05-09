import { LazyLoadImage } from 'react-lazy-load-image-component';
import { logo } from '../assets';

function Thumbnail({ title, id, noq, type }) {
  let link = null;

  if (type === 'video')
    link = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  else
    link = `https://raw.githubusercontent.com/s4shibam/Quizzy-Quiz-Application/master/thumbnails/${id}.webp`;

  return (
    <div className='topic frame-BG mb-5 cursor-pointer rounded-xl pb-2 hover:shadow-sm hover:shadow-dullWhite'>
      <LazyLoadImage
        className='topic-thumbnail w-full rounded-xl'
        width={360}
        height={200}
        src={link}
        PlaceholderSrc={logo}
        alt={title}
      />

      <p className='topic-title my-2 overflow-hidden text-center font-semibold uppercase tracking-wide text-darkText line-clamp-2 dark:text-slate-300 sm:text-lg'>
        {title}
      </p>

      {type === 'quiz' && (
        <>
          <hr className='mb-3 h-px border-0 bg-dullWhite dark:bg-gray-600' />

          <div className='topic-meta mb-1 flex justify-between px-2 text-sm font-medium text-darkText dark:text-slate-300 sm:text-base'>
            <p>{noq} Questions</p>
            <p>Total Points: {noq * 10}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Thumbnail;
