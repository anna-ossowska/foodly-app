import { Fragment } from 'react';
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

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);

  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  };

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
