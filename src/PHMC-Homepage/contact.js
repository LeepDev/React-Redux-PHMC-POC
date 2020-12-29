import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import Header from './Header';

export default class Contact extends Component {

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
    <ScrollView data-layer="dd354256-3ba7-4017-8459-17d06a9862da" style={styles.contact}>
        <ReactImage data-layer="c8889a80-696d-4845-816d-bf9e850461a7" source={require('../assets/contact/rectangle4.png')} style={styles.contact_rectangle4} />
        <ReactImage data-layer="f5f9a899-2a7f-4cfb-bfd0-afcb3c20dc87" source={require('../assets/contact/rectangle3.png')} style={styles.contact_rectangle3} />
        <Header></Header>
        <View data-layer="327d018a-178e-4451-8c1d-63f0ff98f840" style={styles.contact_rectangle5}></View>
        <View data-layer="5e865778-9874-4c1d-87b3-0a4597e960ca" style={styles.contact_rectangle6bf0cea63}></View>
        <Svg data-layer="5b873411-206d-450e-9e02-5d6b64c6c297" style={styles.contact_platinumhomemortgageWhite} preserveAspectRatio="none" viewBox="5.922837257385254 9.728144645690918 41.146240234375 34.5546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42.01557159423828 13.10669422149658 C 43.99501037597656 11.64816188812256 44.64614105224609 11.70025253295898 44.64614105224609 11.46584510803223 C 44.64614105224609 11.33561897277832 44.5680046081543 11.23143863677979 44.43778228759766 11.23143863677979 C 44.43778228759766 11.23143863677979 44.4117317199707 11.23143863677979 44.4117317199707 11.23143863677979 C 43.94291687011719 11.23143863677979 42.4843864440918 12.03884029388428 41.44257736206055 12.84624195098877 C 38.70782852172852 11.67420673370361 35.76471710205078 11.07516670227051 32.79556655883789 11.04912185668945 C 30.68590354919434 11.04912185668945 28.57623863220215 11.25748252868652 26.49262046813965 11.67420673370361 C 25.60708427429199 10.89284992218018 24.53923034667969 10.34589958190918 23.39323997497559 10.08544731140137 C 19.53854751586914 9.095728874206543 16.04848480224609 10.4761266708374 16.04848480224609 10.4761266708374 C 8.755819320678711 12.92437648773193 6.229432106018066 19.87845230102539 6.229432106018066 19.87845230102539 C 5.760618209838867 21.02444267272949 5.968979358673096 21.33698463439941 5.968979358673096 21.33698463439941 C 6.281522274017334 21.41512107849121 6.646155834197998 20.19099426269531 6.646155834197998 20.19099426269531 C 8.078642845153809 16.80511665344238 9.823673248291016 15.26844787597656 9.823673248291016 15.26844787597656 C 16.15266418457031 8.470643043518066 23.52346420288086 10.86680507659912 23.52346420288086 10.86680507659912 C 24.27877616882324 11.02307605743408 24.98199653625488 11.38770866394043 25.5810375213623 11.88256931304932 C 15.42339706420898 14.33081912994385 9.719491958618164 21.72766304016113 9.719491958618164 27.3273868560791 C 9.719491958618164 31.05185508728027 12.53237724304199 33.10942840576172 15.37130737304688 32.79688262939453 C 16.36102676391602 32.69270324707031 17.35074424743652 32.5103874206543 18.28837394714355 32.22389221191406 L 18.28837394714355 41.88667297363281 C 16.51729774475098 43.08475112915039 14.43367958068848 43.73588562011719 12.29796981811523 43.70983505249023 C 11.07384490966797 43.70983505249023 9.276723861694336 42.95452499389648 9.276723861694336 41.86062622070312 C 9.276723861694336 41.52203750610352 9.927854537963867 40.87090301513672 9.927854537963867 40.24581909179688 C 9.927854537963867 39.07378387451172 9.302769660949707 38.37056732177734 8.234914779663086 38.37056732177734 C 6.776381969451904 38.37056732177734 6.255477428436279 39.36028289794922 6.255477428436279 40.68859100341797 C 6.255477428436279 42.43361663818359 8.339096069335938 44.28283309936523 12.19378852844238 44.28283309936523 C 14.27740669250488 44.28283309936523 16.33498191833496 43.63169860839844 18.28837394714355 42.58988952636719 L 18.28837394714355 43.55356216430664 L 21.72634315490723 43.55356216430664 L 21.72634315490723 40.32395553588867 C 23.83600616455078 38.6049690246582 25.76335144042969 36.6776237487793 27.43024826049805 34.54191589355469 L 27.43024826049805 43.55356216430664 L 31.70166397094727 43.55356216430664 L 31.70166397094727 30.94767189025879 L 29.98267936706543 30.94767189025879 C 30.29522323608398 30.45281219482422 30.55567359924316 29.98399925231934 30.81612586975098 29.56727409362793 C 31.96211624145508 27.45761108398438 32.92578887939453 25.63444519042969 33.81132507324219 23.99359703063965 L 37.30138778686523 26.72834396362305 L 37.30138778686523 28.81196403503418 C 37.22325134277344 28.81196403503418 37.14511489868164 28.81196403503418 37.04093170166016 28.81196403503418 C 34.54059219360352 28.81196403503418 34.12387084960938 27.58783912658691 33.88946151733398 27.58783912658691 C 33.70714569091797 27.61388397216797 33.57691955566406 27.74411010742188 33.55087280273438 27.92642784118652 C 33.55087280273438 28.10874176025391 34.80104446411133 29.41100311279297 37.30138778686523 29.56727600097656 L 37.30138778686523 43.60565185546875 L 40.76539993286133 43.60565185546875 L 40.76539993286133 29.02032661437988 C 44.25545883178711 27.79620170593262 47.06834411621094 24.54055023193359 47.06834411621094 20.71190071105957 C 47.12043762207031 17.50833702087402 44.75032043457031 14.53918170928955 42.01557159423828 13.10669422149658 Z M 32.56115341186523 11.59607124328613 C 35.29590225219727 11.59607124328613 38.239013671875 12.06488418579102 40.68726348876953 13.28901100158691 C 38.1608772277832 15.06008625030518 35.89494323730469 17.16975021362305 33.9936408996582 19.59195518493652 L 29.48781967163086 15.81539630889893 L 28.68041801452637 16.51861763000488 C 28.65437316894531 16.0498046875 28.60228157043457 15.60703563690186 28.52414703369141 15.13822174072266 C 28.49810218811035 15.00799560546875 28.08137702941895 13.15878391265869 26.9614315032959 12.14302062988281 C 28.81064414978027 11.77838802337646 30.68589973449707 11.59607124328613 32.56115341186523 11.59607124328613 Z M 14.17322540283203 31.88530349731445 C 11.38638687133789 31.91134643554688 10.2924861907959 29.17659950256348 10.2924861907959 27.19716262817383 C 10.31853294372559 22.14438819885254 16.02243804931641 14.66940879821777 26.04985046386719 12.32533836364746 C 26.80516052246094 13.2369213104248 27.2479305267334 14.33082103729248 27.35211181640625 15.50285625457764 C 27.3781566619873 16.23212242126465 27.3260669708252 16.98743438720703 27.22188568115234 17.71669960021973 L 18.28837394714355 25.34794998168945 L 18.28837394714355 30.89558219909668 C 17.01215553283691 31.52066612243652 15.60571479797363 31.85925483703613 14.17322540283203 31.88530349731445 L 14.17322540283203 31.88530349731445 Z M 25.00804138183594 24.20196151733398 C 24.12250328063965 25.76467514038086 23.02860450744629 27.19716262817383 21.75238800048828 28.44733428955078 L 21.75238800048828 26.83252906799316 L 25.00804138183594 24.20196151733398 Z M 21.75238800048828 38.63101577758789 L 21.75238800048828 30.7132682800293 C 25.42476463317871 28.49942207336426 27.27397537231445 24.93122863769531 28.107421875 21.67557334899902 L 29.48781967163086 20.55562973022461 L 31.85793495178223 22.40483856201172 C 27.89906311035156 28.16083526611328 25.19035911560059 34.38564300537109 21.75238800048828 38.63101577758789 Z M 40.79144668579102 27.43156623840332 L 40.79144668579102 25.3219051361084 L 35.53031158447266 20.89421653747559 C 37.22325134277344 17.97714996337891 38.83805465698242 15.7633056640625 41.33839797973633 13.54946327209473 C 43.60433197021484 15.00799560546875 44.46382522583008 16.72698020935059 44.46382522583008 19.40963745117188 C 44.46382141113281 22.06625175476074 43.16156005859375 25.55631256103516 40.79144668579102 27.43156623840332 L 40.79144668579102 27.43156623840332 Z"  /></Svg>
        <View data-layer="9c16e6b2-6ab1-49f5-b2c1-3596ef90ba8b" style={styles.contact_rectangle14}></View>
        <View data-layer="110ca9fd-80ea-4b95-b94c-32e96d68d649" style={styles.contact_rectangle15}></View>
        <View data-layer="001749c3-8bb0-4983-8579-64055c950e8c" style={styles.contact_rectangle16}></View>
        <View data-layer="e302f221-1de1-432e-bcfc-6f9f76283de7" style={styles.contact_rectangle74}></View>
        <View data-layer="538087dd-f001-405a-8361-9c7d86b100d8" style={styles.contact_rectangle75}></View>
        <View data-layer="2914dea1-aea2-42ed-bad9-5c8db4afe1b3" style={styles.contact_component72}>
            <Svg data-layer="5d47f446-ff10-4edc-b496-7d2852be3655" style={styles.contact_component72_path10308d08f} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="6f6c395e-91a0-44bd-ac3e-f009ec042425" style={styles.contact_component72_send}>Send</Text>
        </View>
        <Text data-layer="1d8c1490-7b61-432b-96c0-f88ee63a6e9b" style={styles.contact_firstName}>First Name</Text>
        <Text data-layer="20f3ee1a-b51a-4cc0-beb6-018c1b80a756" style={styles.contact_lastName}>Last Name</Text>
        <Text data-layer="54f77743-c68d-4e36-8ffc-70bed1e3944e" style={styles.contact_emailAddress}>Email Address</Text>
        <Text data-layer="5fc76aaa-7fab-40a9-a870-b6af511e18a1" style={styles.contact_phoneNumber}>Phone Number</Text>
        <Text data-layer="17900b08-9388-430c-b948-e5b538061869" style={styles.contact_questioncomments}>Question/Comments</Text>
        <Svg data-layer="34faea32-bb78-4dc4-a3c3-83c826a14707" style={styles.contact_line13ed2b8ef} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="1bf11729-337d-40be-9cbd-6b23270ec5fa" style={styles.contact_component68}>
            <Svg data-layer="7672b356-0b23-4064-8fb3-660a31bf2703" style={styles.contact_component68_path1fcce4837} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="9c38e6b9-aa7c-4c21-9739-23bdd28a9689" style={styles.contact_component68_call}>Call</Text>
        </View>
        <View data-layer="87626ca1-ce2f-4d84-99ab-a8cf71104c33" style={styles.contact_component69}>
            <Svg data-layer="61a635c3-443c-4a5b-8d98-92cb3e0b9dbe" style={styles.contact_component69_path1e86d0275} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="3e744a05-7f69-4ce3-9c7b-b52bbff3422c" style={styles.contact_component69_email}>Email</Text>
        </View>
        <View data-layer="ca4137aa-7d55-4157-8d74-896fbc2f08c5" style={styles.contact_component610}>
            <Svg data-layer="562c2af8-1de2-4984-b3dc-52eb85b09102" style={styles.contact_component610_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="08ca67c8-919e-43f7-afc3-75690022fc91" style={styles.contact_component610_chat}>Chat</Text>
        </View>
        <View data-layer="1b0d1ba9-269c-4093-9744-35fbda7ddec5" style={styles.contact_rectangle61}></View>
        <View data-layer="7e24e1f0-7e1e-467f-9db6-4cbb2e740317" style={styles.contact_group4}>
            <ReactImage data-layer="8631a06a-53d1-42be-8d54-6705149dccf1" source={require('../assets/contact/rectangle64.png')} style={styles.contact_group4_rectangle64} />
            <ReactImage data-layer="02563c63-da5a-460d-8d72-fa3f88a0cb3b" source={require('../assets/contact/rectangle65.png')} style={styles.contact_group4_rectangle65} />
            <ReactImage data-layer="f205c17d-137d-40bc-aea1-4b607b39a69a" source={require('../assets/contact/rectangle66.png')} style={styles.contact_group4_rectangle66} />
        </View>
        <Text data-layer="c51f8081-6cf3-4849-a6a7-58ba8ba73bf0" style={styles.contact_homeBlogContactLocationsCareersPayment}>Home | Blog | Contact | Locations | Careers | Payment</Text>
        <Text data-layer="880615f5-217d-436f-aa54-4153f4a400ee" style={styles.contact_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing}>NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</Text>
        <Text data-layer="f914e4a3-a141-47f1-bd67-8ee2ddfc22e5" style={styles.contact_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
        <ReactImage data-layer="6e0e4623-ee17-4489-8e91-3b75085e96ff" source={require('../assets/contact/rectangle67.png')} style={styles.contact_rectangle67} />
        <ReactImage data-layer="bb8a93ef-3b7d-4901-99d2-7278c5a8d8c4" source={require('../assets/contact/rectangle68.png')} style={styles.contact_rectangle68} />
        <Svg data-layer="0e4c29f1-d4e2-41be-97c5-f699b7ce013f" style={styles.contact_line1} preserveAspectRatio="none" viewBox="0 -0.5 1560 1" fill="transparent"><SvgPath d="M 0 0 L 1560 0"  /></Svg>
        <View data-layer="87ce1ee1-edc5-457b-8181-e89533dbcfe9" style={styles.contact_rectangle69}></View>
        <ReactImage data-layer="eafd6c90-d7dc-46e2-8e76-7b1553920a23" source={require('../assets/contact/platinumlogohorizontal.png')} style={styles.contact_platinumlogohorizontal} />
        <Text data-layer="3ef1ad91-80d3-470a-bd1e-86f47a4278f2" style={styles.contact_contactUs}>Contact Us</Text>
    </ScrollView>
    );
  }
}

