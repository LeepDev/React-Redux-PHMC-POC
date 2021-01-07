
import React from "react";
import Header from './CHeader';
import Footer from './CFooter';
import "./css/locations.css";

import { Progress, Image, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'

class Locations extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
        <div className="locations">
<Box backgroundImage="url('/assets/locations/rectangle4.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
      height="100%"
      bgSize="cover">        
        <Header></Header>
        <Box backgroundImage="url('/assets/locations/rectangle3.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        height="100%"
        bgSize="cover"
        pb={120}
        >        {/* <div data-layer="712ba49b-9510-4cca-b239-5646d5c5f246" className="rectangle4"></div> */}
        {/* <div data-layer="2a6ec6be-6241-4bd3-826b-c82e91147799" className="rectangle3"></div> */}
        {/* <svg data-layer="56e18b2f-d709-4270-8db4-c08811d45c43" preserveAspectRatio="none" viewBox="0 -1.5 1591 3" className="line1ab976f2a"><path d="M 0 0 L 1591 0"  /></svg> */}
        <Text width={[.8425, 3/4, 3/4]} className="buyText">Locations</Text>
        {/* <div data-layer="3594dcba-fd8e-4612-8b4c-cdfd21ecc0da" className="locations481b439c">Locations</div> */}
        <div data-layer="1f754786-f76a-4579-81c0-9437e6353bb0" className="rectangle57"></div>
        <div data-layer="3425a277-3f9a-4eaf-8288-6923b753c8de" className="rectangle75"></div>
        <div data-layer="38094289-8fb8-490b-8095-8d11893c3398" className="enterZipCode">Enter Zip Code</div>
        <div data-layer="a1ebe026-750b-4a58-841e-e2080c7c4647" className="component611">            
        <svg data-layer="b42559ef-c10a-4973-96d5-bfe0b4ad47d8" preserveAspectRatio="none" viewBox="-1.5 -1.5 316.6015625 69" className="path1"><path d="M 0 0 L 313.6015625 0 L 313.6015625 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="20059433-0c8b-49dc-8606-c9ff1fb9edf7" className="findAConsultant">Find a consultant</div>
        </div>
</Box></Box>
<Footer></Footer>
</div>

    );
  }
}

Locations.propTypes = {

}

Locations.defaultProps = {

}


export default Locations;
          