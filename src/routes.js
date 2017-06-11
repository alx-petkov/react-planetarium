import React from 'react';
import { Route, /* IndexRoute, */ Router, browserHistory } from 'react-router';

// import App from './components/App';
import Home from './containers/HomePage';
import LayoutContainer from './containers/LayoutContainer';
// import MainSection from './containers/MainSectionContainer';
import ItemPageContainer from './containers/ItemPageContainer';
// import HomePage from './components/HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import SwitchBoard from './containers/SwitchBoardContainer';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route  component={Home} />
    <Route path="/" component={LayoutContainer}>
      <Route path=":category" component={SwitchBoard} />
      {/*<Route path=":category/:item" />*/}
      <Route path=":category/:item/:detail" component={ItemPageContainer} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
