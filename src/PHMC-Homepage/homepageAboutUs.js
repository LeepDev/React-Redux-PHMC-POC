import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomepageAboutUs extends Component {

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
    <ScrollView data-layer="90f798be-f716-4e73-8f65-a396b9621c9d" style={styles.homepageAboutUs}>
        <ReactImage data-layer="6236d9f8-4a03-4b99-9d43-ed28cc16783c" source={require('../assets/aboutus/rectangle20.png')} style={styles.homepageAboutUs_rectangle20} />
        <ReactImage data-layer="2633c165-1918-40e0-bef5-cc74f82cd097" source={require('../assets/aboutus/rectangle12.png')} style={styles.homepageAboutUs_rectangle12} />
        <ReactImage data-layer="37d5771a-bcbc-4a7d-b642-e5a136588495" source={require('../assets/aboutus/rectangle3.png')} style={styles.homepageAboutUs_rectangle3} />
        <Text data-layer="cc88db95-2447-4a58-8d91-497f88946dd1" style={styles.homepageAboutUs_weAreNotJustAnotherLender}>We are Not just another Lender</Text>
        <Text data-layer="4950ac3c-6cda-4c89-8bee-ff7f31097f75" style={styles.homepageAboutUs_whatMakesUsDifferent}>What makes us Different</Text>
        <Text data-layer="36af7862-5949-4b59-804c-a8e51ee9a642" style={styles.homepageAboutUs_hereAtPlatinumHomeMortgageWeAreInTheBusinessOfHelpingPeopleOurBeliefIsThatYourHomeIsWhereLoveAndSecurityComesFromWeStriveToGetEveryPersonIntoTheirOwnHomeTalkToOurAmazingTeamTodayToSeeWhatTheyCanDoForYou}>Here at Platinum Home Mortgage, we are in the business of helping people. Our belief is that your home is where love and security comes from. We strive to get every person into their own home.  Talk to our amazing team today to see what they can do for you.</Text>
        <Text data-layer="db89676a-a0be-4d81-a1ed-359e5572db8a" style={styles.homepageAboutUs_workingWithADirectLenderLikePlatinumCanHelpYouAchieveYourHomeownershipGoalsInAMuchSmootherSimplerProcess}>Working with a direct lender, like Platinum, can help you achieve your homeownership goals in a much smoother, simpler process</Text>
        <Svg data-layer="b48961c0-b023-4633-bd1a-41e99e1f7e6e" style={styles.homepageAboutUs_line1} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="fcf7fc2f-9654-438e-a138-e87abb336430" style={styles.homepageAboutUs_component61}>
            <Svg data-layer="158d04e6-71e1-459d-9923-460a25c1fc35" style={styles.homepageAboutUs_component61_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="3d6a1803-a3dd-47ac-9dea-e69ddd506262" style={styles.homepageAboutUs_component61_startNow}>Start Now</Text>
        </View>
        <View data-layer="5811eae3-c000-4c4d-8037-0f859fdac24b" style={styles.homepageAboutUs_rectangle19}></View>
        <Text data-layer="94c75c4b-f028-498e-b80a-488e9c57e86d" style={styles.homepageAboutUs_monthlyPaymentsMadeEasy}>Monthly Payments Made Easy</Text>
    </ScrollView>
    );
  }
}

HomepageAboutUs.propTypes = {

}

HomepageAboutUs.defaultProps = {

}


const styles = StyleSheet.create({
  "homepageAboutUs": {
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
  "homepageAboutUs_rectangle20": {
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
  "homepageAboutUs_rectangle12": {
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
  "homepageAboutUs_rectangle3": {
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
  "homepageAboutUs_weAreNotJustAnotherLender": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 55,
    "fontWeight": "700",
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
    "width": 870,
    "height": 67,
    "left": 888,
    "top": 499
  },
  "homepageAboutUs_whatMakesUsDifferent": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 55,
    "fontWeight": "700",
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
    "width": 692,
    "height": 67,
    "left": 171,
    "top": 765
  },
  "homepageAboutUs_hereAtPlatinumHomeMortgageWeAreInTheBusinessOfHelpingPeopleOurBeliefIsThatYourHomeIsWhereLoveAndSecurityComesFromWeStriveToGetEveryPersonIntoTheirOwnHomeTalkToOurAmazingTeamTodayToSeeWhatTheyCanDoForYou": {
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
    "width": 873,
    "height": 132,
    "left": 888,
    "top": 586
  },
  "homepageAboutUs_workingWithADirectLenderLikePlatinumCanHelpYouAchieveYourHomeownershipGoalsInAMuchSmootherSimplerProcess": {
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
    "width": 717,
    "height": 132,
    "left": 171,
    "top": 852
  },
  "homepageAboutUs_line1": {
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
    "top": 731
  },
  "homepageAboutUs_component61": {
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
    "top": 765
  },
  "homepageAboutUs_component61_path1": {
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
  "homepageAboutUs_component61_startNow": {
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
  "homepageAboutUs_rectangle19": {
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
    "width": 775,
    "height": 85,
    "left": 0,
    "top": 982
  },
  "homepageAboutUs_monthlyPaymentsMadeEasy": {
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
    "width": 664,
    "height": 55,
    "left": 41,
    "top": 997
  }
});