import logo from '../../../images/logo.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderHomeButton from './HeaderHomeButton';
import HeaderOrderButton from './OrderButton';

const Header = () => {
  return (
    <header>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            {/* Home */}
            <HeaderHomeButton />
          </li>
          <li>
            {/* Cart */}
            <HeaderCartButton />
          </li>
          <HeaderOrderButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
