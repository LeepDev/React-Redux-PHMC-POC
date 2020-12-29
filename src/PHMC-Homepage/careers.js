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
        <View data-layer="c78da420-3648-44b0-bee3-93e1d401d115" style={styles.careers_rectangle5}></View>
        <View data-layer="74c9ba07-099b-42b6-ab58-72bf0243cc79" style={styles.careers_rectangle6337034ae}></View>
        <Svg data-layer="fd7a1049-f67f-45e3-bd2a-76d2fbbe12e1" style={styles.careers_platinumhomemortgageWhite} preserveAspectRatio="none" viewBox="5.922837257385254 9.728144645690918 41.146484375 34.5546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42.01557159423828 13.10669422149658 C 43.99501037597656 11.64816188812256 44.64614105224609 11.70025253295898 44.64614105224609 11.46584510803223 C 44.64614105224609 11.33561897277832 44.5680046081543 11.23143863677979 44.43778228759766 11.23143863677979 C 44.43778228759766 11.23143863677979 44.4117317199707 11.23143863677979 44.4117317199707 11.23143863677979 C 43.94291687011719 11.23143863677979 42.4843864440918 12.03884029388428 41.44257736206055 12.84624195098877 C 38.70782852172852 11.67420673370361 35.76471710205078 11.07516670227051 32.79556655883789 11.04912185668945 C 30.68590354919434 11.04912185668945 28.57623863220215 11.25748252868652 26.49262046813965 11.67420673370361 C 25.60708427429199 10.89284992218018 24.53923034667969 10.34589958190918 23.39323997497559 10.08544731140137 C 19.53854751586914 9.095728874206543 16.04848480224609 10.4761266708374 16.04848480224609 10.4761266708374 C 8.755819320678711 12.92437648773193 6.229432106018066 19.87845230102539 6.229432106018066 19.87845230102539 C 5.760618209838867 21.02444267272949 5.968979358673096 21.33698463439941 5.968979358673096 21.33698463439941 C 6.281522274017334 21.41512107849121 6.646155834197998 20.19099426269531 6.646155834197998 20.19099426269531 C 8.078642845153809 16.80511665344238 9.823673248291016 15.26844787597656 9.823673248291016 15.26844787597656 C 16.15266418457031 8.470643043518066 23.52346420288086 10.86680507659912 23.52346420288086 10.86680507659912 C 24.27877616882324 11.02307605743408 24.98199653625488 11.38770866394043 25.5810375213623 11.88256931304932 C 15.42339706420898 14.33081912994385 9.719491958618164 21.72766304016113 9.719491958618164 27.3273868560791 C 9.719491958618164 31.05185508728027 12.53237724304199 33.10942840576172 15.37130737304688 32.79688262939453 C 16.36102676391602 32.69270324707031 17.35074424743652 32.5103874206543 18.28837394714355 32.22389221191406 L 18.28837394714355 41.88667297363281 C 16.51729774475098 43.08475112915039 14.43367958068848 43.73588562011719 12.29796981811523 43.70983505249023 C 11.07384490966797 43.70983505249023 9.276723861694336 42.95452499389648 9.276723861694336 41.86062622070312 C 9.276723861694336 41.52203750610352 9.927854537963867 40.87090301513672 9.927854537963867 40.24581909179688 C 9.927854537963867 39.07378387451172 9.302769660949707 38.37056732177734 8.234914779663086 38.37056732177734 C 6.776381969451904 38.37056732177734 6.255477428436279 39.36028289794922 6.255477428436279 40.68859100341797 C 6.255477428436279 42.43361663818359 8.339096069335938 44.28283309936523 12.19378852844238 44.28283309936523 C 14.27740669250488 44.28283309936523 16.33498191833496 43.63169860839844 18.28837394714355 42.58988952636719 L 18.28837394714355 43.55356216430664 L 21.72634315490723 43.55356216430664 L 21.72634315490723 40.32395553588867 C 23.83600616455078 38.6049690246582 25.76335144042969 36.6776237487793 27.43024826049805 34.54191589355469 L 27.43024826049805 43.55356216430664 L 31.70166397094727 43.55356216430664 L 31.70166397094727 30.94767189025879 L 29.98267936706543 30.94767189025879 C 30.29522323608398 30.45281219482422 30.55567359924316 29.98399925231934 30.81612586975098 29.56727409362793 C 31.96211624145508 27.45761108398438 32.92578887939453 25.63444519042969 33.81132507324219 23.99359703063965 L 37.30138778686523 26.72834396362305 L 37.30138778686523 28.81196403503418 C 37.22325134277344 28.81196403503418 37.14511489868164 28.81196403503418 37.04093170166016 28.81196403503418 C 34.54059219360352 28.81196403503418 34.12387084960938 27.58783912658691 33.88946151733398 27.58783912658691 C 33.70714569091797 27.61388397216797 33.57691955566406 27.74411010742188 33.55087280273438 27.92642784118652 C 33.55087280273438 28.10874176025391 34.80104446411133 29.41100311279297 37.30138778686523 29.56727600097656 L 37.30138778686523 43.60565185546875 L 40.76539993286133 43.60565185546875 L 40.76539993286133 29.02032661437988 C 44.25545883178711 27.79620170593262 47.06834411621094 24.54055023193359 47.06834411621094 20.71190071105957 C 47.12043762207031 17.50833702087402 44.75032043457031 14.53918170928955 42.01557159423828 13.10669422149658 Z M 32.56115341186523 11.59607124328613 C 35.29590225219727 11.59607124328613 38.239013671875 12.06488418579102 40.68726348876953 13.28901100158691 C 38.1608772277832 15.06008625030518 35.89494323730469 17.16975021362305 33.9936408996582 19.59195518493652 L 29.48781967163086 15.81539630889893 L 28.68041801452637 16.51861763000488 C 28.65437316894531 16.0498046875 28.60228157043457 15.60703563690186 28.52414703369141 15.13822174072266 C 28.49810218811035 15.00799560546875 28.08137702941895 13.15878391265869 26.9614315032959 12.14302062988281 C 28.81064414978027 11.77838802337646 30.68589973449707 11.59607124328613 32.56115341186523 11.59607124328613 Z M 14.17322540283203 31.88530349731445 C 11.38638687133789 31.91134643554688 10.2924861907959 29.17659950256348 10.2924861907959 27.19716262817383 C 10.31853294372559 22.14438819885254 16.02243804931641 14.66940879821777 26.04985046386719 12.32533836364746 C 26.80516052246094 13.2369213104248 27.2479305267334 14.33082103729248 27.35211181640625 15.50285625457764 C 27.3781566619873 16.23212242126465 27.3260669708252 16.98743438720703 27.22188568115234 17.71669960021973 L 18.28837394714355 25.34794998168945 L 18.28837394714355 30.89558219909668 C 17.01215553283691 31.52066612243652 15.60571479797363 31.85925483703613 14.17322540283203 31.88530349731445 L 14.17322540283203 31.88530349731445 Z M 25.00804138183594 24.20196151733398 C 24.12250328063965 25.76467514038086 23.02860450744629 27.19716262817383 21.75238800048828 28.44733428955078 L 21.75238800048828 26.83252906799316 L 25.00804138183594 24.20196151733398 Z M 21.75238800048828 38.63101577758789 L 21.75238800048828 30.7132682800293 C 25.42476463317871 28.49942207336426 27.27397537231445 24.93122863769531 28.107421875 21.67557334899902 L 29.48781967163086 20.55562973022461 L 31.85793495178223 22.40483856201172 C 27.89906311035156 28.16083526611328 25.19035911560059 34.38564300537109 21.75238800048828 38.63101577758789 Z M 40.79144668579102 27.43156623840332 L 40.79144668579102 25.3219051361084 L 35.53031158447266 20.89421653747559 C 37.22325134277344 17.97714996337891 38.83805465698242 15.7633056640625 41.33839797973633 13.54946327209473 C 43.60433197021484 15.00799560546875 44.46382522583008 16.72698020935059 44.46382522583008 19.40963745117188 C 44.46382141113281 22.06625175476074 43.16156005859375 25.55631256103516 40.79144668579102 27.43156623840332 L 40.79144668579102 27.43156623840332 Z"  /></Svg>
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