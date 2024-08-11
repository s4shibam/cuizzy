import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Footer, Thumbnail } from '../components';
import { useData, useGAEventTracker } from '../hooks';

function Learn() {
  const gaEventTracker = useGAEventTracker('Video Thumbnail');

  const { loading, error, data } = useData('videos');
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const shuffledArray = [...data];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      setShuffledData(shuffledArray);
    }
  }, [data]);
  return (
    <>
      <div className="mx-auto mb-32 flex min-h-screen w-[90%] animate-reveal flex-col items-center">
        <h1 className="page-heading">Learn from us</h1>

        <div className="mx-auto grid w-full grid-cols-quizzes justify-items-center gap-5">
          {shuffledData.map((video, index) => (
            <Link
              key={index}
              className="w-full"
              to={`/video/${video.link}`}
              onClick={() => gaEventTracker({ label: video.link })}
            >
              <Thumbnail id={video.link} title={video.title} type="video" />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center text-center text-xl">
          {!loading && shuffledData.length === 0 && <>No data found! </>}
          {error && <>There was an error! </>}
          {loading && <>Loading ...</>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Learn;
