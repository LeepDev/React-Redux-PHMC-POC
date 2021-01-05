import React from 'react';
import { useForm } from "react-hook-form";
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Progress, Grid, Box, Stack, RadioGroup,
     Radio, GridItem, Form, Field, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react'
     
import { Text, View, TextInput, Alert } from 'react-native';

function BuyTest3(props) {
        const { register, watch, control } = useForm();
        const test = watch("test");
        const { prev, next } = props;

        function validateName(value) {
            let error
            if (!value) {
              error = "Name is required"
            } else if (value.toLowerCase() !== "naruto") {
              error = "Jeez! You're not a fan 😱"
            }
            return error
          }
        

        return (
                <form className="formClass">
                    <Grid
                    templateRows="repeat(4, 1fr)"
                    gap={4}>

                        {/* First Section */}
                        <GridItem rowStart={1} rowSpan={1}>
                        <Formik
                        initialValues={{ name: "Sasuke" }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form>
                            <Field name="name" validate={validateName}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="name">First name</FormLabel>
                                    <Input {...field} id="name" placeholder="name" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                colorScheme="teal"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                            </Form>
                        )}
                        </Formik>
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
                                    <Button onClick={next}>Next</Button>   
                                </GridItem>
                            </Grid>               
                        </GridItem>
                        
                    </Grid>
                </form>
            
        );
}

export default BuyTest3