import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomepageBlog extends Component {

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
    <ScrollView data-layer="5e267726-174c-4757-b377-ab00f7ac34f6" style={styles.homepageBlog}>
        <ReactImage data-layer="f9c02d56-75dc-4f7e-9171-572abe0bacb6" source={require('../assets/blog/rectangle20c908cf01.png')} style={styles.homepageBlog_rectangle20c908cf01} />
        <ReactImage data-layer="f6b83c16-a923-46c3-a4fd-d675d1681b57" source={require('../assets/blog/rectangle20.png')} style={styles.homepageBlog_rectangle20} />
        <ReactImage data-layer="9c0447b1-5597-41f3-b8ea-08f10533988c" source={require('../assets/blog/rectangle3.png')} style={styles.homepageBlog_rectangle3} />
        <View data-layer="322937c3-0cc9-44c8-ad49-37083b927b09" style={styles.homepageBlog_rectangle72}></View>
        <View data-layer="93b5444a-c329-4d05-8c18-ff059dea26ca" style={styles.homepageBlog_rectangle70}></View>
        <View data-layer="3f63057e-bb7e-4146-94f4-d8abde3043d6" style={styles.homepageBlog_rectangle71}></View>
        <ReactImage data-layer="39a9168c-be84-42b5-aa04-0104dcf60703" source={require('../assets/blog/rectangle73fe94b35b.png')} style={styles.homepageBlog_rectangle73fe94b35b} />
        <View data-layer="94a38ca1-1dd8-471b-bd42-aceb5150b95b" style={styles.homepageBlog_rectangle19}></View>
        <Text data-layer="c2f99e63-2bff-4a97-931d-6f11cc6fa394" style={styles.homepageBlog_whatPeopleAreSaying}>What people are saying</Text>
        <ReactImage data-layer="e5621168-2e5b-4fdb-a8a3-cbfe561a781e" source={require('../assets/blog/rectangle73d5049362.png')} style={styles.homepageBlog_rectangle73d5049362} />
        <ReactImage data-layer="cdcfe939-2235-4172-a313-6ea8488a99f4" source={require('../assets/blog/rectangle73.png')} style={styles.homepageBlog_rectangle73} />
        <View data-layer="c3379db7-2038-4c01-9061-494fcf808c9c" style={styles.homepageBlog_component65}>
            <Svg data-layer="9fab5e23-ce40-4b36-9b12-e64d2c702d85" style={styles.homepageBlog_component65_path1438f7794} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="f78799e0-f912-408d-ab72-06b4ee6f85ea" style={styles.homepageBlog_component65_fromCeo}>From CEO</Text>
        </View>
        <View data-layer="61394735-405b-46b6-925c-2e89f36ca556" style={styles.homepageBlog_component612}>
            <Svg data-layer="2370d99f-942e-40a2-b00c-51e3944e239a" style={styles.homepageBlog_component612_path10f3e7a45} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="b0e1b66f-c993-4cc5-aaa4-85818444b54f" style={styles.homepageBlog_component612_holiday}>Holiday</Text>
        </View>
        <View data-layer="f0b58076-ad1b-47ff-9b44-c732374693ee" style={styles.homepageBlog_component613}>
            <Svg data-layer="b7fb9fa2-8c0f-43d4-a766-225018061dd7" style={styles.homepageBlog_component613_path15f3576de} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="476df899-a812-4b20-8a3d-99df7029f018" style={styles.homepageBlog_component613_market}>Market</Text>
        </View>
        <View data-layer="cfff8496-caa1-4a4e-b2f1-1556fbed2c45" style={styles.homepageBlog_component617}>
            <Svg data-layer="afd6bf95-d390-4266-a77b-c0ea52ad5b3d" style={styles.homepageBlog_component617_path12f778eca} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="93852867-bb00-420b-9f5d-4cb631b6cc21" style={styles.homepageBlog_component617_realEstate}>Real Estate</Text>
        </View>
        <View data-layer="b7d6f0e3-5ba1-444c-a502-e8a08ddcbdad" style={styles.homepageBlog_component614}>
            <Svg data-layer="c6ac98a2-d53a-46b7-a888-ea5002d38b77" style={styles.homepageBlog_component614_path172c63199} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="9048ae09-cfd4-4961-9f79-a7f287a2fd3e" style={styles.homepageBlog_component614_resources}>Resources</Text>
        </View>
        <View data-layer="5c7bcfc9-f9a0-4a16-9169-92ef08387b04" style={styles.homepageBlog_component615}>
            <Svg data-layer="ba37e2bb-3610-4767-bfd2-9b77774d4128" style={styles.homepageBlog_component615_path165acc2b8} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="165dd03d-b2c3-4918-ac54-845f5a3761ee" style={styles.homepageBlog_component615_spotlight}>Spotlight</Text>
        </View>
        <View data-layer="78f58782-3d06-46e1-86b3-25ffcb12a0cb" style={styles.homepageBlog_component616}>
            <Svg data-layer="2cdd4908-58fd-4a1c-83d3-ee91eb5c7d3d" style={styles.homepageBlog_component616_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="8b3a2e52-f24e-432c-a3c5-03c3671022e1" style={styles.homepageBlog_component616_technology}>Technology</Text>
        </View>
        <Svg data-layer="714413fe-a07b-41ca-a4e6-2ce3971209fd" style={styles.homepageBlog_line1} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <Text data-layer="7b67f899-19cd-42f8-9609-a741e2e5faf9" style={styles.homepageBlog_commonMortgageTermsExplained}>Common Mortgage Terms Explained</Text>
        <Text data-layer="b18177e4-87d8-45fa-8435-91499389d4b5" style={styles.homepageBlog_theSpringMarketHasSprung}>The Spring Market has Sprung</Text>
        <Text data-layer="3e7a5e44-b1d3-4bc1-9684-b63bc5d5a791" style={styles.homepageBlog_theRoaring20sMoneyMachine}>The Roaring 20’s Money Machine</Text>
        <Svg data-layer="6869d7ce-df90-44ff-874e-efbbcbbfe944" style={styles.homepageBlog_ellipse20} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse20" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/blog/ellipse20.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse20)" /></Svg>
        <Svg data-layer="f7a1f069-5e12-42dd-981f-5babd448b047" style={styles.homepageBlog_ellipse21} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse21" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/blog/ellipse21.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse21)" /></Svg>
        <Svg data-layer="6d2f20b8-b943-4925-b740-0eb619d18823" style={styles.homepageBlog_ellipse22} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse22" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/blog/ellipse22.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse22)" /></Svg>
        <Text data-layer="02f47fa1-7213-4b41-b220-242e3064cb82" style={styles.homepageBlog_authorapril192019}>Author
April 19, 2019        </Text>
        <Text data-layer="455177ca-b147-4d0f-a211-fa6c665f69cb" style={styles.homepageBlog_authorapril242018}>Author
April 24, 2018        </Text>
        <Text data-layer="81fd4fb1-b493-4b54-ba54-71dbb3ff35c8" style={styles.homepageBlog_authorjanuary102020}>Author
January 10, 2020        </Text>
        <Text data-layer="491c379c-5696-48fa-bbff-853d90f3f169" style={styles.homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata7a3db7af}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
        <Text data-layer="508b7777-5ed9-4887-a567-63c0e359a767" style={styles.homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata5571420b}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
        <Text data-layer="f3ff7637-6300-430e-a1e2-a41d1962357d" style={styles.homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
    </ScrollView>
    );
  }
}

