import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styled from './NavBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(styled.link, isActive && styled.active);
};

export const NavBar = () => {
  return (
    <nav className={styled.nav}>
      <NavLink to="/" className={buildLinkClass}>
        🏠 Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        🎞 Movies
      </NavLink>
    </nav>
  );
};
