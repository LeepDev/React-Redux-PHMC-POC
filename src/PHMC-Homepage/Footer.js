import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

class Footer extends React.Component {
  render() {
    return (

        <div>            
            <div className="rectangle1091"></div>
            <div className="group51">
                <div className="rectangle641"></div>
                <div className="rectangle651"></div>
                <div className="rectangle661"></div>
            </div>
            <div className="homeBlogContactLocationsCareersPayment1"><Link to='/'>Home</Link> | Blog | <Link to='/contact'>Contact</Link> | <Link to='/locations'>Locations</Link> | <Link to='/careers'>Careers</Link> | Payment</div>
            <div className="nmlsPrivacyPolicyTermsOfUseDisclosureLicensing1">NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</div>
            <div className="x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId1">© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</div>
            <div className="rectangle1111"></div>
            <div className="rectangle1121"></div>
            <svg preserveAspectRatio="none" viewBox="0 -0.5 1560 1" className="line141"><path d="M 0 0 L 1560 0"  /></svg>
            <div className="rectangle1151"></div>
            <div className="platinumlogohorizontal1"></div>
        </div>
        
    );
  }
}

export default Footer;
