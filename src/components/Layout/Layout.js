import { Fragment } from 'react';
import Cart from '../Cart/Cart';
import Header from './Header/Header';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Cart />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
