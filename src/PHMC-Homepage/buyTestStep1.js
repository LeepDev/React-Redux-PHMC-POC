import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Header from './Header';
import Footer2 from './Footer2';

import { Progress, Grid, Box, Stack, RadioGroup,
     Radio, GridItem, Text } from '@chakra-ui/react'


// function RadioCard(props) {
//     const { getInputProps, getCheckboxProps } = useRadio(props)
  
//     const input = getInputProps()
//     const checkbox = getCheckboxProps()
  
//     return (
//       <Box as="label">
//         <input {...input} />
//         <Box
//           {...checkbox}
//           cursor="pointer"
//           borderWidth="1px"
//           borderRadius="md"
//           boxShadow="md"
//           _checked={{
//             bg: "teal.600",
//             color: "white",
//             borderColor: "teal.600",
//           }}
//           _focus={{
//             boxShadow: "outline",
//           }}
//           px={5}
//           py={3}
//         >
//           {props.children}
//         </Box>
//       </Box>
//     )
//   }

function BuyTest1(props) {
        const { register, watch, control } = useForm();
        const test = watch("test");
        const { next } = props;

        return (
                <form>
                    <Grid
                    templateRows="repeat(4, 1fr)"
                    gap={4}>

                        {/* First Section */}
                        <GridItem rowStart={2} rowSpan={1}>
                        <Controller
                        control={control}
                        name="test"
                        render={(
                            { onChange }
                        ) => (
                            <RadioGroup defaultValue="zero" onChange={onChange}>
                                <Text fontSize="3xl">Where in the process are you?</Text>
                                <Stack direction="column">
                                    <Radio value="research">I'm just researching</Radio>
                                    <Radio value="openHouse">I'm going to open houses</Radio>
                                    <Radio value="offers">I'm making offers</Radio>
                                    <Radio value="purchaseContract">I have signed a purchase contract</Radio>
                                </Stack>
                            </RadioGroup>
                            )} 
                            />
                        </GridItem>

                        {/* Second Section */}
                        {(test === "research" || test === "openHouse" || test === "offers") && (
                            <GridItem rowStart={3} rowSpan={4}>
                                <Grid
                                templateRows="repeat(4, 1fr)"
                                templateColumns="repeat(1, 1fr)"
                                gap={4}>
                                    {/* first group */}
                                    <GridItem rowStart={1}>
                                        <RadioGroup defaultValue="zero">
                                            <Text fontSize="3xl">You're in the right spot. How can we help?</Text>
                                            <Stack direction="column">
                                                <Radio value="preApproval">Get a Pre-approval Letter</Radio>
                                                <Radio value="affordability">See how much I can afford</Radio>
                                                <Radio value="homeCost">Estimate a home's cost</Radio>
                                                <Radio value="realEstateAgent">Find a real estate agent</Radio>
                                            </Stack>
                                        </RadioGroup>    
                                    </GridItem>                    
                                    
                                    {/* second group */}
                                    <GridItem rowStart={2}>
                                        <RadioGroup defaultValue="zero">
                                            <Text fontSize="3xl">Where in the process are you?</Text>
                                            <Stack direction="column">
                                                <Radio value="0-3mo">0-3 months</Radio>
                                                <Radio value="3-6mo">3-6 months</Radio>
                                                <Radio value="6+mo">6+ months</Radio>
                                                <Radio value="notSure">Not sure</Radio>
                                            </Stack>
                                        </RadioGroup>                        
                                    </GridItem>

                                    {/* third group */}
                                    <GridItem rowStart={3}>
                                        <Text fontSize="3xl">Where are you looking?</Text>
                                        <input></input>                        
                                    </GridItem>                

                                    {/* Next Button */}
                                    <GridItem rowStart={4}>
                                        <button onClick={next}>Next</button>
                                    </GridItem>     
                                </Grid>                        
                            </GridItem>
                        )}

                        {/* Third Section */}
                        {test === "purchaseContract" && (
                            <GridItem rowStart={3} rowSpan={1}>
                                <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(1, 1fr)"
                                gap={4}>
                                    {/* first group */}
                                    <GridItem rowStart={1}>
                                        <Text fontSize="3xl">Where did you buy?</Text>
                                        <input></input>                        
                                    </GridItem>     

                                    <GridItem rowStart={2}>
                                        <button onClick={next}>Next</button>                  
                                    </GridItem>     
                                </Grid>                        
                            </GridItem>
                            
                        )}
                    </Grid>
                </form>
            
        );
}

export default BuyTest1