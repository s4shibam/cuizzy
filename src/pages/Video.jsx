import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  const link = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="relative mx-auto mb-8 mt-32 pt-[56.25%] xl:mt-24 xl:pt-[40%] 2xl:pt-[42%]">
      <ReactPlayer
        controls
        className="absolute left-0 top-0"
        height="100%"
        url={link}
        width="100%"
      />

      <div
        className="absolute left-0 top-0 -z-20 flex h-full w-full animate-pulse items-center justify-center bg-gray-300 dark:bg-gray-700"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="w-8 text-gray-200 dark:text-gray-600 lg:w-32"
          fill="currentColor"
          viewBox="0 0 384 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Video;
