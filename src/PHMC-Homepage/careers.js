import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import Header from './Header';

export default class Careers extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="02527852-5a3b-4733-9491-a3022c6b1627" style={styles.careers}>
        <ReactImage data-layer="ab7f84f3-a9ef-4aa7-81d1-23e7e3459287" source={require('../assets/careers/rectangle4.png')} style={styles.careers_rectangle4} />
        <ReactImage data-layer="c38c2f4f-0aaa-4150-b1a8-cc3a446f9aba" source={require('../assets/careers/rectangle3.png')} style={styles.careers_rectangle3} />
        <Header></Header>
        <Svg data-layer="916c319d-ac40-4796-8aaf-f24caae78a0b" style={styles.careers_line160775fc6} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="a5264b55-f8f1-4803-bb9d-dde9eea472f4" style={styles.careers_rectangle61}></View>
        <View data-layer="619b0d37-0e9b-4b3a-921c-fd1c213707a1" style={styles.careers_group4}>
            <ReactImage data-layer="716f01f2-466e-47d9-b623-3556519470e9" source={require('../assets/careers/rectangle64.png')} style={styles.careers_group4_rectangle64} />
            <ReactImage data-layer="566a8cad-ce33-4f4e-89f3-3e58a5cad6c6" source={require('../assets/careers/rectangle65.png')} style={styles.careers_group4_rectangle65} />
            <ReactImage data-layer="e122e055-5b42-4790-9545-ac056efb0981" source={require('../assets/careers/rectangle66.png')} style={styles.careers_group4_rectangle66} />
        </View>
        <Text data-layer="cdef6fea-2f20-4eef-a165-3f6d4a2baceb" style={styles.careers_homeBlogContactLocationsCareersPayment}>Home | Blog | Contact | Locations | Careers | Payment</Text>
        <Text data-layer="04d1b544-30ed-42cf-8788-027d01a754f3" style={styles.careers_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing}>NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</Text>
        <Text data-layer="b90add2c-2f77-4a06-a1c0-9ae01b406336" style={styles.careers_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
        <ReactImage data-layer="aa14317b-8674-4a03-ab23-5f5d25d6e820" source={require('../assets/careers/rectangle67.png')} style={styles.careers_rectangle67} />
        <ReactImage data-layer="49cfe1f6-fc6c-463e-acf8-3e604e681074" source={require('../assets/careers/rectangle68.png')} style={styles.careers_rectangle68} />
        <Svg data-layer="7b2acd36-eb53-4ab8-ba2b-37dc0c52981d" style={styles.careers_line1} preserveAspectRatio="none" viewBox="0 -0.5 1560 1" fill="transparent"><SvgPath d="M 0 0 L 1560 0"  /></Svg>
        <View data-layer="ec17210c-7475-466c-aed7-5f94c23e99ea" style={styles.careers_rectangle69}></View>
        <ReactImage data-layer="d9f7ad09-5784-4c3c-900c-edf3e8ced23a" source={require('../assets/careers/platinumlogohorizontal.png')} style={styles.careers_platinumlogohorizontal} />
        <Text data-layer="da082629-3e5f-4985-adde-941ab1edf2fb" style={styles.careers_careersfade5be8}>Careers</Text>
        <View data-layer="e9ea7169-57a7-4b9f-8fbf-3dcc11c38bf8" style={styles.careers_component73}>
            <Svg data-layer="3c17d91d-dba1-446b-a5ba-4d413e5f657a" style={styles.careers_component73_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="07ee574a-2ab1-45fc-9924-2ad863f807d8" style={styles.careers_component73_apply}>Apply</Text>
        </View>
        <Text data-layer="fe201b3f-9ad2-4f70-a75d-f6ca4d6fa44d" style={styles.careers_loanProcessor}>Loan Processor</Text>
        <Text data-layer="723eb7ea-12bd-49e9-8881-fe49436f37a1" style={styles.careers_fhaUnderwriter}>FHA Underwriter </Text>
        <Text data-layer="84e72d2c-9e38-4a02-93d1-3ff1c58f7fee" style={styles.careers_licensedLoanOfficer}>Licensed Loan Officer</Text>
        <Text data-layer="517f59d1-9c2e-4f71-83eb-64f706da8057" style={styles.careers_humanResourceLeader}>Human Resource Leader</Text>
        <Svg data-layer="17cd5c9d-1974-4a29-991c-8659ddc675d5" style={styles.careers_line2} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <Svg data-layer="cffa0b57-7540-431f-880a-2adc479520b5" style={styles.careers_line6} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <Svg data-layer="7bc015db-1ac2-4f98-bb74-42052cef6b03" style={styles.careers_line7} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <Svg data-layer="65ad2b9c-4047-4cb6-9056-fb9c81bbeac2" style={styles.careers_line8} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <View data-layer="96651b0b-172d-44a2-be09-ff7437fc0aa6" style={styles.careers_rectangle76}></View>
        <View data-layer="d0298bf6-2199-49f9-962e-f5169844fed8" style={styles.careers_rectangle77}></View>
        <View data-layer="ad2c706d-a2aa-4c48-90c8-5cfd1575fe54" style={styles.careers_rectangle78}></View>
        <View data-layer="f6da2f33-8991-4821-a760-921c27dd3243" style={styles.careers_rectangle79}></View>
        <View data-layer="a8f0b7f5-ddfa-46f8-bc1b-43727a45d3cf" style={styles.careers_rectangle80}></View>
        <Text data-layer="2fc62990-6db7-41af-aa54-b4523f1bda3a" style={styles.careers_weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe}>We are searching for an experienced and highly-analytical Loan Processor to conduct assessments of business and individual loans. You will act as the liaison between potential clients and our growing financial institution, conducting client evaluations, researching credit records, and preparing loan package documentation.

In this position, your chief goal will be to help eligible applicants obtain loans in a timely and professional manner while protecting our institution’s credibility. The successful candidate will demonstrate an in-depth knowledge of relevant rules and regulations. You should also have strong attention to detail with excellent communication and interpersonal abilities.

Responsibilities:
Collect and prepare all necessary documentation for the loan package.
Research applicant credit status and current financial position.
Prepare and maintain all paperwork for existing and new loans, including loan disclosures.
Create repayment plans.
Complete loan contracts and ensure clients are kept informed of the rules and requirements.
Work with clients to establish their needs and recommend suitable types of loans.
Submit files to the designated Underwriter.
Conduct interviews to assess client eligibility for loans or mortgages.
Ensure you comply with the established regulations and law requirements.
Follow-up with clients to verify important information.

Requirements:
Bachelor’s degree in Finance or relevant field.
A minimum of 2 years’ experience as a Loan Processor or similar role.
In-depth knowledge of closing procedures, loan processes, and documentation.
Good understanding of banking computer software and MS Office.
Excellent interpersonal and communication skills.
Good multitasking abilities with outstanding time management skills.</Text>
        <Svg data-layer="fe4a5fdf-03eb-415d-b36d-b86deec3e73e" style={styles.careers_iconIonicMdCheckmark} preserveAspectRatio="none" viewBox="4.5 7.734375 27 20.53125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 13.09928894042969 23.89872741699219 L 6.75 17.54022598266602 L 4.5 19.68524932861328 L 13.09928894042969 28.265625 L 31.5 9.879327774047852 L 29.25 7.734375 L 13.09928894042969 23.89872741699219 Z"  /></Svg>
    </ScrollView>
    );
  }
}

