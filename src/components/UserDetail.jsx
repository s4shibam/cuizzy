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

  function handleCancel(e) {
    e.preventDefault();
    setUserDetail(currentUser[data]);
    setSave((prevState) => !prevState);
    setUnderEdit((prevState) => !prevState);
  }

  if (data === 'displayName') {
    return (
      <div className='user-name flex max-w-sm flex-col content-center justify-start sm:flex-row'>
        <div className='mr-4 flex items-center text-secondary'>Name:</div>
        <form
          onSubmit={handleEditDetail}
          className='name-display flex w-[250px] items-center justify-between'
        >
          {underEdit ? (
            <input
              className='h-8 w-[200px] border-b border-b-secondary bg-transparent font-medium text-black outline-none dark:text-white'
              type='text'
              onChange={(e) => setUserDetail(e.target.value)}
              value={userDetail}
            />
          ) : (
            <span
              className='h-8 w-[200px] cursor-pointer truncate pt-1 font-medium text-black dark:text-white sm:pt-0.5'
              title={currentUser[data]}
            >
              {currentUser[data]}
            </span>
          )}
          {save ? (
            <button
              className='icon material-symbols-outlined ml-2 -mt-1 text-xl'
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
            <>
              <button
                className='icon material-symbols-outlined mx-1 text-2xl text-green-500'
                onClick={handleEditDetail}
                type='submit'
                title='Save'
              >
                save
              </button>
              <button
                className='icon material-symbols-outlined text-2xl text-red-500'
                onClick={handleCancel}
                type='button'
                title='Cancel'
              >
                cancel
              </button>
            </>
          )}
        </form>
      </div>
    );
  }

  if (data === 'photoURL') {
    return (
      <div
        className='relative my-2 grid h-36 w-36 cursor-pointer place-content-center overflow-hidden rounded-full bg-secondary shadow-xl'
        title='Preferred Ratio: 1:1'
      >
        {currentUser[data] && !underEdit !== null ? (
          <img src={currentUser[data]} className='h-full w-full object-cover' />
        ) : !underEdit ? (
          <span className='icon material-symbols-outlined text-9xl text-black'>
            sentiment_very_satisfied
          </span>
        ) : null}

        <label
          className={`group absolute flex h-36 w-36 cursor-pointer items-center justify-center rounded-full transition duration-500 ${
            !underEdit && 'hover:bg-gray-900/60'
          }`}
          id='upload-file'
        >
          <span
            className={`icon material-symbols-outlined hidden text-6xl text-white ${
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
              <div className='rounded-full bg-white/50'>
                <img
                  src={URL.createObjectURL(userDetail)}
                  className='h-36 w-36'
                  style={{ clipPath: 'circle()' }}
                />
              </div>
              <div className='absolute hidden h-36 w-36 items-center justify-center gap-5 rounded-full hover:bg-gray-900/60 group-hover:flex'>
                <button
                  className='icon material-symbols-outlined rounded-full text-5xl text-green-500 transition duration-300 hover:scale-110 hover:bg-green-500 hover:text-black'
                  onClick={handleEditDetail}
                  title='Save'
                >
                  done
                </button>
                <button
                  className='icon material-symbols-outlined rounded-full text-5xl text-red-500 transition duration-300 hover:scale-110 hover:bg-red-500 hover:text-black'
                  onClick={handleCancel}
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
