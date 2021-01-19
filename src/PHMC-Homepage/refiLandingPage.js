import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './CHeader';
import Footer from './Footer2';

import "./css/home2.css";
import 'universal-parallax/dist/universal-parallax.min.js';

class refiLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
  
        };
    }


    render() {
    
        return (
          
        <div className="web19201">
                  <Header></Header>

        {/* Section home */}
        <section className="container container--full">
		<div className="content2">
            <div className="flexWrapCenter">
		    <div className="homeTitle1"> <span className="h2Normal"> In the home you </span> <span className="h2Bold">Love</span> <br/> <span className="h2Normal">Let's refinance </span><span className="h2Bold">Today!</span></div>
            </div>
            <div className="flexWrapAround">
            <Button className="startNow">Start Now</Button>
            </div>
		</div>
            
        <div className="parallax__container">
            <div className="opacityBackgroundOne"></div>
		    <div className="parallax refiBG1"></div>
        </div>
	    </section>

        {/* educate section */}
        <section className="container container--big">
        <div className="calculatorHeader">When should you refinance?</div>
		<div className="content2 negativeTopSpace">

            <div className="flexWrapEven"><div>
            <details className="buyDetails"><summary className="buysummary">The Fed has artificially cut rates to save all homeowners money</summary> </details>
            <details className="buyDetails"><summary className="buysummary">You want to save thousands of dollars of interest and switch from a 30 year fixed to a 15 year fixed home loan.</summary> </details>
            <details className="buyDetails"><summary className="buysummary">Your current interest rate is higher than rates available today.  </summary> </details>
            <details className="buyDetails"><summary className="buysummary">You have an adjustable rate mortgage and want to switch to a fixed loan and secure these low rates long term.</summary> </details>
            <details className="buyDetails"><summary className="buysummary">You want to take cash out to pay your bills.</summary> </details>
            <details className="buyDetails"><summary className="buysummary">You want to take cash out to fund a major event, such as: college, wedding, baby, car purchase, vacation, etc.</summary> </details>
            <details className="buyDetails"><summary className="buysummary">You would funds to rehab parts of your home. </summary> </details>
            </div></div>
            <div>
            <div className="flexWrapEven"><div>
           
            </div>
            <Button className="startNow">Start Now</Button>
            </div></div>
		</div>
		<div className="parallax__container">
        <div className="opacityBackgroundOne"></div>
        <div className="parallax bg2"></div>
        </div>
	</section>

        {/* Section monthly payment */}

        <section className="container container--big">
        <div className="calculatorHeader">Monthly Payments Made Easy</div>
		<div className="content2 negativeTopSpace">
        <div className="flexWrapLeft"><div>
        <div className="quickLookAtYourMonthlyPayments">Quick look at your monthly payments</div>
        <Form>
            <Form.Group controlId="mortgageCalculator">
                <Form.Control type="number" placeholder="How much do you want to borrow?" className="loanAmount"/>
                <Form.Control type="number" placeholder="What is the interest rate?" className="interestRate"/>
                <Form.Control type="number" placeholder="How many years is the loan? " className="loanTime"/>
                <Button className="calculate">Calculate</Button>
                <Form.Control type="number" placeholder="Estimated monthly payment" className="monthlyPayment"/>
            </Form.Group>
        </Form>
        </div></div>
        <div className="flexWrapEven"><div>
        <div className="getAPreapproaval">Get a Preapproaval</div>
        <div className="preapprovalText">A preapproval can give you the exact amount you can afford at no obligation or cost to you.</div>
        </div>
        <Button className="startNow2">Start Now</Button>
        </div></div>
		<div className="parallax__container">
        <div className="opacityBackgroundOne"></div>
        <div className="parallax bg3"></div>
		    <div></div>
        </div>
	    </section>

        {/* Section fresh look at your home */}

<section className="container container--big " >
<div className="blogHeader">A fresh look at your home</div>
    <div className="content2 negativeTopSpace">
        <div className="flexWrapLeft">
        <Button className="ceo">From CEO</Button>
        <Button className="holiday">Holidays</Button>
        <Button className="market">Market</Button>
        <Button className="realEstate">Real Estate</Button>
        <Button className="resources">Resources</Button>
        <Button className="spotLight">Spotlight</Button>
        <Button className="technology">Technology</Button>
        </div>
        <div className="flexWrapEven">
            <div>
            <div className="rectangle106"></div>
                <div className="rectangle103">
                <div className="blogTitle3">The Roaring 20’s Money Machine</div>
                <div className="blogtext3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
                <div className="flexWrapLeft">
                    <div className="blogProfile3"></div>
                    <div><div className="authorDate3">Author<br />January 10, 2020</div></div>
                </div>
            </div> 
            </div>

            <div>
            <div className="rectangle105"></div>
            <div className="rectangle103"> 
            <div className="blogTitle3">The Spring Market has Sprung</div>
                <div className="blogtext3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
                <div className="flexWrapLeft">
                    <div className="blogProfile2"></div>
                    <div><div className="authorDate3">Author<br />April 24, 2018</div></div>
                </div>
            </div> 
            </div>
            
            <div>
            <div className="rectangle104"></div>
            <div className="rectangle103"><div className="blogTitle3">Common Mortgage Terms Explained</div>
                <div className="blogtext3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
                <div className="flexWrapLeft">
                    <div className="blogProfile1"></div>
                    <div><div className="authorDate3">Author<br />April 19, 2018</div></div>
                </div>
            </div> 
            </div>
        </div>
        </div>
        <div className="parallax__container">
            <div className="opacityBackgroundOne"></div>
            <div className="parallax bg4"></div>
        </div>
    
    </section>      
        
{/* infographics */}

<section className="container container--custom2">
<div className="whoHeader">Learn more</div>
<div className="content2">
<div className="flexWrapLeft"><div>
<div className="infographic5"></div>
<div className="infographic6"></div>
<div className="infographic7"></div>
<div>
</div>


</div></div>
<div className="flexWrapEven"><div>
<div  className="h4Title"><span className="h2Normal">Found the </span><span className="h2Bold">Perfect</span><span className="h2Normal"> home <br />or in the home you </span><span className="h2Bold">Love</span></div>
</div>
<Button className="startNow2">Start Now</Button>
</div>
</div>

<div className="parallax__container">
<div className="opacityBackgroundOne"></div>
        <div className="parallax bg5"></div>
            
</div>
</section>
        
        <Footer></Footer> 
</div>
    );
  }
}


export default refiLandingPage;
          