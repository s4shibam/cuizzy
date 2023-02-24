import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import showAlert from './AlertList';

function UserName() {
  const { currentUser, updateUserName } = useAuth();
  const [editName, setEditName] = useState(false);
  const [userName, setUserName] = useState(currentUser.displayName);
  const [save, setSave] = useState(true);
  const navigate = useNavigate();

  async function handleEditName() {
    setSave((prevState) => !prevState);
    setEditName((prevState) => !prevState);

    if (currentUser.displayName !== userName)
      try {
        await updateUserName(userName);
        document.body.style.cursor = 'wait';
        showAlert('success', 'username-updated');
        document.body.style.cursor = 'default';
      } catch (err) {
        document.body.style.cursor = 'default';
        showAlert('error', err.code);
      }
    navigate('/profile');
  }
  return (
    <div className='user-name flex max-w-sm flex-col content-center justify-start sm:flex-row'>
      <div className='mr-4 flex items-center text-brightViolet'>Name:</div>
      <div className='name-display flex w-full items-center justify-between'>
        {editName ? (
          <input
            className='border-b border-b-brightViolet bg-transparent text-darkText outline-none dark:text-white '
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        ) : (
          <span className='max-w-[200px] truncate text-darkText dark:text-white'>
            {currentUser.displayName}
          </span>
        )}
        {save ? (
          <button
            className='icon material-icons-outlined ml-2 -mt-1 text-xl '
            onClick={() => {
              setSave((prevState) => !prevState);
              return setEditName((prevState) => !prevState);
            }}
            type='button'
          >
            edit
          </button>
        ) : (
          <button
            className='icon material-icons-outlined text-2xl'
            onClick={handleEditName}
            // disabled={updateNameLoading}
            type='button'
          >
            save
          </button>
        )}
      </div>
    </div>
  );
}

export default UserName;
