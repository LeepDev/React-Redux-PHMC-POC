import React from 'react';
import { Link } from 'react-router-dom';
import {Image as ReactImage} from 'react-native';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          
          <Link to="/" className="navbar-brand">  
          <ReactImage data-layer="e39e0f7d-00c2-453a-bd60-59dd1e06abee" source={require('../assets/HomePage/phmc-logo.png')} style={styles.web19201_rectangle97} />
          </Link>
          <ReactImage data-layer="57a197e6-e61a-441c-97fc-2c17a8414f44" source={require('../assets/HomePage/rectangle85.png')} style={styles.web19201_rectangle85} />

          <ul className="nav navbar-nav pull-xs-right">

            <li className="nav-item">
              <Link to="/careers" style={styles.web19201_careers}>
                Careers
              </Link>
            </li>            
            
            <li className="nav-item">
              <Link to="/contact" style={styles.web19201_contact}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/locations" style={styles.web19201_locations}>
                Locations
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
