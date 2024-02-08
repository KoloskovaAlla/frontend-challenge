import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.menu}>
        <li
          className={classes.item}
          key={1}
        >
          <NavLink
            className={classes.link}
            to={`/`}
          >
            все котики
          </NavLink>
        </li>
        <li
          className={classes.item}
          key={2}
        >
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to={`/favoriteCats`}
          >
            любимые котики
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
