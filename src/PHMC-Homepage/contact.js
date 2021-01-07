import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './CHeader';
import Footer from './CFooter';
import "./css/contact.css";

import { Progress, Image, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'

class Contact extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    
    return (
      
<div>
      <Box backgroundImage="url('/assets/contact/rectangle4.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
      bgSize="cover">        
        <Header></Header>
        <Box backgroundImage="url('/assets/contact/rectangle3.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize="cover"
        pb={120}
        >
          {/* <div className="backgroundLayer"></div>
          <div className="opacityLayer"></div> */}

          <div className="contactUs">Contact Us</div>
  
  <div className="bodyAlign">
  <div className="formAlign">
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="First Name" className="firstNameInput"/>
    <Form.Control type="text" placeholder="Last Name" className="LastNameInput"/>
    <Form.Control type="email" placeholder="Email Address" className="emailAddressInput"/>
    <Form.Control type="tel" placeholder="Phone Number" className="phoneNumberInput"/>
    <textarea rows="4" cols="50" placeholder="Question/Comments" className="questionInput"/>
  </Form.Group>
</Form>
<Button className="send">Send</Button>
</div>
<div className="contactButtonAlign">
<Button className="call">Call</Button>
<Button className="email">Email</Button>
<Button className="chat">Chat</Button>
</div>
</div>
</Box></Box>
        <Footer></Footer> 
    </div>
    );
  }
}

export default Contact;
          