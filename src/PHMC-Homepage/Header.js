import React from 'react';
import { Link } from 'react-router-dom';
import styles from './web19201.css';

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

          {/* <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link> */}

          {/* <Text data-layer="c7d4e5e0-9ba8-42bb-99c3-b7efb5da56be" style={styles.web19201_careers}>Careers</Text>
          <Text data-layer="cfad5b67-f7fc-4247-9a96-e2bc2c1a5b53" style={styles.web19201_contact}>Contact</Text>
          <Text data-layer="247be0be-f4ec-4fbd-9690-d38450a7f4f6" style={styles.web19201_locations}>Locations</Text>
          <Text data-layer="119a33e1-1871-4382-b6cd-66208e02380e" style={styles.web19201_payment}>Payment</Text> */}
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

            <li className="nav-item">
              <Link to="/payment" style={styles.web19201_payment}>
                Payment
              </Link>
            </li>

          </ul>
          {/* <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} /> */}
        </div>
      </nav>
    );
  }
}

export default Header;
