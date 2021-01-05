import React from 'react';
import { useForm, Controller } from "react-hook-form";

import { Progress, Grid, Box, Stack, RadioGroup,
     Radio, GridItem, Text, Button, Input, Form } from '@chakra-ui/react'


function BuyTest2(props) {
        const { register, watch, control } = useForm();
        const test = watch("test");
        const { prev, submit } = props;

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
                            <RadioGroup defaultValue="zero" onChange={onChange}>
                                <Text fontSize="3xl">Where are you refinancing?</Text>
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
                            <GridItem rowStart={2} rowSpan={3}>
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

                                    {/* Prev/Submit Buttons */}
                                    <Grid
                                        templateRows="repeat(1, 1fr)"
                                        templateColumns="repeat(2, 1fr)"
                                        gap={1}>
                                        <GridItem colStart={1}>
                                            <Button onClick={prev}>Prev</Button>    
                                        </GridItem>
                                        
                                        <GridItem colStart={2}>
                                            <Button onClick={submit}>Submit</Button>   
                                        </GridItem>
                                    </Grid>
                                </Stack>
                            </GridItem>
                        )}

                        {/* Third Section */}
                        {test === "purchaseContract" && (
                            <GridItem rowStart={2} rowSpan={1}>
                                <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(1, 1fr)"
                                gap={4}>
                                    {/* first group */}
                                    <GridItem rowStart={1}>
                                        <Text fontSize="3xl">Where did you buy?</Text>
                                        <Input></Input>                        
                                    </GridItem>     
                                    {/* Prev/Submit Buttons */}
                                    <GridItem rowStart={2}>
                                        <Grid
                                            templateRows="repeat(1, 1fr)"
                                            templateColumns="repeat(2, 1fr)"
                                            gap={1}>
                                            <GridItem colStart={1}>
                                                <Button onClick={prev}>Prev</Button>    
                                            </GridItem>
                                            
                                            <GridItem colStart={2}>
                                                <Button onClick={submit}>Submit</Button>   
                                            </GridItem>
                                        </Grid>               
                                    </GridItem>
                                </Grid>                        
                            </GridItem>
                        )}
                    </Grid>
                </form>
            
        );
}

export default BuyTest2