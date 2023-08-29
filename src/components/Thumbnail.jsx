import { LazyLoadImage } from 'react-lazy-load-image-component';
import { placeholder } from '../assets';

function Thumbnail({ title, id, noq, type }) {
  let link = null;

  if (type === 'video')
    link = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  else
    link = `https://raw.githubusercontent.com/s4shibam/Quizzy-Quiz-Application/master/thumbnails/${id}.webp`;

  return (
    <div
      className='topic card mb-5 max-w-lg cursor-pointer rounded-lg border-2 transition-all duration-300 hover:border-primary '
      title={title}
    >
      <LazyLoadImage
        src={link}
        alt={title}
        width='100%'
        placeholderSrc={placeholder}
        className='topic-thumbnail card aspect-video rounded-lg p-0'
      />
      <div
        className={`${
          type === 'quiz' ? 'flex h-28 flex-col justify-between gap-1' : 'h-14'
        }`}
      >
        <p className='topic-title mt-1 overflow-hidden text-center font-semibold uppercase tracking-wide text-black line-clamp-2 dark:text-slate-300 sm:text-lg'>
          {title}
        </p>

        {type === 'quiz' && (
          <div className='topic-meta flex justify-between rounded-lg border-2 border-black/10 py-1 px-3 text-sm font-medium text-black drop-shadow-md dark:border-white/10 dark:text-slate-300 sm:text-base'>
            <p>{noq}x Questions</p>
            <p>{noq * 10} Points</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Thumbnail;
