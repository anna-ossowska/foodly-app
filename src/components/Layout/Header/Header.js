import logo from '../../../images/logo.png';
import HeaderCartButton from './HeaderCartButton';
import HeaderHomeButton from './HeaderHomeButton';
import HeaderOrderButton from './OrderButton';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul>
          <NavLink to="/home">
            <HeaderHomeButton />
          </NavLink>

          <li className={classes['cart-link']}>
            <HeaderCartButton onClick={props.onClick} />
            <span className={classes.badge}>{totalQuantity}</span>
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
