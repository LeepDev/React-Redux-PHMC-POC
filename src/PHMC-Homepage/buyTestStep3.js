import React from 'react';
import { useForm, setState } from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button
  } from "@chakra-ui/react";
  import {withRouter, Redirect} from 'react-router-dom';

function InputForm(onSubmit) {
    const {handleSubmit, errors, register, formState} = useForm();
    
    function validateName(value) {
        if (!value) {
            return "Name is required";
        } else if (value !== "Naruto") {
            return "Jeez! You're not a fan 😱";
        } else return true;
        }

    function thisSubmit(values) {
    return new Promise(resolve => {alert(JSON.stringify(values, null, 2)); resolve();
    });
    }

    return (
        <form onSubmit={()=>{handleSubmit(thisSubmit(values));}}>
            <FormControl isInvalid={errors.firstName}>
                <FormLabel htmlFor="firstName" color="white">First Name</FormLabel>
                <Input
                name="firstName"
                placeholder="First Name"
                bg="white"
                color="black"
                ref={register({ validate: validateName })}
                />
                <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
                Submit
            </Button>
        </form>
        
    );
}

  class BuyStep3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = () => {
        this.setState({redirect: true});
    }


    render() {
        const redirect = this.state.redirect;
        if (redirect) {
            return <Redirect to="/" />
    }

    return (
        <InputForm onSubmit={this.handleSubmit}></InputForm>
    );
}}

export default withRouter(BuyStep3);
