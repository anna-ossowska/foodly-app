import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
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
  );
}

export default App;
