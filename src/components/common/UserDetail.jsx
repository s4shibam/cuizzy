import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlert, useGAEventTracker } from '../../hooks';

function UserDetail({ data, currentUser, updateDetail }) {
  const gaEventTracker = useGAEventTracker('Profile Page');
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
        useAlert('success', data === 'displayName' ? 'username-updated' : 'profile-image-updated');

        document.body.style.cursor = 'default';
      } catch (err) {
        document.body.style.cursor = 'default';
        useAlert('error', err.code);
      }
    navigate('/profile');
    gaEventTracker({ label: 'Save ' + data });
  }

  function handleCancel(e) {
    e.preventDefault();
    setUserDetail(currentUser[data]);
    setSave((prevState) => !prevState);
    setUnderEdit((prevState) => !prevState);
    gaEventTracker({ label: 'Cancel ' + data });
  }

  if (data === 'displayName') {
    return (
      <div className="flex max-w-sm flex-col content-center justify-start sm:flex-row">
        <div className="mr-4 flex items-center text-secondary">Name:</div>
        <form className="flex w-[250px] items-center justify-between" onSubmit={handleEditDetail}>
          {underEdit ? (
            <input
              className="h-8 w-[200px] border-b border-b-secondary bg-transparent font-medium text-black outline-none dark:text-white"
              type="text"
              value={userDetail}
              onChange={(e) => setUserDetail(e.target.value)}
            />
          ) : (
            <span
              className="h-8 w-[200px] cursor-pointer truncate pt-1 font-medium text-black dark:text-white sm:pt-0.5"
              title={currentUser[data]}
            >
              {currentUser[data]}
            </span>
          )}
          {save ? (
            <button
              className="material-symbols-outlined -mt-1 ml-2 text-xl"
              title="Edit"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSave((prevState) => !prevState);
                setUnderEdit((prevState) => !prevState);
              }}
            >
              edit
            </button>
          ) : (
            <>
              <button
                className="material-symbols-outlined mx-1 text-2xl text-green-500"
                title="Save"
                type="submit"
                onClick={handleEditDetail}
              >
                save
              </button>
              <button
                className="material-symbols-outlined text-2xl text-red-500"
                title="Cancel"
                type="button"
                onClick={handleCancel}
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
        className="relative my-2 grid h-36 w-36 cursor-pointer place-content-center overflow-hidden rounded-full bg-secondary shadow-xl"
        title="Preferred Ratio: 1:1"
      >
        {currentUser[data] && !underEdit !== null ? (
          <img alt="" className="h-full w-full object-cover" src={currentUser[data]} />
        ) : !underEdit ? (
          <span className="material-symbols-outlined text-9xl text-black">
            sentiment_very_satisfied
          </span>
        ) : null}

        <label
          className={`group absolute flex h-36 w-36 cursor-pointer items-center justify-center rounded-full transition duration-500 ${
            !underEdit && 'hover:bg-gray-900/60'
          }`}
          id="upload-file"
        >
          <span
            className={`material-symbols-outlined hidden text-6xl text-white ${
              !underEdit && 'group-hover:block'
            }`}
          >
            cloud_upload
          </span>
          <input
            accept="image/png, image/jpeg"
            className="hidden"
            id="upload-file"
            type="file"
            onChange={(e) => {
              setUnderEdit((prevState) => !prevState);
              e.target.files[0] && setUserDetail(e.target.files[0]);
            }}
          />
          {underEdit && (
            <>
              <div className="rounded-full bg-white/50">
                <img
                  alt=""
                  className="h-36 w-36"
                  src={URL.createObjectURL(userDetail)}
                  style={{ clipPath: 'circle()' }}
                />
              </div>
              <div className="absolute hidden h-36 w-36 items-center justify-center gap-5 rounded-full hover:bg-gray-900/60 group-hover:flex">
                <button
                  className="material-symbols-outlined rounded-full text-5xl text-green-500 transition duration-300 hover:scale-110 hover:bg-green-500 hover:text-black"
                  title="Save"
                  onClick={handleEditDetail}
                >
                  done
                </button>
                <button
                  className="material-symbols-outlined rounded-full text-5xl text-red-500 transition duration-300 hover:scale-110 hover:bg-red-500 hover:text-black"
                  title="Cancel"
                  onClick={handleCancel}
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
