import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

import HomepageFront from './PHMC-Homepage/homepageFront';
import HomepageMortgageCalculator from './PHMC-Homepage/homepageMortgageCalculator';
import HomepageAboutUs from './PHMC-Homepage/homepageAboutUs';
import HomepageBlog from './PHMC-Homepage/homepageBlog';
import HomepageReview from './PHMC-Homepage/homepageReview';

import Web19201 from './PHMC-Homepage/web19201';
import Careers from './PHMC-Homepage/careers';
import Contact from './PHMC-Homepage/contact';
import Locations from './PHMC-Homepage/locations';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Web19201} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
