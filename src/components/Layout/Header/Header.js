import logo from '../../../images/logo.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderHomeButton from './HeaderHomeButton';
import HeaderOrderButton from './OrderButton';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <NavLink to="/home">
            <HeaderHomeButton />
          </NavLink>

          <NavLink to="/menu">
            <HeaderCartButton />
          </NavLink>

          <NavLink to="/menu">
            <HeaderOrderButton />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
