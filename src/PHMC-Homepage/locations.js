import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import Header from './Header';

export default class Locations extends Component {

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
    <ScrollView data-layer="7943cd2d-ca72-4ea8-8e01-0d662dfcbc22" style={styles.locations}>
        <ReactImage data-layer="712ba49b-9510-4cca-b239-5646d5c5f246" source={require('../assets/locations/rectangle4.png')} style={styles.locations_rectangle4} />
        <ReactImage data-layer="2a6ec6be-6241-4bd3-826b-c82e91147799" source={require('../assets/locations/rectangle3.png')} style={styles.locations_rectangle3} />
        <Header></Header>

        <Svg data-layer="56e18b2f-d709-4270-8db4-c08811d45c43" style={styles.locations_line1ab976f2a} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="ba763c7e-4932-475c-bc43-e71aa56330d5" style={styles.locations_rectangle61}></View>
        <View data-layer="5598521d-a660-4826-969c-0e41f49807fc" style={styles.locations_group4}>
            <ReactImage data-layer="e7d521d8-7865-45bf-a7e8-4744628bee0f" source={require('../assets/locations/rectangle64.png')} style={styles.locations_group4_rectangle64} />
            <ReactImage data-layer="5f142263-96c0-42d1-8496-ca95e41e0727" source={require('../assets/locations/rectangle65.png')} style={styles.locations_group4_rectangle65} />
            <ReactImage data-layer="afc0c315-d0b0-436f-99cb-e8d41cfd58b4" source={require('../assets/locations/rectangle66.png')} style={styles.locations_group4_rectangle66} />
        </View>
        <Text data-layer="ba1a48d3-02be-43ac-b3de-eab512068fda" style={styles.locations_homeBlogContactLocationsCareersPayment}>Home | Blog | Contact | Locations | Careers | Payment</Text>
        <Text data-layer="72593513-d3f0-4ef1-849e-026e529afbdc" style={styles.locations_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing}>NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</Text>
        <Text data-layer="2dce0152-7086-4396-98d2-1dcab2205d6c" style={styles.locations_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
        <ReactImage data-layer="c30bd1ee-eaa7-4211-894f-f3316bbcc10a" source={require('../assets/locations/rectangle67.png')} style={styles.locations_rectangle67} />
        <ReactImage data-layer="6f517eeb-dab5-46d5-a6f9-7eea5e5b5076" source={require('../assets/locations/rectangle68.png')} style={styles.locations_rectangle68} />
        <Svg data-layer="dd818ee4-24cd-42dc-b309-d1c7fa22dfed" style={styles.locations_line1} preserveAspectRatio="none" viewBox="0 -0.5 1560 1" fill="transparent"><SvgPath d="M 0 0 L 1560 0"  /></Svg>
        <View data-layer="a4b3128a-62c5-48ac-b9cf-f1126b248365" style={styles.locations_rectangle69}></View>
        <ReactImage data-layer="f57602c2-5cae-411b-8318-c790ab920409" source={require('../assets/locations/platinumlogohorizontal.png')} style={styles.locations_platinumlogohorizontal} />
        <Text data-layer="3594dcba-fd8e-4612-8b4c-cdfd21ecc0da" style={styles.locations_locations481b439c}>Locations</Text>
        <ReactImage data-layer="1f754786-f76a-4579-81c0-9437e6353bb0" source={require('../assets/locations/rectangle57.png')} style={styles.locations_rectangle57} />
        <View data-layer="3425a277-3f9a-4eaf-8288-6923b753c8de" style={styles.locations_rectangle75}></View>
        <Text data-layer="38094289-8fb8-490b-8095-8d11893c3398" style={styles.locations_enterZipCode}>Enter Zip Code</Text>
        <View data-layer="a1ebe026-750b-4a58-841e-e2080c7c4647" style={styles.locations_component611}>
            <Svg data-layer="b42559ef-c10a-4973-96d5-bfe0b4ad47d8" style={styles.locations_component611_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 316.6015625 69" fill="transparent"><SvgPath d="M 0 0 L 313.6015625 0 L 313.6015625 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="20059433-0c8b-49dc-8606-c9ff1fb9edf7" style={styles.locations_component611_findAConsultant}>Find a consultant</Text>
        </View>
    </ScrollView>
    );
  }
}

Locations.propTypes = {

}

Locations.defaultProps = {

}


const styles = StyleSheet.create({
  "locations": {
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
  "locations_rectangle4": {
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
  "locations_rectangle3": {
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
  "locations_careers": {
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
  "locations_contact": {
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
  "locations_locations8d71d6bc": {
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
  "locations_payment": {
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
  "locations_rectangle5": {
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
  "locations_rectangle647f61ab3": {
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
  "locations_platinumhomemortgageWhite": {
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
  "locations_rectangle6": {
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
  "locations_line1ab976f2a": {
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
  "locations_rectangle61": {
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
  "locations_group4": {
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
  "locations_group4_rectangle64": {
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
  "locations_group4_rectangle65": {
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
  "locations_group4_rectangle66": {
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
  "locations_homeBlogContactLocationsCareersPayment": {
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
  "locations_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing": {
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
  "locations_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId": {
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
  "locations_rectangle67": {
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
  "locations_rectangle68": {
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
  "locations_line1": {
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
  "locations_rectangle69": {
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
  "locations_platinumlogohorizontal": {
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
  "locations_locations481b439c": {
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
    "width": 347,
    "height": 92,
    "left": 171,
    "top": 95
  },
  "locations_rectangle57": {
    "opacity": 0.8013240098953247,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 927.78,
    "height": 572,
    "left": 170.72,
    "top": 233.5
  },
  "locations_rectangle75": {
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
    "borderTopWidth": 2,
    "borderTopColor": "rgba(54, 85, 124, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(54, 85, 124, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(54, 85, 124, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(54, 85, 124, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 10
    },
    "shadowRadius": 20,
    "width": 483,
    "height": 69,
    "left": 1280,
    "top": 234
  },
  "locations_enterZipCode": {
    "opacity": 0.7544729709625244,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 25,
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
    "width": 186,
    "height": 30,
    "left": 1303,
    "top": 254
  },
  "locations_component611": {
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
    "width": 313.6,
    "height": 66,
    "left": 1280,
    "top": 343
  },
  "locations_component611_path1": {
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
    "width": 313.6,
    "height": 66,
    "left": 0,
    "top": 0
  },
  "locations_component611_findAConsultant": {
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
    "width": 262,
    "height": 37,
    "left": 26,
    "top": 15
  }
});