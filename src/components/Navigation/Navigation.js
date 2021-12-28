import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeclassname={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
