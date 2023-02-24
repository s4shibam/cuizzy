import { NavLink } from 'react-router-dom';
import NavButton from './elements/NavButton';

function SubNavigationBar({ className }) {
  return (
    <ul className={`items-center gap-1 ${className}`}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='Home' />
      </NavLink>
      <NavLink
        to='/quizzes'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='Quizzes' />
      </NavLink>
      <NavLink
        to='/learn'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='Learn' />
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='About' />
      </NavLink>
    </ul>
  );
}

export default SubNavigationBar;
