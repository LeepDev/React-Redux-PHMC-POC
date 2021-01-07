import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
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

    const radioGoup1 = [
        {"name":"research",             "text":"I'm just researching"},
        {"name":"openHouse",            "text":"I'm going to open houses"},
        {"name":"offers",               "text":"I'm making offers"},
        {"name":"purchaseContract",     "text":"I have signed a purchase contract" }
    ]
    
    const radioGoup2 = [
        {"name":"preApproval",         "text":"Get a Pre-approval Letter"},
        {"name":"affordability",       "text":"See how much I can afford"},
        {"name":"homeCost",            "text":"Estimate a home's cost"},
        {"name":"realEstateAgent",     "text":"Find a real estate agent" }
    ]

    const radioGoup3 = [
        {"name":"0-3mo",       "text":"0-3 months"},
        {"name":"3-6mo",       "text":"3-6 months"},
        {"name":"6+mo",        "text":"6+ months"},
        {"name":"notSure",     "text":"Not sure" }
    ]

    const radioGoup4 = [
        {"name":"primary",       "text":"Primary Residence"},
        {"name":"second",       "text":"Second Home"},
        {"name":"investment",        "text":"Investment"}
    ]

    const outlineColor = "rgba(54, 84, 124, 1)"

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30
    };

    function RadioBtn({ name, text, onClick }) {
        return (
            <MotionBox className="radioClass" onClick={onClick}
            whileHover={{ 
                background: 'white',
                borderRadius: "5px",
                color: 'blueviolet'
             }} 
            whileTap={{ scale: 0.98 }}
            className="radioClass">
                <Radio p={2} value={name}>
                        {text}
                </Radio>            
            </MotionBox>
        );
    }
    
    function BuyTest1(props) {
        const { next } = props;
        const [ selected, setSelected ]  = useState("zero");
        const [ selected2, setSelected2 ]  = useState("zero");
        const [ selected3, setSelected3 ]  = useState("zero");

        return (
                <form className="formClass">
                    <Grid
                    templateRows="repeat(4, 1fr)"
                    gap={15}>

                        {/* First Section */}
                        <GridItem rowStart={1} rowSpan={1}>
                            <MotionBox animate={{ y: 10 }} transition={{ duration: 0.5, times: [0, 1], delay: .25}}>                        
                                <RadioGroup defaultValue="zero" value={selected}>
                                    <Text fontSize="3xl">Where in the process are you?</Text>
                                    <Stack direction="column" align="left" >
                                        {radioGoup1.map(({name, text}) =>
                                            <RadioBtn 
                                                name={name}
                                                text={text}
                                                onClick={() => {setSelected(name)}}
                                            ></RadioBtn>
                                        )}
                                    </Stack>
                                </RadioGroup>
                            </MotionBox>
                        </GridItem>

                        {/* Second Section */}
                        {(selected === "research" || selected === "openHouse" || selected === "offers") && (
                            <GridItem rowStart={2} rowSpan={3}>
                                
                            
                            <MotionBox animate={{ y: 10 }} transition={{ duration: 0.5, times: [0, 1]}}>   
                                    <Stack>
                                        {/* first group */}
                                            {/* <RadioGroup defaultValue="zero">
                                                <Text fontSize="3xl">You're in the right spot. How can we help?</Text>
                                                <Stack direction="column">
                                                    {radioGoup2.map(({name, text}) =>
                                                        <RadioBtn 
                                                            name={name}
                                                            text={text}
                                                        ></RadioBtn>
                                                    )}
                                                </Stack>
                                            </RadioGroup>     */}
                                        
                                        {/* second group */}
                                            <RadioGroup defaultValue="zero" value={selected2}>
                                                <Text fontSize="3xl">Where in the process are you?</Text>
                                                <Stack direction="column">
                                                    
                                                    {radioGoup3.map(({name, text}) =>
                                                        <RadioBtn 
                                                            name={name}
                                                            text={text}
                                                            onClick={() => {setSelected2(name)}}
                                                        ></RadioBtn>
                                                    )}
                                                </Stack>
                                            </RadioGroup>                        

                                        {/* third group */}
                                        
                                        <RadioGroup defaultValue="zero" value={selected3}>
                                                <Text fontSize="3xl">What kind of investment will it be?</Text>
                                                <Stack direction="column">
                                                    
                                                    {radioGoup4.map(({name, text}) =>
                                                            <RadioBtn 
                                                                name={name}
                                                                text={text}
                                                                onClick={() => {setSelected3(name)}}
                                                            ></RadioBtn>
                                                    )}
                                                </Stack>
                                            </RadioGroup>          
                                        {/* <Stack>
                                            <Text fontSize="3xl">Where are you looking?</Text>
                                            <Input></Input>                        
                                        </Stack> */}

                                        {/* Next Button */}
                                        <Button onClick={next}>Next</Button>
                                    </Stack>
                                </MotionBox>
                            </GridItem>
                        )}

                        {/* Third Section */}
                        {selected === "purchaseContract" && (
                            <MotionBox animate={{ y: 10 }} transition={{ duration: 0.5, times: [0, 1]}}>   
                            <Stack>
                                <Stack>
                                    <Text fontSize="3xl">Where did you buy?</Text>
                                    <Input bg="white" textColor="black"></Input>                        
                                </Stack>

                                <Button onClick={next}>Next</Button>                  
                            </Stack>
                            </MotionBox>
                            
                        )}
                    </Grid>
                </form>
            
        );
}

export default BuyTest1