import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Calculator = () => {
   return (
       <div>
          <Form>
            <Form.Group controlId="mortgageCalculator">
                <Form.Control type="number" placeholder="How much do you want to borrow?" className="loanAmount"/>
                <Form.Control type="number" placeholder="What is the interest rate?" className="interestRate"/>
                <Form.Control type="number" placeholder="How many years is the loan? " className="loanTime"/>
                <Button className="calculate">Calculate</Button>
                <Form.Control type="number" placeholder="Estimated monthly payment" className="monthlyPayment"/>
            </Form.Group>
        </Form>
       </div>
   )
}

export default Calculator;


    