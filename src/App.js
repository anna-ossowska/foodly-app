import { Fragment, useEfefct, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
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

  // SENDING HTTP REQUESTS

  // Create useEffect in App.js
  // import cart useSelection, use dispatch, and cart actions
  // add replaceCart action in cart-slice, which acceps items, total amount and totalPrice as payload

  // send PUT request to firebase (you send your current cart data)
  // send GET request whenever page reloads

  // We want to send PUT request every time cart state changes

  useEffect(() => {
    console.log('Cart changing');

    const sendCartData = async () => {
      const response = await fetch(
        'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/foodlycart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartState),
        }
      );

      console.log('reponse', response);
      if (!response.ok) {
        throw new Error('Cart data not found.');
      }

      const cartData = await response.json();
      console.log('cartData', cartData);
    };

    // It blocks the cart from being sent when the Effect executes for the first time, so when application starts
    // Thus, we avoid resetting cart to its initial state: { items: [], totalQuantity: 0, totalPrice: 0 } every time we reload the
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      console.error('Something went wrong' || err);
    });
  }, [cartState]);

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
