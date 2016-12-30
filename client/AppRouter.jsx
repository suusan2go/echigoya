import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Layout from './containers/Layout';
import reducers from './reducers';

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>
);

AppRouter.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};


render(
  <AppRouter store={createStore(reducers)} />,
  document.getElementById('app-root'),
);
