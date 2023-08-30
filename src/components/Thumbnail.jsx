import { useState } from 'react';

import { placeholder } from '../assets';

function Thumbnail({ title, id, noq, type }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  let link = null;

  if (type === 'video') link = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  else
    link = `https://raw.githubusercontent.com/s4shibam/Quizzy-Quiz-Application/master/thumbnails/${id}.webp`;

  return (
    <div
      className="card mb-5 max-w-lg cursor-pointer rounded-lg border-2 transition-all duration-300 hover:border-primary"
      title={title}
    >
      <div className="card relative aspect-video w-full overflow-hidden rounded-lg p-0">
        <img
          alt={title}
          className="h-auto w-full animate-reveal object-cover"
          loading="lazy"
          src={link}
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded && <img alt="" className="h-full w-full object-cover" src={placeholder} />}
      </div>
      <div className={`${type === 'quiz' ? 'flex h-28 flex-col justify-between gap-1' : 'h-14'}`}>
        <p className="mt-1 line-clamp-2 overflow-hidden text-center font-semibold uppercase tracking-wide text-black dark:text-slate-300 sm:text-lg">
          {title}
        </p>

        {type === 'quiz' && (
          <div className="flex justify-between rounded-lg border-2 border-black/10 px-3 py-1 text-sm font-medium text-black drop-shadow-md dark:border-white/10 dark:text-slate-300 sm:text-base">
            <p>{noq}x Questions</p>
            <p>{noq * 10} Points</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Thumbnail;
