import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { motion, isValidMotionProp } from "framer-motion"

import { Progress, Grid, Box, Stack, RadioGroup,
     Radio, GridItem, Text, Button, Input,
     forwardRef,
     chakra } from '@chakra-ui/react'

    const MotionBox = motion.custom(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <chakra.div ref={ref} {...chakraProps} />
    }),
    )

function BuyTest1(props) {
        const { register, watch, control } = useForm();
        const test = watch("test");
        const { next } = props;

        return (
                <form className="formClass">
                    <Grid
                    templateRows="repeat(4, 1fr)"
                    gap={4}>

                        {/* First Section */}
                        <GridItem rowStart={1} rowSpan={1}>
                        <Controller
                        control={control}
                        name="test"
                        render={(
                            { onChange }
                        ) => (
                            <MotionBox animate={{ opacity: [0,1] }}
                            transition={{ duration: 0.5, times: [0, 1], repeat: 0}}>                        
                                <RadioGroup defaultValue="zero" onChange={onChange}>
                                    <Text fontSize="3xl">Where in the process are you?</Text>
                                    <Stack direction="column" align="left" className="radioClass">
                                        <MotionBox whileHover={{ scale: .98 }} whileTap={{ scale: 0.95 }} >
                                            <Radio value="research">I'm just researching</Radio>
                                        </MotionBox>
                                        <MotionBox whileHover={{ scale: .98 }} whileTap={{ scale: 0.95 }} >
                                            <Radio value="openHouse">I'm going to open houses</Radio>
                                        </MotionBox>
                                        <MotionBox whileHover={{ scale: .98 }} whileTap={{ scale: 0.95 }} >
                                            <Radio value="offers">I'm making offers</Radio>
                                        </MotionBox>
                                        <MotionBox whileHover={{ scale: .98 }} whileTap={{ scale: 0.95 }} >
                                            <Radio value="purchaseContract">I have signed a purchase contract</Radio>
                                        </MotionBox>
                                    </Stack>
                                </RadioGroup>
                            </MotionBox>
                            )} 
                            />
                        </GridItem>

                        {/* Second Section */}
                        {(test === "research" || test === "openHouse" || test === "offers") && (
                            <GridItem rowStart={2} rowSpan={3}>
                                
                            
                            <MotionBox animate={{ opacity: [0,1] }}
                            transition={{ duration: 0.5, times: [0, 1]}}>   
                                    <Stack>
                                        {/* first group */}
                                            <RadioGroup defaultValue="zero">
                                                <Text fontSize="3xl">You're in the right spot. How can we help?</Text>
                                                <Stack direction="column">
                                                    <Radio value="preApproval">Get a Pre-approval Letter</Radio>
                                                    <Radio value="affordability">See how much I can afford</Radio>
                                                    <Radio value="homeCost">Estimate a home's cost</Radio>
                                                    <Radio value="realEstateAgent">Find a real estate agent</Radio>
                                                </Stack>
                                            </RadioGroup>    
                                        
                                        {/* second group */}
                                            <RadioGroup defaultValue="zero">
                                                <Text fontSize="3xl">Where in the process are you?</Text>
                                                <Stack direction="column">
                                                    <Radio value="0-3mo">0-3 months</Radio>
                                                    <Radio value="3-6mo">3-6 months</Radio>
                                                    <Radio value="6+mo">6+ months</Radio>
                                                    <Radio value="notSure">Not sure</Radio>
                                                </Stack>
                                            </RadioGroup>                        

                                        {/* third group */}
                                        <Stack>
                                            <Text fontSize="3xl">Where are you looking?</Text>
                                            <Input></Input>                        
                                        </Stack>

                                        {/* Next Button */}
                                        <Button onClick={next}>Next</Button>
                                    </Stack>
                                </MotionBox>
                            </GridItem>
                        )}

                        {/* Third Section */}
                        {test === "purchaseContract" && (
                            <Stack>
                                <Stack>
                                    <Text fontSize="3xl">Where did you buy?</Text>
                                    <Input></Input>                        
                                </Stack>

                                <Button onClick={next}>Next</Button>                  
                            </Stack>
                            
                        )}
                    </Grid>
                </form>
            
        );
}

export default BuyTest1