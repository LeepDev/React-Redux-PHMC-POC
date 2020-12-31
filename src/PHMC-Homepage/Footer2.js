import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer2.css'

class Footer2 extends React.Component {
  render() {
    return (

        <div>            
            <div className="rectangle61"></div>
            <div className="group4">
                <div className="rectangle64"></div>
                <div className="rectangle65"></div>
                <div className="rectangle66"></div>
            </div>
            <div className="homeBlogContactLocationsCareersPayment"><
              Link to='/'>Home</Link> | Blog | <Link to='/contact'>Contact</Link> | <Link to='/locations'>Locations</Link> | <Link to='/careers'>Careers</Link> | Payment
              </div>
            <div className="nmlsPrivacyPolicyTermsOfUseDisclosureLicensing">
              NMLS | Privacy Policy | Terms of Use | Disclosure | <Link to='/licensing'>Licensing</Link>
            </div>
            <div className="x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId">© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</div>
            <div className="rectangle67"></div>
            <div className="rectangle68"></div>
            <svg preserveAspectRatio="none" viewBox="0 -0.5 1560 1" className="line1"><path d="M 0 0 L 1560 0"  /></svg>
            <div className="rectangle69"></div>
            <div className="platinumlogohorizontal"></div>
        </div>

    );
  }
}

export default Footer2;