Careers.propTypes = {

}

Careers.defaultProps = {

}


const styles = StyleSheet.create({
  "careers": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 1080,
    "left": 0,
    "top": 0
  },
  "careers_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1920,
    "height": 880,
    "left": 0,
    "top": 0
  },
  "careers_rectangle3": {
    "opacity": 0.4424700140953064,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1920,
    "height": 880,
    "left": 0,
    "top": 0
  },
  "careers_careers70d32632": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 74,
    "height": 24,
    "left": 1699,
    "top": 18
  },
  "careers_contact": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 78,
    "height": 24,
    "left": 1469,
    "top": 18
  },
  "careers_locations": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 94,
    "height": 24,
    "left": 1576,
    "top": 18
  },
  "careers_payment": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 90,
    "height": 24,
    "left": 1802,
    "top": 18
  },
  "careers_rectangle5": {
    "opacity": 0.6996359825134277,
    "position": "absolute",
    "backgroundColor": "rgba(19, 63, 122, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "borderBottomLeftRadius": 30,
    "borderBottomRightRadius": 30,
    "width": 107,
    "height": 59,
    "left": 0,
    "top": 0
  },
  "careers_rectangle6337034ae": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(54, 84, 124, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 61,
    "height": 59,
    "left": 0,
    "top": 0
  },
  "careers_platinumhomemortgageWhite": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 41.15,
    "height": 34.55,
    "left": 30,
    "top": 12
  },
  "careers_rectangle6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 232.15,
    "height": 30.07,
    "left": 122.35,
    "top": 14.28
  },
  "careers_line160775fc6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1591,
    "height": 3,
    "left": 171.5,
    "top": 183
  },
  "careers_rectangle61": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(54, 84, 124, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1918.87,
    "height": 199,
    "left": -0.5,
    "top": 879.5
  },
  "careers_group4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 163.91,
    "height": 32.81,
    "left": 850,
    "top": 921
  },
  "careers_group4_rectangle64": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 34.16,
    "height": 23.5,
    "left": -0.5,
    "top": 3.5
  },
  "careers_group4_rectangle65": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 29.47,
    "height": 31.81,
    "left": 65.5,
    "top": -0.5
  },
  "careers_group4_rectangle66": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 35.91,
    "height": 28.75,
    "left": 126.5,
    "top": 0.5
  },
  "careers_homeBlogContactLocationsCareersPayment": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontFamily": "Montserrat-Regular",
    "textAlign": "left",
    "lineHeight": 29,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 531,
    "height": 33,
    "left": 180,
    "top": 925.45
  },
  "careers_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontFamily": "Montserrat-Regular",
    "textAlign": "left",
    "lineHeight": 29,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 587,
    "height": 33,
    "left": 1153,
    "top": 927.45
  },
  "careers_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontFamily": "Montserrat-Regular",
    "textAlign": "center",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1559,
    "height": 48,
    "left": 180,
    "top": 1007.5
  },
  "careers_rectangle67": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 53.3,
    "height": 54.61,
    "left": 1777.86,
    "top": 950.44
  },
  "careers_rectangle68": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 34.17,
    "height": 55.95,
    "left": 1851.43,
    "top": 949.53
  },
  "careers_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1560,
    "height": 1,
    "left": 179.5,
    "top": 980
  },
  "careers_rectangle69": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 45,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 45,
    "width": 157,
    "height": 85,
    "left": 0,
    "top": 938
  },
  "careers_platinumlogohorizontal": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 134,
    "height": 46,
    "left": 8,
    "top": 958
  },
  "careers_careersfade5be8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 75,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 274,
    "height": 92,
    "left": 171,
    "top": 95
  },
  "careers_component73": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 175,
    "height": 66,
    "left": 171,
    "top": 755
  },
  "careers_component73_path1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 175,
    "height": 66,
    "left": 0,
    "top": 0
  },
  "careers_component73_apply": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 88,
    "height": 37,
    "left": 43,
    "top": 15
  },
  "careers_loanProcessor": {
    "opacity": 0.7544729709625244,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 194,
    "height": 30,
    "left": 231,
    "top": 254
  },
  "careers_fhaUnderwriter": {
    "opacity": 0.7544729709625244,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 227,
    "height": 30,
    "left": 231,
    "top": 351
  },
  "careers_licensedLoanOfficer": {
    "opacity": 0.7544729709625244,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 277,
    "height": 30,
    "left": 231,
    "top": 448
  },
  "careers_humanResourceLeader": {
    "opacity": 0.7544729709625244,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 314,
    "height": 30,
    "left": 231,
    "top": 545
  },
  "careers_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 483,
    "height": 5,
    "left": 171.5,
    "top": 297
  },
  "careers_line6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 483,
    "height": 5,
    "left": 171.5,
    "top": 394
  },
  "careers_line7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 483,
    "height": 5,
    "left": 171.5,
    "top": 491
  },
  "careers_line8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 483,
    "height": 5,
    "left": 171.5,
    "top": 588
  },
  "careers_rectangle76": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 36,
    "height": 36,
    "left": 172,
    "top": 252
  },
  "careers_rectangle77": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 36,
    "height": 36,
    "left": 172,
    "top": 349
  },
  "careers_rectangle78": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 36,
    "height": 36,
    "left": 172,
    "top": 446
  },
  "careers_rectangle79": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 36,
    "height": 36,
    "left": 172,
    "top": 543
  },
  "careers_rectangle80": {
    "opacity": 0.6228529810905457,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1020,
    "height": 569,
    "left": 743,
    "top": 252
  },
  "careers_weAreSearchingForAnExperiencedAndHighlyAnalyticalLoanProcessorToConductAssessmentsOfBusinessAndIndividualLoansYouWillActAsTheLiaisonBetweenPotentialClientsAndOurGrowingFinancialInstitutionConductingClientEvaluationsRe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 983,
    "height": 518,
    "left": 762,
    "top": 274
  },
  "careers_iconIonicMdCheckmark": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 27,
    "height": 20.53,
    "left": 176.32,
    "top": 258.73
  }
});