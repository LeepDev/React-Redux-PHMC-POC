import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomepageMortgageCalculator extends Component {

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
    <ScrollView data-layer="1b0b203a-48c6-4a4b-8c45-cee912d3e81e" style={styles.homepageMortgageCalculator}>
        <ReactImage data-layer="c54f6388-0ef8-4eb8-b975-3a8065e7b42a" source={require('../assets/mortgageCalculator/rectangle20.png')} style={styles.homepageMortgageCalculator_rectangle20} />
        <ReactImage data-layer="03638b60-8a6e-4b83-a4d6-dedd9f32706f" source={require('../assets/mortgageCalculator/rectangle13.png')} style={styles.homepageMortgageCalculator_rectangle13} />
        <ReactImage data-layer="83ecff6d-d473-4924-84ca-8e8fa1182df9" source={require('../assets/mortgageCalculator/rectangle3.png')} style={styles.homepageMortgageCalculator_rectangle3} />
        <View data-layer="96350737-253c-4053-83fb-f30e2755f315" style={styles.homepageMortgageCalculator_rectangle14}></View>
        <View data-layer="61e6842d-cf7c-4d4a-a7e1-96ad7bdb4543" style={styles.homepageMortgageCalculator_rectangle15}></View>
        <View data-layer="10451be4-1bc6-4e49-984b-93d829012ee1" style={styles.homepageMortgageCalculator_rectangle16}></View>
        <View data-layer="c7f4ad38-90fe-44e4-9244-b9f4653e97d5" style={styles.homepageMortgageCalculator_component71}>
            <Svg data-layer="dc695299-7f51-45bf-b19d-28f43607b7f0" style={styles.homepageMortgageCalculator_component71_path1933bd231} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="282a9aa9-3f02-4830-81fd-5b3fb6af9ba4" style={styles.homepageMortgageCalculator_component71_calculate}>Calculate</Text>
        </View>
        <Text data-layer="9f381584-9989-4ad5-8dba-eac718cab4f6" style={styles.homepageMortgageCalculator_getAPreapproaval}>Get a Preapproaval</Text>
        <Text data-layer="45dad5b0-b0ec-4eed-9a8f-5016610f7c39" style={styles.homepageMortgageCalculator_quickLookAtYourMonthlyPayments}>Quick look at your monthly payments</Text>
        <Text data-layer="a7b83007-12d0-4984-960f-50091a4732b2" style={styles.homepageMortgageCalculator_aPreapprovalCanGiveYouTheExactAmountYouCanAffordAtNoObligationOrCostToYou}>A preapproval can give you the exact amount you can afford at no obligation or cost to you.

</Text>
        <Svg data-layer="d8a917f5-6b16-4320-a23c-9ab643b82212" style={styles.homepageMortgageCalculator_line1} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <Text data-layer="abc5d6d4-3d68-4a14-9d99-8ffcbf4379c0" style={styles.homepageMortgageCalculator_howMuchDoYouWantToBorrow}>How much do you want to borrow?</Text>
        <Text data-layer="adabba0a-664d-422d-9179-21f92e3a52b4" style={styles.homepageMortgageCalculator_whatIsTheInterestRate}>What is the interest rate?</Text>
        <Text data-layer="1bec9b63-edce-4ec2-b513-fb5141e05b7e" style={styles.homepageMortgageCalculator_estimatedMonthlyPayment}>Estimated monthly payment</Text>
        <Text data-layer="c74886c0-80de-4b34-902c-5cd00cb1da0f" style={styles.homepageMortgageCalculator_howManyYearsIsTheLoan}>How many years is the loan? </Text>
        <View data-layer="438604a8-0274-48b3-bc24-4d67bb2953a1" style={styles.homepageMortgageCalculator_rectangle19}></View>
        <Text data-layer="c513e0cb-af9b-4c7c-a015-0c53008113ae" style={styles.homepageMortgageCalculator_aFreshLookAtYourHome}>A fresh look at your home</Text>
        <Svg data-layer="234e4101-f97d-49ca-9b1a-2f26e921c76d" style={styles.homepageMortgageCalculator_line2} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <View data-layer="9f5f9b6b-0a53-4a09-9773-7261e8c94a74" style={styles.homepageMortgageCalculator_component62}>
            <Svg data-layer="0b532730-f3ef-4b82-8c04-c1a428c18718" style={styles.homepageMortgageCalculator_component62_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="8aa2a407-2778-4406-b1bb-368529a3393f" style={styles.homepageMortgageCalculator_component62_startNow}>Start Now</Text>
        </View>
    </ScrollView>
    );
  }
}

