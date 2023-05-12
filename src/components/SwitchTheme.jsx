import { useEffect, useState } from 'react';

function SwitchTheme() {
  const [theme, setTheme] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light'
  );

  function toggleTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      setTheme('light');
    else setTheme('dark');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  return (
    <button
      type='button'
      className='switch-theme ml-1 flex items-center'
      title='Log out'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <span
          className='icon material-icons-outlined text-2xl xl:ml-2 xl:text-4xl'
          title='Light Mode'
        >
          light_mode
        </span>
      ) : (
        <span
          className='icon material-icons-outlined text-2xl text-darkViolet xl:ml-2 xl:text-4xl'
          title='Dark Mode'
        >
          dark_mode
        </span>
      )}
    </button>
  );
}

export default SwitchTheme;
