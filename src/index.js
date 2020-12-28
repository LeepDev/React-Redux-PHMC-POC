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
import Careers from './PHMC-Homepage/careers';
import Contact from './PHMC-Homepage/contact';
import Locations from './PHMC-Homepage/locations';

ReactDOM.render((
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
  //     <Switch>
  //       <Route path="/" component={HomepageFront} />
  //     </Switch>
  //   </ConnectedRouter>
  // </Provider>
  <div>
    <HomepageFront></HomepageFront>
    <HomepageAboutUs></HomepageAboutUs>
    <HomepageMortgageCalculator></HomepageMortgageCalculator>
    <HomepageBlog></HomepageBlog>
    <HomepageReview></HomepageReview>
    <Careers></Careers>
    <Contact></Contact>
    <Locations></Locations>
  </div>

), document.getElementById('root'));
