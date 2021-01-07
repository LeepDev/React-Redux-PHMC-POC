import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './CHeader2';
import Footer from './CFooter2';
import { Link } from 'react-router-dom';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./css/landingPage.css";

function LandingPage(props) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 250, 500], [0, 0, 50]);
  const y2 = useTransform(scrollY, [500, 1000, 3000, 3500, 3800], [500, 100, 1700, 1600, 1000]);
  const y3 = useTransform(scrollY, [4000, 4300, 4500, 6000], [2500, 2150, 2300, 3700]);
  const y4 = useTransform(scrollY, [7500, 8000, 11500, 12000], [5000, 4800, 7500, 7400]);
  const y5 = useTransform(scrollY, [13000, 13300, 17500], [9700, 9500, 13000]);
  const y6 = useTransform(scrollY, [500, 1000], [0, 0]);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

    return (
        <div className="web19201">
                  <Header></Header>

        {/* Section home */}
        <motion.div className="homeSection" 
        style={{ y: y1, x: 0 }}  >
        <div className="homebackgroundOne"></div>
        <div className="opacityBackgroundOne"></div>
        <div className="freedomToChooseTheHomeYouLove"><span className="h2Bold">Freedom</span><span className="h2Normal"> to choose the </span><span className="h2Bold">Home</span><span className="h2Normal"> you love</span></div>
        <div className="withALenderWhoCares"><span className="h2Normal">with a lender who </span><span className="h2Bold">Cares</span></div>
        <Link to="/buy"><Button className="buy">Buy</Button></Link>
        <Link to="/refi"><Button className="refinance">Refi</Button></Link>
        </motion.div>

        {/* Section who we are */}
        <motion.div className="aboutUsSection" 
        style={{ y: y2, x: 0 }} >
        <div className="homebackgroundTwo"></div>
        <div className="opacityBackgroundTwo"></div>
        <div className="whoHeader">Who We Are</div>
        <div className="h2Title"><span className="h2Normal">We are </span><span className="h2Bold">Not</span><span className="h2Normal"> just another </span><span className="h2Bold">Lender</span></div>
        <div className="p2Top">Here at Platinum Home Mortgage, we are in the business of helping people. Our belief is that your home is where love and security comes from. We strive to get every person into their own home.  Talk to our amazing team today to see what they can do for you.</div>
        <svg preserveAspectRatio="none" viewBox="0 -1.5 1591 3" className="line10"><path d="M 0 0 L 1591 0"  /></svg>
        <div className="h3Title"><span className="h2Normal">What makes us </span><span className="h2Bold">Different</span></div>
        <div className="p2Bottom">Working with a direct lender, like Platinum, can help you achieve your homeownership goals in a much smoother, simpler process</div>
        <Button className="startNow">Start Now</Button>
        </motion.div>

        {/* Section monthly payment */}
        <motion.div className="calculatorSection"
        style={{ y: y3, x: 0 }}  >
        <div data-layer="7b1a967c-f8eb-41e3-a183-1d00ab4e630a" className="homebackgroundThree"></div>
        <div data-layer="ec5bc445-350b-46b5-b4df-238fd0868695" className="opacityBackgroundThree"></div>
        <div className="calculatorHeader">Monthly Payments Made Easy</div>
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
        <div className="">
        <div className="getAPreapproaval">Get a Preapproaval</div>
        <div className="preapprovalText">A preapproval can give you the exact amount you can afford at no obligation or cost to you.</div>
        <Button className="startNow2">Start Now</Button>
        </div>
        </motion.div>

        {/* Section fresh look at your home */}
        <motion.div className="blogSection"
        style={{ y: y4, x: 0 }} >
        <div data-layer="7c4b1248-f8d6-467d-a449-f1f8e1716956" className="homebackgroundFour"></div>
        <div data-layer="008d7c41-0aa6-4683-8a28-3f047c3df5be" className="opacityBackgroundFour"></div>
        <div className="blogHeader">A fresh look at your home</div>
        <Button className="ceo">From CEO</Button>
        <Button className="holiday">Holidays</Button>
        <Button className="market">Market</Button>
        <Button className="realEstate">Real Estate</Button>
        <Button className="resources">Resources</Button>
        <Button className="spotLight">Spotlight</Button>
        <Button className="technology">Technology</Button>

        <div className="rectangle103"></div>
        <div className="rectangle106"></div>
        <div className="rectangle105"></div>
        <div className="rectangle102"></div>
        <div className="rectangle104"></div>
        <div className="rectangle101"></div>

        <div className="blogTitle1">Common Mortgage Terms Explained</div>
        <div className="blogTitle2">The Spring Market has Sprung</div>
        <div className="blogTitle3">The Roaring 20’s Money Machine</div>
        <div className="blogProfile1"></div>
        <div className="blogProfile2"></div>
        <div className="blogProfile3"></div>
        <div className="authorDate1">Author<br />April 19, 2019</div>
        <div className="authorDate2">Author<br />April 24, 2018</div>
        <div className="authorDate3">Author<br />January 10, 2020</div>
        <div className="blogtext1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
        <div className="blogtext2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
        <div className="blogtext3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</div>
        </motion.div>
{/* Section WHAT PEOPLE are saying */}
        <motion.div className="reviewSection"
        style={{ y: y5, x: 0 }} >
        <div data-layer="1ed34e77-c88a-4d34-8df2-22fc982ccdb4" className="homebackgroundFive"></div>
        <div data-layer="ffa322ed-cc8c-4119-acdc-7a7ee16b702e" className="opacityBackgroundFive"></div>
        <div className="reviewHeader">What people are saying</div>
        <div  className="h4Title"><span className="h2Normal">Found the </span><span className="h2Bold">Perfect</span><span className="h2Normal"> home <br />or in the home you </span><span className="h2Bold">Love</span></div>
        <Button className="startNow3">Start Now</Button>

        <div data-layer="a21ada3e-7719-4b58-8341-80c65181405d" className="rectangle114"></div>
        <div data-layer="59758957-b4ba-44e8-b2ce-98a6334ff271" className="andyWentOverAndAboveToMakeSureThatWeHadTheBestPossibleExperienceWithOurMortgageFromTheMomentWeStartedWorkingWithHimHeWasInConstantContactEnsuringThatWeHadTheBestRateAndAnsweringAnyAndAllQuestionsWeCouldThrowH">Andy went over and above to make sure that we had the best possible experience with our mortgage. From the moment we started working with him he was in constant contact-ensuring that we had the best rate and answering any and all questions we could throw his way. From start to finish our experience was outstanding! You won’t find a better lender! <br />                                                                      <br />  — mandaraper3</div>
        <div data-layer="c04ea8ec-ec16-4925-ad60-408a515bc279" className="group6">            <svg data-layer="c3ebe12c-d62e-438b-9016-fbe17051893f" preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse15"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
            <svg data-layer="7d7fe09a-400e-406b-89e0-f41a5e92473a" preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse16"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
            <svg data-layer="e0743d37-ec41-46b9-900e-76f731bf6f3f" preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse17"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
            <svg data-layer="a69921c3-def7-41c1-94e8-0cf6412ddbe7" preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" className="ellipse18"><path d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></svg>
            <svg data-layer="bcc5a91e-9a7e-4c4b-a5c6-cbbd3647b5b1" preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 18.5" className="ellipse19"><path d="M 9 0 C 13.97056198120117 0 18 3.805579662322998 18 8.5 C 18 13.19441986083984 13.97056198120117 17 9 17 C 4.02943754196167 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 4.02943754196167 0 9 0 Z"  /></svg>
        </div>
        </motion.div>
        
        <Footer></Footer> 
</div>
    );
  }


export default LandingPage;
          