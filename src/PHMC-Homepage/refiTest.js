
import React from "react";
import Header from "./CHeader";
import Footer from "./CFooter";
import RefiForm from "./refiTestForm";
import './css/buyTest.css'

import { Progress, Grid, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'

class Refi extends React.Component {

  render() {    
    return (

          <Box backgroundImage="url('/assets/refi/rectangle156.png')"
            bgPosition="top"
            bgRepeat="no-repeat">
            <Header></Header>
          <Box backgroundImage="url('/assets/refi/rectangle157.png')"
          bgPosition="top"
          bgRepeat="no-repeat">
            <Text width={[.8425, 3/4, 3/4]} className="buyText">Refinance</Text>
            <Grid pt={10} pb={10}
              templateColumns="repeat(3, 1fr)">
              <GridItem colStart={2}>
                <RefiForm></RefiForm>
              </GridItem>
            </Grid>        
          </Box>
          <Footer></Footer>

          </Box>

    );
  }
}


export default Refi;
          