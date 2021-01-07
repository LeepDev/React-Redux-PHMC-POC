
import React from "react";
import Header from './CHeader';
import Footer from './CFooter';
import "./css/careers.css";

import { Progress, Image, Box, Flex, Stack, RadioGroup,
  Radio, GridItem, Text, Center } from '@chakra-ui/react'

class Careers extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
        <div data-layer="02527852-5a3b-4733-9491-a3022c6b1627" className="careers">
        {/* <div data-layer="ab7f84f3-a9ef-4aa7-81d1-23e7e3459287" className="rectangle4"></div>
        <div data-layer="c38c2f4f-0aaa-4150-b1a8-cc3a446f9aba" className="rectangle3"></div> */}
<Box backgroundImage="url('/assets/careers/rectangle4.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
      height="100%"
      bgSize="cover">        
        <Header></Header>
        <Box backgroundImage="url('/assets/careers/rectangle3.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        height="100%"
        bgSize="cover"
        pb={120}
        >
                  <svg data-layer="916c319d-ac40-4796-8aaf-f24caae78a0b" preserveAspectRatio="none" viewBox="0 -1.5 1591 3" className="line160775fc6"><path d="M 0 0 L 1591 0"  /></svg>
        <div data-layer="da082629-3e5f-4985-adde-941ab1edf2fb" className="careersfade5be8">Careers</div>
        
        <div data-layer="e9ea7169-57a7-4b9f-8fbf-3dcc11c38bf8" className="component73">            <svg data-layer="3c17d91d-dba1-446b-a5ba-4d413e5f657a" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="07ee574a-2ab1-45fc-9924-2ad863f807d8" className="apply">Apply</div>
</div>
        <div data-layer="fe201b3f-9ad2-4f70-a75d-f6ca4d6fa44d" className="loanProcessor">Loan Processor</div>
        <div data-layer="723eb7ea-12bd-49e9-8881-fe49436f37a1" className="fhaUnderwriter">FHA Underwriter </div>
        <div data-layer="84e72d2c-9e38-4a02-93d1-3ff1c58f7fee" className="licensedLoanOfficer">Licensed Loan Officer</div>
        <div data-layer="517f59d1-9c2e-4f71-83eb-64f706da8057" className="humanResourceLeader">Human Resource Leader</div>
        <svg data-layer="17cd5c9d-1974-4a29-991c-8659ddc675d5" preserveAspectRatio="none" viewBox="0 -2.5 483 5" className="line2"><path d="M 0 0 L 483 0"  /></svg>
        <svg data-layer="cffa0b57-7540-431f-880a-2adc479520b5" preserveAspectRatio="none" viewBox="0 -2.5 483 5" className="line6"><path d="M 0 0 L 483 0"  /></svg>
        <svg data-layer="7bc015db-1ac2-4f98-bb74-42052cef6b03" preserveAspectRatio="none" viewBox="0 -2.5 483 5" className="line7"><path d="M 0 0 L 483 0"  /></svg>
        <svg data-layer="65ad2b9c-4047-4cb6-9056-fb9c81bbeac2" preserveAspectRatio="none" viewBox="0 -2.5 483 5" className="line8"><path d="M 0 0 L 483 0"  /></svg>
        <div data-layer="96651b0b-172d-44a2-be09-ff7437fc0aa6" className="rectangle76"></div>
        <div data-layer="d0298bf6-2199-49f9-962e-f5169844fed8" className="rectangle77"></div>
        <div data-layer="ad2c706d-a2aa-4c48-90c8-5cfd1575fe54" className="rectangle78"></div>
        <div data-layer="f6da2f33-8991-4821-a760-921c27dd3243" className="rectangle79"></div>
        <div data-layer="a8f0b7f5-ddfa-46f8-bc1b-43727a45d3cf" className="rectangle80"></div>

        <div data-layer="2fc62990-6db7-41af-aa54-b4523f1bda3a" className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe"><span className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe-0">We are searching for an experienced and highly-analytical Loan Processor to conduct assessments of business and individual loans. You will act as the liaison between potential clients and our growing financial institution, conducting client evaluations, researching credit records, and preparing loan package documentation.<br /><br />In this position, your chief goal will be to help eligible applicants obtain loans in a timely and professional manner while protecting our institution’s credibility. The successful candidate will demonstrate an in-depth knowledge of relevant rules and regulations. You should also have strong attention to detail with excellent communication and interpersonal abilities.<br /><br /></span><span className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe-698">Responsibilities:<br /></span><span className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe-716">Collect and prepare all necessary documentation for the loan package.<br />Research applicant credit status and current financial position.<br />Prepare and maintain all paperwork for existing and new loans, including loan disclosures.<br />Create repayment plans.<br />Complete loan contracts and ensure clients are kept informed of the rules and requirements.<br />Work with clients to establish their needs and recommend suitable types of loans.<br />Submit files to the designated Underwriter.<br />Conduct interviews to assess client eligibility for loans or mortgages.<br />Ensure you comply with the established regulations and law requirements.<br />Follow-up with clients to verify important information.<br /><br /></span><span className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe-1386">Requirements:<br /></span><span className="weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe-1400">Bachelor’s degree in Finance or relevant field.<br />A minimum of 2 years’ experience as a Loan Processor or similar role.<br />In-depth knowledge of closing procedures, loan processes, and documentation.<br />Good understanding of banking computer software and MS Office.<br />Excellent interpersonal and communication skills.<br />Good multitasking abilities with outstanding time management skills.</span></div>
        <svg data-layer="fe4a5fdf-03eb-415d-b36d-b86deec3e73e" preserveAspectRatio="none" viewBox="4.5 7.734375 27 20.53125" className="iconIonicMdCheckmark"><path d="M 13.09928894042969 23.89872741699219 L 6.75 17.54022598266602 L 4.5 19.68524932861328 L 13.09928894042969 28.265625 L 31.5 9.879327774047852 L 29.25 7.734375 L 13.09928894042969 23.89872741699219 Z"  /></svg>
        </Box></Box>
        <Footer></Footer>
</div>

    );
  }
}

Careers.propTypes = {

}

Careers.defaultProps = {

}


export default Careers;
          