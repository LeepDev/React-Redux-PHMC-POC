import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomepageReview extends Component {

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
    <ScrollView data-layer="466a6fa7-cd5a-4cd7-a276-264c965e81d2" style={styles.homepageReview}>
        <ReactImage data-layer="8de5dc0b-a815-460c-b6cd-d4a58de01d04" source={require('../assets/review/rectangle20.png')} style={styles.homepageReview_rectangle20} />
        <ReactImage data-layer="4d407c68-4ae4-4d6a-bbdc-82460d72d471" source={require('../assets/review/rectangle3.png')} style={styles.homepageReview_rectangle3} />
        <Text data-layer="0ae3bd18-339a-44a9-9759-aface693828f" style={styles.homepageReview_foundThePerfectHomeOrInTheHomeYouLove}>Found the Perfect home 
or in the home you Love</Text>
        <Svg data-layer="ebbbf6c0-9e9f-4f83-8abb-c989f0cddd65" style={styles.homepageReview_line1631b0dd8} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="2da49bbe-4791-461a-899e-d838ece52193" style={styles.homepageReview_component63}>
            <Svg data-layer="0cb63eb1-d6cd-4af1-b4b8-ccff80d27252" style={styles.homepageReview_component63_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="019a78cb-7aed-4bc4-abf5-fc3ddbd6c72b" style={styles.homepageReview_component63_startNow}>Start Now</Text>
        </View>
        <View data-layer="8ac4133b-7493-4c93-b308-c55123452cde" style={styles.homepageReview_rectangle21}></View>
        <Text data-layer="499d00d6-47f7-460e-ab19-dd4e3a68f445" style={styles.homepageReview_andyWentOverAndAboveToMakeSureThatWeHadTheBestPossibleExperienceWithOurMortgageFromTheMomentWeStartedWorkingWithHimHeWasInConstantContactEnsuringThatWeHadTheBestRateAndAnsweringAnyAndAllQuestionsWeCouldThrowH}>Andy went over and above to make sure that we had the best possible experience with our mortgage. From the moment we started working with him he was in constant contact-ensuring that we had the best rate and answering any and all questions we could throw his way. From start to finish our experience was outstanding! You won’t find a better lender! 
                                                                      
  — mandaraper3</Text>
        <View data-layer="8d50adcf-7882-4702-ac94-da109719035b" style={styles.homepageReview_group1}>
            <Svg data-layer="a9a03d36-7d9a-4ec4-bb36-9ad6a68970f9" style={styles.homepageReview_group1_ellipse15} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="1b07c994-52d4-4740-869e-095a8a68c8da" style={styles.homepageReview_group1_ellipse16} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="a01d445a-3b05-4493-abdc-58d2775a9a95" style={styles.homepageReview_group1_ellipse17} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="ee2bfe71-47c5-47ed-a310-3789a2ef1282" style={styles.homepageReview_group1_ellipse18} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="db2b420f-b2c7-4ea5-9961-5858c71fdcca" style={styles.homepageReview_group1_ellipse19} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 9 0 C 13.97056198120117 0 18 3.805579662322998 18 8.5 C 18 13.19441986083984 13.97056198120117 17 9 17 C 4.02943754196167 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 4.02943754196167 0 9 0 Z"  /></Svg>
        </View>
        <View data-layer="f9f2cb08-6ceb-4a24-bb43-8e634d1c937d" style={styles.homepageReview_rectangle61}></View>
        <View data-layer="6fad6d95-1880-4bc9-8a4a-0dac22c4014d" style={styles.homepageReview_group4}>
            <ReactImage data-layer="5e1c7feb-b170-438d-a1e4-fd87708ffbf6" source={require('../assets/review/rectangle64.png')} style={styles.homepageReview_group4_rectangle64} />
            <ReactImage data-layer="19364948-e63e-44f8-8972-fdd1d2344090" source={require('../assets/review/rectangle65.png')} style={styles.homepageReview_group4_rectangle65} />
            <ReactImage data-layer="9bc54b4a-6317-4574-aa28-7327e8334d7c" source={require('../assets/review/rectangle66.png')} style={styles.homepageReview_group4_rectangle66} />
        </View>
        <Text data-layer="d60b968e-4fb1-4784-a74e-34e96e5cf710" style={styles.homepageReview_homeBlogContactLocationsCareersPayment}>Home | Blog | Contact | Locations | Careers | Payment</Text>
        <Text data-layer="617d9893-ce5d-42c9-8cd9-ba72f97fb496" style={styles.homepageReview_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing}>NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</Text>
        <Text data-layer="7a1461fb-05f0-46b2-82d5-ebd5c780260f" style={styles.homepageReview_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
        <ReactImage data-layer="c3814792-368f-4ec7-9ad3-2ab43726fbd1" source={require('../assets/review/rectangle67.png')} style={styles.homepageReview_rectangle67} />
        <ReactImage data-layer="79026a25-afb6-4149-8ffe-9d87daf1a616" source={require('../assets/review/rectangle68.png')} style={styles.homepageReview_rectangle68} />
        <Svg data-layer="ab199eff-f55f-443e-ae79-7f250035be51" style={styles.homepageReview_line1} preserveAspectRatio="none" viewBox="0 -0.5 1560 1" fill="transparent"><SvgPath d="M 0 0 L 1560 0"  /></Svg>
        <View data-layer="242554f6-d1f8-4a01-ac0a-84e8e2cfa476" style={styles.homepageReview_rectangle69}></View>
        <ReactImage data-layer="1ad8f60d-6d3f-4ed8-8a85-6c1775a84b9b" source={require('../assets/review/platinumlogohorizontal.png')} style={styles.homepageReview_platinumlogohorizontal} />
    </ScrollView>
    );
  }
}

