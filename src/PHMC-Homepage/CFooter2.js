import React from "react";
import { Box, Image, Flex, Text, Stack, Center, Grid, GridItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./css/cfooter.css"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Footer = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
<Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding=".9rem"
      color="white"
      bgColor="rgba(54, 84, 124, 1)"
      position="relative"
      top="18400px"
      {...props}
    >
      <Stack direction="row">
      <Flex align="center">
        <div className="phmcIconWhiteBg"></div>
        <div className="platinumlogohorizontalC"></div>
      </Flex>

      <Grid align="center"
        templateRows="repeat(3, 1fr)">
          <GridItem>
            <Center>
            <Stack direction="row" align="center">
              <Stack direction="row">
                <Link to='/'>Home</Link>
                {/* <Text>|</Text>
                <Text>Blog</Text> */}
                <Text>|</Text>
                <Link to='/contact'>Contact</Link>
                <Text>|</Text>
                <Link to='/locations'>Locations</Link>
                <Text>|</Text>
                <Link to='/careers'>Careers</Link>
                {/* <Text>|</Text>
                <Text>Payment</Text> */}
              </Stack>
                
              <Stack direction="row" pr={90} pl={90}>
                <Image h={6} src="/assets/landingPage/rectangle64.png"></Image>
                <Image h={6} src="/assets/landingPage/rectangle65.png"></Image>
                <Image h={6} src="/assets/landingPage/rectangle66.png"></Image>
              </Stack>

              <Stack direction="row">
                <Link to='/emailPolicy'>Email Policy</Link>
                {/* <Text>|</Text>
                <Text>Privacy Policy</Text>
                <Text>|</Text>
                <Text>Terms of Use</Text> */}
                <Text>|</Text>
                <Link to='/ccpa'>CCPA</Link>
                <Text>|</Text>
                <Link to='/licensing'>Licensing</Link>
              </Stack>
            </Stack>
            </Center>
          </GridItem>
          <GridItem>
            <Center width={[.8425, 3/4, 3/4]} className="lineF"></Center>
          </GridItem>
          <GridItem>
            <Text  width={[.95, 3/4, 3/4]}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
          </GridItem>
      </Grid>
      
      <Center>
        <Image mr={5} h={10} src="/assets/locations/rectangle67.png"></Image>
        <Image mr={5} h={10} src="/assets/locations/rectangle68.png"></Image>
      </Center>
      </Stack>
    </Flex>
    
  );
};

export default Footer;
