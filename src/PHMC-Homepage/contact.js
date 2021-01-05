
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './CHeader';
import Footer2 from './Footer2';
import "./css/contact.css";
import { Col, Container, Row } from "react-bootstrap";


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
      
<Container>
    <Header></Header>
          <div data-layer="f5f9a899-2a7f-4cfb-bfd0-afcb3c20dc87" className="backgroundLayer"></div>
          <div data-layer="c8889a80-696d-4845-816d-bf9e850461a7" className="opacityLayer"></div>

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
         <Footer2></Footer2>
          </Container>
    );
  }
}

export default Contact;
          