HomepageReview.propTypes = {

}

HomepageReview.defaultProps = {

}


const styles = StyleSheet.create({
  "homepageReview": {
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
  "homepageReview_rectangle20": {
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
    "height": 1025,
    "left": 0,
    "top": 0
  },
  "homepageReview_rectangle3": {
    "opacity": 0.4995479881763458,
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
  "homepageReview_foundThePerfectHomeOrInTheHomeYouLove": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 50,
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
    "width": 634,
    "height": 122,
    "left": 170,
    "top": 730
  },
  "homepageReview_line1631b0dd8": {
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
    "left": 169.5,
    "top": 695
  },
  "homepageReview_component63": {
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
    "left": 1586,
    "top": 730
  },
  "homepageReview_component63_path1": {
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
  "homepageReview_component63_startNow": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 150,
    "height": 37,
    "left": 12,
    "top": 15
  },
  "homepageReview_rectangle21": {
    "opacity": 0.8500000238418579,
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
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 50,
    "width": 1065,
    "height": 544,
    "left": 171,
    "top": 82
  },
  "homepageReview_andyWentOverAndAboveToMakeSureThatWeHadTheBestPossibleExperienceWithOurMortgageFromTheMomentWeStartedWorkingWithHimHeWasInConstantContactEnsuringThatWeHadTheBestRateAndAnsweringAnyAndAllQuestionsWeCouldThrowH": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
    "fontSize": 30,
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
    "width": 901,
    "height": 360,
    "left": 252,
    "top": 153
  },
  "homepageReview_group1": {
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
    "width": 163,
    "height": 17,
    "left": 581,
    "top": 587
  },
  "homepageReview_group1_ellipse15": {
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
    "width": 19,
    "height": 19,
    "left": -1,
    "top": -1
  },
  "homepageReview_group1_ellipse16": {
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
    "width": 19,
    "height": 19,
    "left": 34,
    "top": -1
  },
  "homepageReview_group1_ellipse17": {
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
    "width": 19,
    "height": 19,
    "left": 72,
    "top": -1
  },
  "homepageReview_group1_ellipse18": {
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
    "width": 19,
    "height": 19,
    "left": 109,
    "top": -1
  },
  "homepageReview_group1_ellipse19": {
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
    "width": 20,
    "height": 19,
    "left": 144,
    "top": -1
  },
  "homepageReview_rectangle61": {
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
  "homepageReview_group4": {
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
  "homepageReview_group4_rectangle64": {
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
  "homepageReview_group4_rectangle65": {
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
  "homepageReview_group4_rectangle66": {
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
  "homepageReview_homeBlogContactLocationsCareersPayment": {
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
  "homepageReview_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing": {
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
  "homepageReview_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId": {
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
  "homepageReview_rectangle67": {
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
  "homepageReview_rectangle68": {
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
  "homepageReview_line1": {
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
  "homepageReview_rectangle69": {
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
  "homepageReview_platinumlogohorizontal": {
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
  }
});