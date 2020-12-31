import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

// import App from './components/App';

import LandingPage from './PHMC-Homepage/LandingPage';
import Careers from './PHMC-Homepage/careers';
import Contact from './PHMC-Homepage/contact';
import Locations from './PHMC-Homepage/locations';
import Buy from './PHMC-Homepage/buy';
import Refi from './PHMC-Homepage/refi';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/locations" component={Locations} />
        <Route path="/buy" component={Buy} />
        <Route path="/refi" component={Refi} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
