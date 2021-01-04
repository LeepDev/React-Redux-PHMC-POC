
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer2 from './Footer2';
import "./css/contact.css";


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
        <div data-layer="dd354256-3ba7-4017-8459-17d06a9862da" className="contact">
          <container className="contact">
          <div data-layer="c8889a80-696d-4845-816d-bf9e850461a7" className="rectangle4"></div>
          <div data-layer="f5f9a899-2a7f-4cfb-bfd0-afcb3c20dc87" className="rectangle3"></div>
          <Header></Header>
            
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="First Name" className="firstNameInput"/>
    <Form.Control type="text" placeholder="Last Name" className="LastNameInput"/>
    <Form.Control type="email" placeholder="Email Address" className="emailAddressInput"/>
    <Form.Control type="tel" placeholder="Phone Number" className="phoneNumberInput"/>
    <Form.Control type="text" placeholder="Question/Comments" className="questionInput"/>
  </Form.Group>
</Form>
<Button className="send">Send</Button>

<Button className="call">call</Button>
<Button className="email">email</Button>
<Button className="chat">chat</Button>
          <Footer2></Footer2>
          <div data-layer="3ef1ad91-80d3-470a-bd1e-86f47a4278f2" className="contactUs">Contact Us</div>
          </container>
</div>


    );
  }
}

export default Contact;
          