HomepageMortgageCalculator.propTypes = {

}

HomepageMortgageCalculator.defaultProps = {

}


const styles = StyleSheet.create({
  "homepageMortgageCalculator": {
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
  "homepageMortgageCalculator_rectangle20": {
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
    "height": 48,
    "left": 0,
    "top": 1032
  },
  "homepageMortgageCalculator_rectangle13": {
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
    "height": 1023,
    "left": 0,
    "top": 0
  },
  "homepageMortgageCalculator_rectangle3": {
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
    "height": 1025,
    "left": 0,
    "top": 0
  },
  "homepageMortgageCalculator_rectangle14": {
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
    "left": 171,
    "top": 200
  },
  "homepageMortgageCalculator_rectangle15": {
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
    "left": 171,
    "top": 307
  },
  "homepageMortgageCalculator_rectangle16": {
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
    "left": 171,
    "top": 414
  },
  "homepageMortgageCalculator_component71": {
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
    "left": 331,
    "top": 531
  },
  "homepageMortgageCalculator_component71_path1933bd231": {
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
  "homepageMortgageCalculator_component71_calculate": {
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
    "width": 140,
    "height": 37,
    "left": 17,
    "top": 15
  },
  "homepageMortgageCalculator_getAPreapproaval": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 50,
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
    "width": 476,
    "height": 61,
    "left": 171,
    "top": 800
  },
  "homepageMortgageCalculator_quickLookAtYourMonthlyPayments": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 45,
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
    "width": 836,
    "height": 55,
    "left": 171,
    "top": 94
  },
  "homepageMortgageCalculator_aPreapprovalCanGiveYouTheExactAmountYouCanAffordAtNoObligationOrCostToYou": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 574,
    "height": 68,
    "left": 171,
    "top": 882
  },
  "homepageMortgageCalculator_line1": {
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
    "top": 765
  },
  "homepageMortgageCalculator_howMuchDoYouWantToBorrow": {
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
    "width": 436,
    "height": 30,
    "left": 194,
    "top": 220
  },
  "homepageMortgageCalculator_whatIsTheInterestRate": {
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
    "width": 306,
    "height": 30,
    "left": 259,
    "top": 327
  },
  "homepageMortgageCalculator_estimatedMonthlyPayment": {
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
    "width": 372,
    "height": 30,
    "left": 231,
    "top": 654
  },
  "homepageMortgageCalculator_howManyYearsIsTheLoan": {
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
    "width": 355,
    "height": 30,
    "left": 235,
    "top": 434
  },
  "homepageMortgageCalculator_rectangle19": {
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
    "borderTopRightRadius": 45,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 45,
    "width": 630,
    "height": 85,
    "left": 0,
    "top": 982
  },
  "homepageMortgageCalculator_aFreshLookAtYourHome": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 45,
    "fontWeight": "300",
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
    "width": 572,
    "height": 55,
    "left": 15,
    "top": 997
  },
  "homepageMortgageCalculator_line2": {
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
    "top": 697
  },
  "homepageMortgageCalculator_component62": {
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
    "top": 800
  },
  "homepageMortgageCalculator_component62_path1": {
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
  "homepageMortgageCalculator_component62_startNow": {
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
  }
});