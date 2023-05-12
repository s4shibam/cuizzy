import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import showAlert from './AlertList';

function UserDetail({ data, currentUser, updateDetail }) {
  const [underEdit, setUnderEdit] = useState(false);
  const [userDetail, setUserDetail] = useState(currentUser[data]);
  const [save, setSave] = useState(true);
  const navigate = useNavigate();

  async function handleEditDetail(e) {
    e.preventDefault();
    setSave((prevState) => !prevState);
    setUnderEdit((prevState) => !prevState);

    if (data === 'photoURL' || currentUser[data] !== userDetail)
      try {
        document.body.style.cursor = 'wait';
        await updateDetail(userDetail);
        showAlert(
          'success',
          data === 'displayName' ? 'username-updated' : 'profile-image-updated'
        );

        document.body.style.cursor = 'default';
      } catch (err) {
        document.body.style.cursor = 'default';
        showAlert('error', err.code);
      }
    navigate('/profile');
  }

  if (data === 'displayName') {
    return (
      <div className='user-name flex max-w-sm flex-col content-center justify-start sm:flex-row'>
        <div className='mr-4 flex items-center text-brightViolet'>Name:</div>
        <form
          onSubmit={handleEditDetail}
          className='name-display flex w-full items-center justify-between'
        >
          {underEdit ? (
            <input
              className='max-w-[200px] border-b border-b-brightViolet bg-transparent text-darkText outline-none dark:text-white'
              type='text'
              onChange={(e) => setUserDetail(e.target.value)}
              value={userDetail}
            />
          ) : (
            <span
              className='max-w-[200px] truncate text-darkText dark:text-white cursor-pointer'
              title={currentUser[data]}
            >
              {currentUser[data]}
            </span>
          )}
          {save ? (
            <button
              className='icon material-icons-outlined ml-2 -mt-1 text-xl'
              onClick={(e) => {
                e.preventDefault();
                setSave((prevState) => !prevState);
                setUnderEdit((prevState) => !prevState);
              }}
              type='button'
              title='Edit'
            >
              edit
            </button>
          ) : (
            <button
              className='icon material-icons-outlined text-2xl'
              onClick={handleEditDetail}
              type='submit'
              title='Save'
            >
              save
            </button>
          )}
        </form>
      </div>
    );
  }

  if (data === 'photoURL') {
    return (
      <div
        className='relative my-2 grid aspect-square w-36 cursor-pointer place-content-center rounded-full bg-dullWhite shadow-xl'
        title='Preferred Ratio: 1:1'
      >
        {currentUser[data] && !underEdit !== null ? (
          <img
            src={currentUser[data]}
            alt='Profile Image'
            className='aspect-square'
            style={{ clipPath: 'circle()' }}
          />
        ) : !underEdit ? (
          <span className='icon material-icons-outlined text-9xl text-darkText'>
            sentiment_very_satisfied
          </span>
        ) : null}

        <label
          className={`group absolute flex aspect-square w-36 cursor-pointer items-center justify-center rounded-full transition duration-500 ${
            !underEdit && 'hover:bg-gray-900/60'
          }`}
          id='upload-file'
        >
          <span
            className={`icon material-icons-outlined hidden text-6xl text-lightText ${
              !underEdit && 'group-hover:block'
            }`}
          >
            cloud_upload
          </span>
          <input
            id='upload-file'
            type='file'
            className='hidden'
            accept='image/png, image/jpeg'
            onChange={(e) => {
              setUnderEdit((prevState) => !prevState);
              e.target.files[0] && setUserDetail(e.target.files[0]);
            }}
          />
          {underEdit && (
            <>
              <div className='rounded-full bg-dullWhite'>
                <img
                  src={URL.createObjectURL(userDetail)}
                  className='aspect-square'
                  style={{ clipPath: 'circle()' }}
                />
              </div>
              <div className='absolute hidden aspect-square w-36 items-center justify-center gap-5 rounded-full hover:bg-gray-900/60 group-hover:flex'>
                <button
                  className='icon material-icons-outlined rounded-full text-5xl text-successGreen transition duration-300 hover:scale-110 hover:bg-successGreen hover:text-darkText'
                  onClick={handleEditDetail}
                  title='Save'
                >
                  done
                </button>
                <button
                  className='icon material-icons-outlined rounded-full text-5xl text-failureRed transition duration-300 hover:scale-110 hover:bg-failureRed hover:text-darkText'
                  onClick={() => location.reload()}
                  title='Cancel'
                >
                  close
                </button>
              </div>
            </>
          )}
        </label>
      </div>
    );
  }
}

export default UserDetail;
