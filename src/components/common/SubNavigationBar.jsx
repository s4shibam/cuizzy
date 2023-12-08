import { NavLink } from 'react-router-dom';

import { NavButton } from '..';

function SubNavigationBar({ className }) {
  return (
    <ul className={`items-center gap-8 ${className}`}>
      <NavLink className={({ isActive }) => (isActive ? 'active-page' : null)} to="/">
        <NavButton text="Home" />
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-page' : null)} to="/quizzes">
        <NavButton text="Quizzes" />
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-page' : null)} to="/learn">
        <NavButton text="Learn" />
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-page' : null)} to="/about">
        <NavButton text="About" />
      </NavLink>
    </ul>
  );
}

export default SubNavigationBar;
