import { Link } from 'react-router-dom';
import { DesignComponent, Thumbnail } from '../components';
import useData from '../hooks';

function Learn() {
  const { loading, error, data } = useData('videos');

  return (
    <div className='learn-page mx-auto flex w-[85%] animate-reveal flex-col justify-center'>
      <h1 className='page-heading'>Learn from us!</h1>

      <div className='quizzes mx-auto grid w-full grid-cols-quizzes justify-items-center gap-5'>
        {data.map((video, index) => (
          <Link to={`/video/${video.link}`} key={index}>
            <Thumbnail title={video.title} id={video.link} type='video' />
          </Link>
        ))}
      </div>

      <div className='error flex items-center justify-center text-center text-xl'>
        {!loading && data.length === 0 && <>No data found! </>}
        {error && <>There was an error! </>}
        {loading && <>Loading ...</>}
      </div>

      <DesignComponent />
      <br />
    </div>
  );
}

export default Learn;
