
import React from "react";
import Header from './CHeader';
import Footer from './CFooter';
import './css/cPrivacyPages.css';

import { Progress, Image, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'


class Licensing extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
       
    return (
          <Box backgroundImage="url('/assets/licensing/rectangle4.png')"
            bgPosition="top"
            bgRepeat="no-repeat"
            bgSize="cover">        
          <Header></Header>
          <Box backgroundImage="url('/assets/licensing/rectangle3.png')"
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize="cover"
          pb={120}
          >
            <Text width={[.8425, 3/4, 3/4]} className="privacyHeaderText">Licensing</Text>
            <Text width={[.8425, 3/4, 3/4]} className="privacyText">Platinum Home Mortgage Corporation<br />2200 Hicks Road, Suite 101<br />Rolling Meadows, IL 60008<br />847-797-9500<br /><br />Alabama Consumer Credit License: 21466<br />Alaska Mortgage Broker/Lender License: AK13589<br />Arizona Mortgage Banker License: BK-0907539<br />Arkansas Combination Mortgage Banker-Broker-Servicer License: 103888<br />California Residential Mortgage Lending Act License 4130925; Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act<br />Colorado Mortgage Company Registration: Regulated by the Division of Real Estate<br />Connecticut Mortgage Lender License: ML-13589<br />Delaware Lender License: 11341<br />District of Columbia Mortgage Dual Authority License: MLB13589<br />Florida Mortgage Lender Servicer License: MLD538<br />Georgia Residential Mortgage Licensee: 34835<br />Hawaii Mortgage Servicer License MS174<br />Idaho Mortgage Broker / Lender License: MBL-7289<br />Illinois Residential Mortgage Licensee: MB.0004152<br />Illinois Department of Financial and Professional Regulation<br />100 W. Randolph, 9th Floor, Chicago, IL 60601 (888) 473-4858<br />Indiana First Lien Mortgage Lending License: 11081<br />Iowa Mortgage Banker License: 2008-0111<br />Kansas Licensed Mortgage Company: MC.0025118<br />Kentucky Mortgage Company License: MC23818<br />Louisiana Residential Mortgage Lending License<br />Maine Supervised Lender License: SLM12233<br />Maryland Mortgage Lender License: 17853<br />Massachusetts Mortgage Lender License: ML13589 and Third Party Loan Servicer Registration: SL13589<br />Michigan 1st Mortgage Broker / Lender / Servicer Registrant: FR0898 and 2nd Mortgage Broker / Lender / Servicer Registrant: SR0940<br />Minnesota Residential Mortgage Originator: MN-MO-40135670 and Residential Mortgage Servicer License MN-MS-13589<br />Mississippi Mortgage Lender License; Licensed by the Mississippi Department of Banking and Consumer Finance<br />Missouri Residential Mortgage Loan Broker License: 13-2029-A<br />Montana Mortgage Lender License and Mortgage Servicer License<br />Nebraska Mortgage Banker License: NE 13589<br />Nevada Mortgage Company License 4270; 4670 South Fort Apache, Suite 150, Las Vegas, NV 89147, (800) 953-6337; 9620 Center Ave, Suite 180, Rancho Cucamonga, CA 91730 (909) 483-9101; 4811 Airport Plaza Dr, Suite 2200, Long Beach, CA 90815 (310) 380-6300; ; 2700 Ygnacio Valley Rd., Ste 130, Walnut Creek, CA 94598 (925) 357-8222 and 2200 Hicks Rd, Suite 101, Rolling Meadows, IL 60008 (847) 797-9500<br />New Hampshire Mortgage Banker: 16907-MB; Licensed by the New Hampshire Banking Department<br />New Jersey Residential Mortgage Lender License; Licensed by the New Jersey Department of Banking and Insurance<br />New Mexico Mortgage Loan Company License<br />New York Licensed New York Mortgage Banker – NYS Banking Department; NY Exempt Mortgage Loan Servicer Registration: B501021<br />North Carolina Mortgage Lender License: L-142844<br />North Dakota Money Broker License: MB102344<br />Ohio Mortgage Broker Act Mortgage Banker Exemption: MBMB.850128.000 and Mortgage Loan Act Certificate of Registration: SM.501782.000<br />Oklahoma Mortgage Lender License: ML002568<br />Oregon Mortgage Lender License: ML-4718<br />Pennsylvania Mortgage Lender License: 36215; Mortgage Servicer License 67478; Licensed by the Department of Banking<br />Rhode Island Lender License: 20132831LL<br />South Carolina Mortgage Lender / Servicer License: MLS-13589<br />South Dakota Mortgage Lender License: ML.04955<br />Tennessee Mortgage License: 109194<br />Texas SML Mortgage Banker Registration: 13589 (click here for additional information)<br />Utah DRE Mortgage Entity License: 7698753-NMLC; DFI Residential First Mortgage Notification<br />Vermont Lender License: 6419 and Loan Servicer License: 13589-1<br />Virginia NMLS ID #13589 (www.nmlsconsumeraccess.org); Mortgage Broker and Lender License: MC-5125<br />Washington Consumer Loan License: CL-13589<br />West Virginia Mortgage Lender License: ML-31441<br />Wisconsin Mortgage Banker License: 21877 and Mortgage Broker License: 16213<br />Wyoming Mortgage Lender/Broker License: 2290</Text>
          </Box>
          <Footer></Footer>
        </Box>
    );
  }
}

Licensing.propTypes = {

}

Licensing.defaultProps = {

}


export default Licensing;
          