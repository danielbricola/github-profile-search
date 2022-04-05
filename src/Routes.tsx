import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GithubSearch from 'pages/GithubSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/githubsearch">
        <GithubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
