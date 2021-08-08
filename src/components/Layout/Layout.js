import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Layout = (props) => {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  // console.log(isCartShown);

  const dispatch = useDispatch();

  const clickCartHandler = () => {
    dispatch(uiActions.showCart());
  };
  return (
    <Fragment>
      <Header onClick={clickCartHandler} />
      {isCartShown && <Cart />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
