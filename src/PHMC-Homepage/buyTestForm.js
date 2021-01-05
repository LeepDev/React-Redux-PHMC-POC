import React from "react";

import BuyTest1 from "./buyTestStep1";
import BuyTest2 from "./buyTestStep2";
import BuyTest3 from "./buyTestStep3";

class BuyForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
        currentStep: 1,
        lastStep: 7,
        //set all formFields here
    };

    this.handleChange = this.handleChange.bind(this)
}

next() {
  const { currentStep } = this.state;
  this.setState({
    currentStep: currentStep + 1
  })
}
  
prev() {
  const { currentStep } = this.state;
  this.setState({
    currentStep: currentStep - 1
  })
}

handleChange(event) {
  const {name, value} = event.target
  this.setState({
    [name]: value
  })    
}

// Trigger an alert on form submission
handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
  }

  render() {
    const {currentStep} = this.state;

    switch(currentStep) {
      case 1:
        return (
          <BuyTest1 handleChange={this.handleChange} next={this.next} />
        )
      case 3:
        return (
          <BuyTest3 handleChange={this.handleChange} next={this.next} prev={this.prev} />
        )
      case 2:
        return (
          <BuyTest2 handleChange={this.handleChange} prev={this.prev} submit={this.handleSubmit} />
        )
    }
  }
}

export default BuyForm;
