import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout>
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
