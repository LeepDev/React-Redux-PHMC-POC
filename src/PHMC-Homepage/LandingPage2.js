import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Header from './CHeader';
import Footer from './Footer2';
import { Link } from 'react-router-dom';
import Calcualtor from './MortgageCalculator'

import "./css/home2.css";
import 'universal-parallax/dist/universal-parallax.min.js';
import { Container } from 'react-bootstrap';


class LandingPage extends React.Component {
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
		    <div className="homeTitle1"> <span className="h2Bold">Freedom</span> <span className="h2Normal"> to choose the </span> <span className="h2Bold">Home</span> <span className="h2Normal"> you love</span><br/> <span className="h2Normal">with a lender who </span><span className="h2Bold">Cares</span></div>
            </div>
            <div className="flexWrapAround">
            <Link to="/buy" className="noUnderline"><Button className="buy">Buy</Button></Link>
            <Link to="/refi" className="noUnderline"><Button className="refinance">Refi</Button></Link>
            </div>
		</div>
            
        <div className="parallax__container">
            <div className="opacityBackgroundOne"></div>
		    <div className="parallax bg1"></div>
        </div>
	    </section>

        {/* Section who we are */}
        <section className="container container--small">
        <div className="whoHeader">Who We Are</div>
		<div className="content2">

            <div className="flexWrapRight"><div>
            <div className="h2Title"><span className="h2Normal">We are </span><span className="h2Bold">Not</span><span className="h2Normal"> just another </span><span className="h2Bold">Lender</span></div>
            <div className="p2Top">Here at Platinum Home Mortgage, we are in the business of helping people. Our belief is that your home is where love and security comes from. We strive to get every person into their own home.  Talk to our amazing team today to see what they can do for you.</div>
            </div></div>
            <div>
            <div className="flexWrapEven"><div>
            <div className="h3Title"><span className="h2Normal">What makes us </span><span className="h2Bold">Different</span></div>
            <div className="p2Bottom">Working with a direct lender, like Platinum, can help you achieve your homeownership goals in a much smoother, simpler process</div>
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
		<div className="content2">
        <div className="flexWrapLeft"><div>
        <div className="quickLookAtYourMonthlyPayments">Quick look at your monthly payments</div>
        <Calcualtor></Calcualtor>
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

<section className="container container--big">
<div className="blogHeader">A fresh look at your home</div>
    <div className="content2">
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
        
{/* Section WHAT PEOPLE are saying */}

<section className="container container--big">
<div className="reviewHeader">What people are saying</div>
<div className="content2">
<div className="flexWrapLeft"><div>

<div className="reviewBubble">
    <div className="reviewText">Andy went over and above to make sure that we had the best possible experience with our mortgage. From the moment we started working with him he was in constant contact-ensuring that we had the best rate and answering any and all questions we could throw his way. From start to finish our experience was outstanding! You won’t find a better lender! <br /><br />  — mandaraper3</div>
    <div className="reviewSelector">            
<svg preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse15"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
<svg preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse15"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
<svg preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse17"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
<svg preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse15"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
<svg preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse15"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
</div>
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
            <Link to="/buy" className="noUnderline"><Button className="footerButton">I'm buying</Button></Link>
            <Link to="/refi" className="noUnderline"><Button className="footerButton">I'm refinancing</Button></Link>
            </div>
		</div>
        <div className="parallax__container">
        <div className=" bg6"></div>
</div>
</section>
        
        <Footer></Footer> 
</div>
    );
  }
}


export default LandingPage;
          