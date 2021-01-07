
import React from "react";
import Header from "./CHeader";
import Footer from "./CFooter";

import { Progress, Image, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'

import './css/cPrivacyPages.css';

class Ccpa extends React.Component {

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
          <Text width={[.8425, 3/4, 3/4]} className="privacyHeaderText">CCPA Notice</Text>
          <Text width={[.8425, 3/4, 3/4]} className="privacyText">Notice to California Residents Pursuant to the California Consumer Privacy Act of 2018<br /><br />The California Legislature enacted the California Consumer Privacy Act of 2018 (“CCPA”), which went into effect on January 1, 2020. The CCPA provides you with certain rights in connection with your personal information.<br /><br />DESCRIPTION OF RIGHTS UNDER THE CCPA<br />1. Notice: You will be notified of the personal information we collect from you, the purpose of its collection, the third parties we share it with, and the rights you have in connection with the data. This includes this Notice, our Email Policy and Terms and Conditions, our Privacy Policy, disclosures you will receive as part of a loan-related service with us, the Official Rules for any contest we may host, and notices posted on our website at points of data submission.<br />2. Accessing your information: You can request a copy of the personal information that we have collected from you twice during every 12-month period. We will share that information with you after we verify your identity.<br />3. Requests to delete information: You can request that we delete your personal information. However, if the information we have meets one of the exceptions outlined in the CCPA, we will not be able to honor your request. Examples of these exceptions include but are not limited to: information necessary for us to complete your loan transaction, information necessary for us to provide you with a service, information needed to carry on our ongoing relationship with you, if we are required by regulatory authority to retain the personal information, or if the information is needed for any legal or regulatory purpose. You may be required to verify your identity and re-confirm that you want your data deleted (provided it does not fall under any of the exceptions mentioned above) in order for us to complete your request.<br />4. Opting out of sale of information: We do not sell your personal information. As such, there is no financial incentive for encouraging you to opt in for sale of such information.<br />5. Non-Discrimination: We will not discriminate against you if you exercise any of the rights granted to you by the CCPA. This means that we will not deny goods or services to you; charge different prices or rates for goods or services, including through the use of discounts or other benefits or by imposing penalties; provide a different level or quality of goods or services to you; or suggest that you will receive a different price or rate for goods or services or a different level or quality of goods or services.<br /><br />EXERCISING YOUR RIGHTS UNDER THE CCPA<br /><br />Contacting Us<br />You can contact a customer service representative at 1-800-953-6337 to make a request pursuant to the CCPA. Alternatively, you can send us an email at CCPArequests@phmc.com. You may also submit a request through our website on the Contact Us page.<br /><br />How we verify your identity<br />If you are contacting us to exercise your rights, we will ask for information to verify your identity. We will proceed with your request only if your identity is verified uniquely based on the answer you have provided. In the event that we cannot do so, we will contact you for further information.<br />If you have contacted us to exercise your rights via email or through our website, we request that you provide the following details for verification:<br />1.) First name and last name;<br />2.) The email address that you used to do business with us (if any);<br />3.) Telephone number<br />4.) Date of birth<br />5.) Address of current residence (including city, state, and zip code)<br /><br />Based on the information you provide, we will identify you and proceed with your request, if appropriate. If we cannot identify you uniquely, we will contact you for further information. If you’d prefer that we contact you in a certain manner, please let us know in your request.<br /><br />If you would like to have an authorized agent speak with us, please have that agent contact us. We will require proof that the agent is authorized by you to speak with us prior to disclosing any personal information. In the event that we are unable to confirm that the agent has your permission, we may deny a request from that agent, and require that you contact us directly.<br /><br />Please note that we do not collect information for individuals under 16 years old and will not be able to entertain a request from such an individual.<br /><br />Questions and Request for Assistance<br />If you have any questions about this Notice, or for assistance with accessibility to consumers with disabilities, please contact us at CCPArequests@phmc.com or by calling our Customer Service at 1-800-953-6337. You can also contact us at the following address:<br /><br />Platinum Home Mortgage Corporation<br />Attn: Legal Department<br />2200 Hicks Road, Suite 101<br />Rolling Meadows, IL 60008<br /></Text>
        </Box>
        <Footer></Footer>
      </Box>
    );
  }
}

Ccpa.propTypes = {

}

Ccpa.defaultProps = {

}


export default Ccpa;
          