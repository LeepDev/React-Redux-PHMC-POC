import React from "react";

import BuyStep1 from "./buyStep1";
import BuyStep2 from "./buyStep2";
import BuyStep3 from "./buyStep3";
import BuyStep4 from "./buyStep4";
import BuyStep5 from "./buyStep5";
import BuyStep6 from "./buyStep6";
import BuyStep7 from "./buyStep7";

class BuyForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
        currentStep: 1,
        lastStep: 7,
        finishStep: -99
        //set all formFields here
    };

    this.handleChange = this.handleChange.bind(this)
}

// componentWillMount(){
//   localStorage.getItem('currentStep') && this.setState({
//     currentStep: JSON.parse(localStorage.getItem('currentStep'))
//   })
// }

// componentWillUpdate(nextProps, nextState){
//   localStorage.setItem('currentStep', JSON.stringify(nextState.currentStep));
// }

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
          <BuyStep1 handleChange={this.handleChange} next={this.next} />
        )
      case 2:
        return (
          <BuyStep2 handleChange={this.handleChange} next={this.next} prev={this.prev}/>
        )
      case 3:
        return (
          <BuyStep3 handleChange={this.handleChange} next={this.next} prev={this.prev} />
          )
      case 4:
        return (
          <BuyStep4 handleChange={this.handleChange} next={this.next} prev={this.prev} />
          )
      case 5:
        return (
          <BuyStep5 handleChange={this.handleChange} next={this.next} prev={this.prev} />
          )
      case 6:
        return (
          <BuyStep6 handleChange={this.handleChange} next={this.next} prev={this.prev} />
          )
      case 7:
        return (
          <BuyStep7 handleChange={this.handleChange} prev={this.prev} submit={this.handleSubmit} />
          )
    }
  }
}

export default BuyForm;