Contact.propTypes = {

}

Contact.defaultProps = {

}


const styles = StyleSheet.create({
  "contact": {
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
  "contact_rectangle4": {
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
  "contact_rectangle3": {
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
  "contact_careers": {
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
  "contact_contact88de3dcc": {
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
  "contact_locations": {
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
  "contact_payment": {
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
  "contact_rectangle5": {
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
  "contact_rectangle6bf0cea63": {
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
  "contact_platinumhomemortgageWhite": {
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
  "contact_rectangle6": {
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
  "contact_rectangle14": {
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
    "left": 172,
    "top": 220
  },
  "contact_rectangle15": {
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
    "left": 172,
    "top": 327
  },
  "contact_rectangle16": {
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
    "left": 172,
    "top": 434
  },
  "contact_rectangle74": {
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
    "left": 172,
    "top": 541
  },
  "contact_rectangle75": {
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
    "left": 172,
    "top": 648
  },
  "contact_component72": {
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
  "contact_component72_path10308d08f": {
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
  "contact_component72_send": {
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
    "width": 76,
    "height": 37,
    "left": 49,
    "top": 15
  },
  "contact_firstName": {
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
    "width": 134,
    "height": 30,
    "left": 195,
    "top": 240
  },
  "contact_lastName": {
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
    "width": 131,
    "height": 30,
    "left": 195,
    "top": 347
  },
  "contact_emailAddress": {
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
    "width": 176,
    "height": 30,
    "left": 195,
    "top": 454
  },
  "contact_phoneNumber": {
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
    "width": 190,
    "height": 30,
    "left": 195,
    "top": 561
  },
  "contact_questioncomments": {
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
    "width": 255,
    "height": 30,
    "left": 195,
    "top": 668
  },
  "contact_line13ed2b8ef": {
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
  "contact_component68": {
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
    "left": 1588,
    "top": 218
  },
  "contact_component68_path1fcce4837": {
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
  "contact_component68_call": {
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
    "width": 56,
    "height": 37,
    "left": 59,
    "top": 15
  },
  "contact_component69": {
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
    "left": 1588,
    "top": 318
  },
  "contact_component69_path1e86d0275": {
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
  "contact_component69_email": {
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
    "width": 86,
    "height": 37,
    "left": 44,
    "top": 15
  },
  "contact_component610": {
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
    "left": 1588,
    "top": 418
  },
  "contact_component610_path1": {
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
  "contact_component610_chat": {
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
    "width": 70,
    "height": 37,
    "left": 52,
    "top": 15
  },
  "contact_rectangle61": {
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
  "contact_group4": {
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
  "contact_group4_rectangle64": {
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
  "contact_group4_rectangle65": {
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
  "contact_group4_rectangle66": {
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
  "contact_homeBlogContactLocationsCareersPayment": {
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
  "contact_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing": {
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
  "contact_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId": {
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
  "contact_rectangle67": {
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
  "contact_rectangle68": {
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
  "contact_line1": {
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
  "contact_rectangle69": {
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
  "contact_platinumlogohorizontal": {
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
  "contact_contactUs": {
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
    "width": 405,
    "height": 92,
    "left": 171,
    "top": 95
  }
});