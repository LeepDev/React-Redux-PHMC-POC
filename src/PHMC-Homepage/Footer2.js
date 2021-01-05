import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer2.css'

class Footer2 extends React.Component {
  render() {
    return (

        <div className="footerStyle">            
            <div className="platinumlogohorizontal"></div>
            
            <div className="rowOne">
            <div className="rowTwo">
            <div className="mainLinks">
              <Link to='/'>Home</Link> | Blog | <Link to='/contact'>Contact</Link> | <Link to='/locations'>Locations</Link> | <Link to='/careers'>Careers</Link> | Payment
              </div>
              <div className="contactIcon">
                <div className="emailIcon"></div>
                <div className="callIcon"></div>
                <div className="chatIcon"></div>
            </div>
            <div className="legalLinks">
              <Link to='/emailPolicy'>Email Policy</Link> | Privacy Policy | Terms of Use | <Link to='/ccpa'>CCPA</Link> | <Link to='/licensing'>Licensing</Link>
            </div>
            </div>
            <div className="legalfooter">© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</div>
            </div>
            
            <div className="EHOlogo"></div>
            <div className="BBBlogo"></div>
        </div>

    );
  }
}

export default Footer2;
