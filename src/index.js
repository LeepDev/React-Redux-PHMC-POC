import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"


// import App from './components/App';

//import LandingPage from './PHMC-Homepage/LandingPage';
import LandingPage from './PHMC-Homepage/LandingPage2';
import Careers from './PHMC-Homepage/careers';
import Contact from './PHMC-Homepage/contact';
import Locations from './PHMC-Homepage/locations';
import Buy from './PHMC-Homepage/buyLandingPage';
import BuyTest from './PHMC-Homepage/buyTest';
import Refi from './PHMC-Homepage/refiLandingPage';
import RefiTest from './PHMC-Homepage/refiTest';
import Startnow from './PHMC-Homepage/startnow';
import Licensing from './PHMC-Homepage/licensing';
import Ccpa from './PHMC-Homepage/ccpa';
import EmailPolicy from './PHMC-Homepage/emailPolicy';
import buyLandingPage from './PHMC-Homepage/buyLandingPage';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

ReactDOM.render((
  <ChakraProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/*<Route path="/home" component={home2} />*/}
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/locations" component={Locations} />
          <Route path="/buy" component={Buy} />
          <Route path="/refi" component={Refi} />
          <Route path="/buyTest" component={BuyTest} />
          <Route path="/refiTest" component={RefiTest} />
          <Route path="/blog" component={Startnow} />
          <Route path="/startnow" component={Startnow} />
          <Route path="/licensing" component={Licensing} />
          <Route path="/ccpa" component={Ccpa} />
          <Route path="/emailPolicy" component={EmailPolicy} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ChakraProvider>

), document.getElementById('root'));
