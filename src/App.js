import { Fragment, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Checkout from './components/Checkout/Checkout';
import NotFound from './pages/NotFound';

import Header from './components/Layout/Header/Header';
import Cart from './components/Cart/Cart';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import { cartActions } from './store/cart-slice';

let isInitial = true;

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cartState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  };

  // --- HTTP PUT REQUEST ---
  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/foodlycart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartState),
        }
      );

      if (!response.ok) {
        throw new Error('Cart data not found.');
      }
    };

    // It blocks the cart from being sent when the Effect executes for the first time, so when application starts. Thus, we avoid resetting cart to its initial state.
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      console.error(err || 'Something went wrong');
    });
  }, [cartState]);

  // --- HTTP GET REQUEST ---
  useEffect(() => {
    const getCartData = async () => {
      const response = await fetch(
        'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/foodlycart.json'
      );

      if (!response.ok) {
        throw new Error('Cart data cannot be fetched.');
      }

      const cartData = await response.json();

      dispatch(cartActions.replaceCart(cartData));
    };

    getCartData().catch((err) => {
      console.error(err || 'Something went wrong');
    });
  }, [dispatch]);

  return (
    <Fragment>
      <Layout>
        <Header onClick={showCartHandler} />
        {isCartShown && <Cart />}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
      <Footer />
    </Fragment>
  );
}

export default App;
