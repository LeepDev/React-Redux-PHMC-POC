
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
         
          <div data-layer="2914dea1-aea2-42ed-bad9-5c8db4afe1b3" className="component72">            
            <svg data-layer="5d47f446-ff10-4edc-b496-7d2852be3655" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path10308d08f"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <Button><div data-layer="6f6c395e-91a0-44bd-ac3e-f009ec042425" className="send">Send</div></Button>
          </div>

<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="First Name" className="firstNameInput"/>
    <Form.Control type="text" placeholder="Last Name" className="LastNameInput"/>
    <Form.Control type="email" placeholder="Email Address" className="emailAddressInput"/>
    <Form.Control type="tel" placeholder="Phone Number" className="phoneNumberInput"/>
    <Form.Control type="text" placeholder="Question/Comments" className="questionInput"/>
  </Form.Group>
</Form>

          <svg data-layer="34faea32-bb78-4dc4-a3c3-83c826a14707" preserveAspectRatio="none" viewBox="0 -1.5 1591 3" className="line13ed2b8ef"><path d="M 0 0 L 1591 0"  /></svg>
          <div data-layer="1bf11729-337d-40be-9cbd-6b23270ec5fa" className="component68">            
            <svg data-layer="7672b356-0b23-4064-8fb3-660a31bf2703" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1fcce4837"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="9c38e6b9-aa7c-4c21-9739-23bdd28a9689" className="call">Call</div>
          </div>
          <div data-layer="87626ca1-ce2f-4d84-99ab-a8cf71104c33" className="component69">
            <svg data-layer="61a635c3-443c-4a5b-8d98-92cb3e0b9dbe" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1e86d0275"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="3e744a05-7f69-4ce3-9c7b-b52bbff3422c" className="email">Email</div>
          </div>
          <div data-layer="ca4137aa-7d55-4157-8d74-896fbc2f08c5" className="component610">            
            <svg data-layer="562c2af8-1de2-4984-b3dc-52eb85b09102" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="08ca67c8-919e-43f7-afc3-75690022fc91" className="chat">Chat</div>
          </div>
          <Footer2></Footer2>
          <div data-layer="3ef1ad91-80d3-470a-bd1e-86f47a4278f2" className="contactUs">Contact Us</div>
          </container>
</div>


    );
  }
}

export default Contact;
          