import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './CHeader';
import Footer from './Footer2';
import { Link } from 'react-router-dom';

import "./css/home2.css";
import 'universal-parallax/dist/universal-parallax.min.js';

class buyLandingPage extends React.Component {
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
		    <div className="homeTitle1"> <span className="h2Bold">Found</span> <span className="h2Normal"> the perfect </span> <span className="h2Bold">Home</span> <br/> <span className="h2Normal">Together we can make it </span><span className="h2Bold">happen</span></div>
            </div>
            <div className="flexWrapAround">
            <Button className="startNow">Start Now</Button>
            </div>
		</div>
            
        <div className="parallax__container">
            <div className="opacityBackgroundOne"></div>
		    <div className="parallax buyBG1"></div>
        </div>
	    </section>

         {/* educate section */}

        <section className="container container--big">
        <div className="calculatorHeader">Tips for buying a new home</div>
		<div className="content2">

            <div className="flexWrapEven"><div>
            <details className="buyDetails"><summary className="buysummary">Location, location, location!</summary>Supply and demand are two factors that will always play a role in real estate appreciation. Housing supply in great locations is limited to the number of homes in that location. Location creates desirability, desirability creates demand, and demand raises real estate prices</details>
            <details className="buyDetails"><summary className="buysummary">What do you want in your new home?</summary>Millennials are buying homes later in life than previous generations and are doing away with many of the traditional home elements their parents desired. Trends among millennials include a desire for multifunctional and community spaces, and homes with modern, sustainable elements</details>
            <details className="buyDetails"><summary className="buysummary">How long will you live there?</summary>The longer you keep them, the more valuable they get. In real estate, this calls to mind the five-year rule, which states that new homeowners should generally stay put for at least five years before selling their property or risk losing money</details>
            <details className="buyDetails"><summary className="buysummary">How much monthly payment do you qualify for?</summary>Your mortgage payment should not be more than 25% of your take-home pay ... for a much larger loan than what 25% of your take-home pay would give you.</details>
            <details className="buyDetails"><summary className="buysummary">What kind of monthly payment do you believe you can actually afford?</summary>If you earn $5,000 a month, that means your monthly house payment should be no more than $1,250. ... On average, closing costs are about 4% of the purchase price of your home</details>
            <details className="buyDetails"><summary className="buysummary">Do you have a down payment saved?</summary>You're perceived as a higher risk by the lender, so you'll likely pay a higher interest rate on your loan. With “risk-based pricing,” lenders charge higher mortgage rates to borrowers with lower credit scores and meager or no down payments</details>
            <details className="buyDetails"><summary className="buysummary">How much do you need for a down payment?</summary>Avoid PMI. You'll need to put 20% down if you want to avoid buying private mortgage insurance (PMI)</details>
            <details className="buyDetails"><summary className="buysummary">Does your community offer payment assistance programs and are you eligible?</summary>The HOMEownership Down Payment and Closing Cost Assistance program (DPA) provides flexible gap financing for first-time homebuyers at or below 80 percent of the area median income. The DPA, which is available in only certain, specified areas, comes in the form of a grant.</details>
            <details className="buyDetails"><summary className="buysummary">What are all your options for a new mortgage?</summary>Conventional mortgages. A conventional mortgage is a home loan that's not insured by the federal government. Jumbo mortgages. Government-insured mortgages. Fixed-rate mortgages. Adjustable-rate mortgages.</details>
            <details className="buyDetails"><summary className="buysummary">Getting preapproved for a mortgage.</summary>Although mortgage underwriters do look at a variety of different information when determining loan qualifications, it ultimately comes down to four things: credit, equity, income and assets.</details>

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

<section className="container container--custom">
<div className="whoHeader">Learn more</div>
<div className="content2">
<div className="flexWrapLeft"><div>
<div className="infographic1"></div>
<div className="infographic2"></div>
<div className="infographic3"></div>
<div className="infographic4"></div>
<div>
</div>


</div></div>

</div>

<div className="parallax__container">
<div className="opacityBackgroundOne"></div>
        <div className="parallax bg5"></div>
            
</div>
</section>

{/* bottom */}
<section className="container container--small">
<div className="content2">
            <div className="flexWrapCenter">
		    <div className="footerTitle1"> <span className="h2Bold">Found the perfect home, or in the home you love</span><br/> <span className="h2Small"> let us help you finance it. Get started now </span> </div>
            </div>
            <div className="flexWrapAround">
            <Link to="/buyTest" className="noUnderline"><Button className="footerButton">I'm buying</Button></Link>
            <Link to="/refiTest" className="noUnderline"><Button className="footerButton">I'm refinancing</Button></Link>
            </div>
		</div>
        
    <div className="parallax__container">
        <div className=" bg7"></div>
    </div>
</section>
        
        <Footer></Footer> 
</div>
    );
  }
}


export default buyLandingPage;
          