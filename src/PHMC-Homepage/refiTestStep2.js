import React from 'react';
import { useForm, Controller } from "react-hook-form";

import { Progress, Grid, Box, Stack, RadioGroup,
     Radio, GridItem, Text, Button, Input, Form } from '@chakra-ui/react'


function RefiTest2(props) {
        const { register, watch, control } = useForm();
        const test = watch("test");
        const { prev, submit } = props;

        return (
                <form className="formClass">
                    <Grid
                    templateRows="repeat(4, 1fr)"
                    gap={4}>

                        
                        {/* Third Section */}
                            <GridItem rowStart={1} rowSpan={1}>
                                <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(1, 1fr)"
                                gap={4}>
                                    {/* first group */}
                                    <GridItem rowStart={1}>
                                        <Text fontSize="3xl">What is the address of your refinance?</Text>
                                        <Input mt={5} bg="white" textColor="black" placeholder="Street Address"></Input>                        
                                        <Input mt={5} bg="white" textColor="black" placeholder="Unit/Condo (optional)"></Input>                        
                                        <Input mt={5} bg="white" textColor="black" placeholder="State"></Input>                        
                                        <Input mt={5} bg="white" textColor="black" placeholder="City"></Input>                        
                                        <Input mt={5} mb={5} bg="white" textColor="black" placeholder="Zip Code"></Input>                        
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
                    </Grid>
                </form>
            
        );
}

export default RefiTest2