HomepageBlog.propTypes = {

}

HomepageBlog.defaultProps = {

}


const styles = StyleSheet.create({
  "homepageBlog": {
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
  "homepageBlog_rectangle20c908cf01": {
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
  "homepageBlog_rectangle20": {
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
    "height": 1712,
    "left": 0,
    "top": -687
  },
  "homepageBlog_rectangle3": {
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
  "homepageBlog_rectangle72": {
    "opacity": 0.6499999761581421,
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
    "width": 512,
    "height": 208,
    "left": 1249,
    "top": 656
  },
  "homepageBlog_rectangle70": {
    "opacity": 0.6499999761581421,
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
    "width": 512,
    "height": 208,
    "left": 170,
    "top": 656
  },
  "homepageBlog_rectangle71": {
    "opacity": 0.6499999761581421,
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
    "width": 512,
    "height": 208,
    "left": 709,
    "top": 656
  },
  "homepageBlog_rectangle73fe94b35b": {
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
    "width": 512,
    "height": 375,
    "left": 1249,
    "top": 292
  },
  "homepageBlog_rectangle19": {
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
    "width": 596,
    "height": 85,
    "left": 0,
    "top": 982
  },
  "homepageBlog_whatPeopleAreSaying": {
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
    "width": 521,
    "height": 55,
    "left": 35,
    "top": 997
  },
  "homepageBlog_rectangle73d5049362": {
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
    "width": 512,
    "height": 375,
    "left": 709,
    "top": 292
  },
  "homepageBlog_rectangle73": {
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
    "width": 512,
    "height": 375,
    "left": 170,
    "top": 292
  },
  "homepageBlog_component65": {
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
    "left": 170,
    "top": 145
  },
  "homepageBlog_component65_path1438f7794": {
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
  "homepageBlog_component65_fromCeo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "width": 128,
    "height": 30,
    "left": 23,
    "top": 20
  },
  "homepageBlog_component612": {
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
    "left": 360,
    "top": 145
  },
  "homepageBlog_component612_path10f3e7a45": {
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
  "homepageBlog_component612_holiday": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "height": 30,
    "left": 40,
    "top": 20
  },
  "homepageBlog_component613": {
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
    "left": 550,
    "top": 145
  },
  "homepageBlog_component613_path15f3576de": {
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
  "homepageBlog_component613_market": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "width": 86,
    "height": 30,
    "left": 44,
    "top": 20
  },
  "homepageBlog_component617": {
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
    "left": 740,
    "top": 145
  },
  "homepageBlog_component617_path12f778eca": {
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
  "homepageBlog_component617_realEstate": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "height": 30,
    "left": 17,
    "top": 20
  },
  "homepageBlog_component614": {
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
    "left": 930,
    "top": 145
  },
  "homepageBlog_component614_path172c63199": {
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
  "homepageBlog_component614_resources": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "width": 126,
    "height": 30,
    "left": 24,
    "top": 20
  },
  "homepageBlog_component615": {
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
    "left": 1120,
    "top": 145
  },
  "homepageBlog_component615_path165acc2b8": {
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
  "homepageBlog_component615_spotlight": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "width": 116,
    "height": 30,
    "left": 29,
    "top": 20
  },
  "homepageBlog_component616": {
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
    "left": 1310,
    "top": 145
  },
  "homepageBlog_component616_path1": {
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
  "homepageBlog_component616_technology": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
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
    "width": 143,
    "height": 30,
    "left": 16,
    "top": 20
  },
  "homepageBlog_line1": {
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
    "top": 250
  },
  "homepageBlog_commonMortgageTermsExplained": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "lineHeight": 28,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 455,
    "height": 42,
    "left": 1271,
    "top": 675.5
  },
  "homepageBlog_theSpringMarketHasSprung": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "lineHeight": 28,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 455,
    "height": 42,
    "left": 741,
    "top": 675.5
  },
  "homepageBlog_theRoaring20sMoneyMachine": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "lineHeight": 28,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 455,
    "height": 42,
    "left": 202,
    "top": 675.5
  },
  "homepageBlog_ellipse20": {
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
    "width": 61,
    "height": 61,
    "left": 1271,
    "top": 791
  },
  "homepageBlog_ellipse21": {
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
    "width": 61,
    "height": 61,
    "left": 741,
    "top": 791
  },
  "homepageBlog_ellipse22": {
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
    "width": 61,
    "height": 61,
    "left": 202,
    "top": 791
  },
  "homepageBlog_authorapril192019": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 131,
    "height": 49,
    "left": 1346,
    "top": 797
  },
  "homepageBlog_authorapril242018": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 131,
    "height": 49,
    "left": 816,
    "top": 797
  },
  "homepageBlog_authorjanuary102020": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 193,
    "height": 49,
    "left": 277,
    "top": 797
  },
  "homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata7a3db7af": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
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
    "width": 480,
    "height": 77,
    "left": 1271,
    "top": 708
  },
  "homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata5571420b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
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
    "width": 480,
    "height": 77,
    "left": 741,
    "top": 708
  },
  "homepageBlog_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(54, 84, 124, 1)",
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
    "width": 480,
    "height": 77,
    "left": 202,
    "top": 708
  }
});