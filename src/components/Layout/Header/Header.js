import logo from '../../../images/logo.png';
import HeaderCartButton from './HeaderCartButton';
import HeaderHomeButton from './HeaderHomeButton';
import HeaderOrderButton from './OrderButton';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
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

          <li>
            <HeaderCartButton onClick={props.onClick} />
          </li>

          <NavLink to="/menu">
            <HeaderOrderButton />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
