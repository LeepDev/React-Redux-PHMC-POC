import React from 'react';
import { Link } from 'react-router-dom';
import {Image as ReactImage} from 'react-native';
import styles from './styles';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          
          <Link to="/" className="navbar-brand">Test</Link>

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

            {/* <li className="nav-item">
              <Link to="/payment" style={styles.web19201_payment}>
                Payment
              </Link>
            </li> */}

          </ul>
          {/* <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} /> */}
        </div>
      </nav>
    );
  }
}

export default Header;
