import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomepageFront extends Component {

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
    <ScrollView data-layer="158a60b3-5f92-469c-8cae-847ab6e9e1df" style={styles.homepageFront}>
        <ReactImage data-layer="4fa25750-12f9-4ea9-b67f-08724a7b5b2c" source={require('../assets/front/rectangle20.png')} style={styles.homepageFront_rectangle20} />
        <ReactImage data-layer="918503d7-c707-4b14-8540-b055561b32cd" source={require('../assets/front/rectangle4.png')} style={styles.homepageFront_rectangle4} />
        <ReactImage data-layer="1a07e2fd-444c-4885-9b23-c4582ce35783" source={require('../assets/front/rectangle3.png')} style={styles.homepageFront_rectangle3} />
        <Text data-layer="9ba815bd-b013-4e9d-8abc-150d625fb495" style={styles.homepageFront_freedomToChooseTheHomeYouLove}>Freedom to choose the Home you love</Text>
        <Text data-layer="fac23909-4844-4f39-9f44-76049d46d318" style={styles.homepageFront_withALenderWhoCares}>with a lender who Cares</Text>
        <Svg data-layer="846c2e42-70b9-488c-8838-0173389338b3" style={styles.homepageFront_line1} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <Text data-layer="c21dac04-3be1-4c59-8839-03fe86fddb82" style={styles.homepageFront_careers}>Careers</Text>
        <Text data-layer="fe49afa7-fe4b-4668-9c16-39a82f43f0c8" style={styles.homepageFront_contact}>Contact</Text>
        <Text data-layer="0742be67-17a7-4a90-a484-9ef930052b21" style={styles.homepageFront_locations}>Locations</Text>
        <Text data-layer="81b7d727-bf30-4a77-b3ed-7016df320144" style={styles.homepageFront_payment}>Payment</Text>
        <View data-layer="3f73b8c0-9ece-4126-aa1e-d35894b2d813" style={styles.homepageFront_rectangle5}></View>
        <View data-layer="940753dd-050e-4d8b-b765-cc400eca0935" style={styles.homepageFront_rectangle649a91155}></View>
        <View data-layer="817e5984-eee4-4f9b-8b46-3043d78d90eb" style={styles.homepageFront_rectangle19}></View>
        <Svg data-layer="898ddcd2-8b86-41ae-81ee-e72ffe0b2d63" style={styles.homepageFront_platinumhomemortgageWhite} preserveAspectRatio="none" viewBox="5.922837257385254 9.728144645690918 41.14634704589844 34.5546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42.01557159423828 13.10669422149658 C 43.99501037597656 11.64816188812256 44.64614105224609 11.70025253295898 44.64614105224609 11.46584510803223 C 44.64614105224609 11.33561897277832 44.5680046081543 11.23143863677979 44.43778228759766 11.23143863677979 C 44.43778228759766 11.23143863677979 44.4117317199707 11.23143863677979 44.4117317199707 11.23143863677979 C 43.94291687011719 11.23143863677979 42.4843864440918 12.03884029388428 41.44257736206055 12.84624195098877 C 38.70782852172852 11.67420673370361 35.76471710205078 11.07516670227051 32.79556655883789 11.04912185668945 C 30.68590354919434 11.04912185668945 28.57623863220215 11.25748252868652 26.49262046813965 11.67420673370361 C 25.60708427429199 10.89284992218018 24.53923034667969 10.34589958190918 23.39323997497559 10.08544731140137 C 19.53854751586914 9.095728874206543 16.04848480224609 10.4761266708374 16.04848480224609 10.4761266708374 C 8.755819320678711 12.92437648773193 6.229432106018066 19.87845230102539 6.229432106018066 19.87845230102539 C 5.760618209838867 21.02444267272949 5.968979358673096 21.33698463439941 5.968979358673096 21.33698463439941 C 6.281522274017334 21.41512107849121 6.646155834197998 20.19099426269531 6.646155834197998 20.19099426269531 C 8.078642845153809 16.80511665344238 9.823673248291016 15.26844787597656 9.823673248291016 15.26844787597656 C 16.15266418457031 8.470643043518066 23.52346420288086 10.86680507659912 23.52346420288086 10.86680507659912 C 24.27877616882324 11.02307605743408 24.98199653625488 11.38770866394043 25.5810375213623 11.88256931304932 C 15.42339706420898 14.33081912994385 9.719491958618164 21.72766304016113 9.719491958618164 27.3273868560791 C 9.719491958618164 31.05185508728027 12.53237724304199 33.10942840576172 15.37130737304688 32.79688262939453 C 16.36102676391602 32.69270324707031 17.35074424743652 32.5103874206543 18.28837394714355 32.22389221191406 L 18.28837394714355 41.88667297363281 C 16.51729774475098 43.08475112915039 14.43367958068848 43.73588562011719 12.29796981811523 43.70983505249023 C 11.07384490966797 43.70983505249023 9.276723861694336 42.95452499389648 9.276723861694336 41.86062622070312 C 9.276723861694336 41.52203750610352 9.927854537963867 40.87090301513672 9.927854537963867 40.24581909179688 C 9.927854537963867 39.07378387451172 9.302769660949707 38.37056732177734 8.234914779663086 38.37056732177734 C 6.776381969451904 38.37056732177734 6.255477428436279 39.36028289794922 6.255477428436279 40.68859100341797 C 6.255477428436279 42.43361663818359 8.339096069335938 44.28283309936523 12.19378852844238 44.28283309936523 C 14.27740669250488 44.28283309936523 16.33498191833496 43.63169860839844 18.28837394714355 42.58988952636719 L 18.28837394714355 43.55356216430664 L 21.72634315490723 43.55356216430664 L 21.72634315490723 40.32395553588867 C 23.83600616455078 38.6049690246582 25.76335144042969 36.6776237487793 27.43024826049805 34.54191589355469 L 27.43024826049805 43.55356216430664 L 31.70166397094727 43.55356216430664 L 31.70166397094727 30.94767189025879 L 29.98267936706543 30.94767189025879 C 30.29522323608398 30.45281219482422 30.55567359924316 29.98399925231934 30.81612586975098 29.56727409362793 C 31.96211624145508 27.45761108398438 32.92578887939453 25.63444519042969 33.81132507324219 23.99359703063965 L 37.30138778686523 26.72834396362305 L 37.30138778686523 28.81196403503418 C 37.22325134277344 28.81196403503418 37.14511489868164 28.81196403503418 37.04093170166016 28.81196403503418 C 34.54059219360352 28.81196403503418 34.12387084960938 27.58783912658691 33.88946151733398 27.58783912658691 C 33.70714569091797 27.61388397216797 33.57691955566406 27.74411010742188 33.55087280273438 27.92642784118652 C 33.55087280273438 28.10874176025391 34.80104446411133 29.41100311279297 37.30138778686523 29.56727600097656 L 37.30138778686523 43.60565185546875 L 40.76539993286133 43.60565185546875 L 40.76539993286133 29.02032661437988 C 44.25545883178711 27.79620170593262 47.06834411621094 24.54055023193359 47.06834411621094 20.71190071105957 C 47.12043762207031 17.50833702087402 44.75032043457031 14.53918170928955 42.01557159423828 13.10669422149658 Z M 32.56115341186523 11.59607124328613 C 35.29590225219727 11.59607124328613 38.239013671875 12.06488418579102 40.68726348876953 13.28901100158691 C 38.1608772277832 15.06008625030518 35.89494323730469 17.16975021362305 33.9936408996582 19.59195518493652 L 29.48781967163086 15.81539630889893 L 28.68041801452637 16.51861763000488 C 28.65437316894531 16.0498046875 28.60228157043457 15.60703563690186 28.52414703369141 15.13822174072266 C 28.49810218811035 15.00799560546875 28.08137702941895 13.15878391265869 26.9614315032959 12.14302062988281 C 28.81064414978027 11.77838802337646 30.68589973449707 11.59607124328613 32.56115341186523 11.59607124328613 Z M 14.17322540283203 31.88530349731445 C 11.38638687133789 31.91134643554688 10.2924861907959 29.17659950256348 10.2924861907959 27.19716262817383 C 10.31853294372559 22.14438819885254 16.02243804931641 14.66940879821777 26.04985046386719 12.32533836364746 C 26.80516052246094 13.2369213104248 27.2479305267334 14.33082103729248 27.35211181640625 15.50285625457764 C 27.3781566619873 16.23212242126465 27.3260669708252 16.98743438720703 27.22188568115234 17.71669960021973 L 18.28837394714355 25.34794998168945 L 18.28837394714355 30.89558219909668 C 17.01215553283691 31.52066612243652 15.60571479797363 31.85925483703613 14.17322540283203 31.88530349731445 L 14.17322540283203 31.88530349731445 Z M 25.00804138183594 24.20196151733398 C 24.12250328063965 25.76467514038086 23.02860450744629 27.19716262817383 21.75238800048828 28.44733428955078 L 21.75238800048828 26.83252906799316 L 25.00804138183594 24.20196151733398 Z M 21.75238800048828 38.63101577758789 L 21.75238800048828 30.7132682800293 C 25.42476463317871 28.49942207336426 27.27397537231445 24.93122863769531 28.107421875 21.67557334899902 L 29.48781967163086 20.55562973022461 L 31.85793495178223 22.40483856201172 C 27.89906311035156 28.16083526611328 25.19035911560059 34.38564300537109 21.75238800048828 38.63101577758789 Z M 40.79144668579102 27.43156623840332 L 40.79144668579102 25.3219051361084 L 35.53031158447266 20.89421653747559 C 37.22325134277344 17.97714996337891 38.83805465698242 15.7633056640625 41.33839797973633 13.54946327209473 C 43.60433197021484 15.00799560546875 44.46382522583008 16.72698020935059 44.46382522583008 19.40963745117188 C 44.46382141113281 22.06625175476074 43.16156005859375 25.55631256103516 40.79144668579102 27.43156623840332 L 40.79144668579102 27.43156623840332 Z"  /></Svg>
        <ReactImage data-layer="c5e5c5bf-a673-4a92-bffa-6c84602e1765" source={require('../assets/front/rectangle6.png')} style={styles.homepageFront_rectangle6} />
        <View data-layer="b6c0d8ed-d5f4-4c5e-913e-72c4116b1ee3" style={styles.homepageFront_component41}>
            <Svg data-layer="c42a1853-b7e4-488a-9d9f-6b4ccdb1a9d4" style={styles.homepageFront_component41_path2} preserveAspectRatio="none" viewBox="-1.5 -1.5 109 69" fill="transparent"><SvgPath d="M 0 0 L 106 0 L 106 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="f8c35467-bdda-4053-ae2f-94069f12b1f6" style={styles.homepageFront_component41_buy}>Buy</Text>
        </View>
        <View data-layer="7a0e6c90-24f9-4dd0-988b-72a73742db38" style={styles.homepageFront_component51}>
            <View data-layer="f5660d0a-a656-42ef-9de4-c6544981ee8e" style={styles.homepageFront_component51_rectangle10}></View>
            <Text data-layer="90f9c549-eb3b-472d-8c9c-cb6c7c3c31e2" style={styles.homepageFront_component51_refi}>Refi</Text>
        </View>
        <Text data-layer="ef1787eb-9c56-4ead-bcc7-033b214a1a16" style={styles.homepageFront_whoWeAre}>Who We Are</Text>
    </ScrollView>
    );
  }
}

HomepageFront.propTypes = {

}

HomepageFront.defaultProps = {

}


const styles = StyleSheet.create({
  "homepageFront": {
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
  "homepageFront_rectangle20": {
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
  "homepageFront_rectangle4": {
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
    "height": 1022,
    "left": 0,
    "top": 0
  },
  "homepageFront_rectangle3": {
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
    "height": 1022,
    "left": 0,
    "top": 0
  },
  "homepageFront_freedomToChooseTheHomeYouLove": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 76,
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
    "width": 1480,
    "height": 93,
    "left": 220,
    "top": 399
  },
  "homepageFront_withALenderWhoCares": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 76,
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
    "width": 938,
    "height": 93,
    "left": 491,
    "top": 492
  },
  "homepageFront_line1": {
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
    "left": 164.5,
    "top": 382
  },
  "homepageFront_careers": {
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
  "homepageFront_contact": {
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
  "homepageFront_locations": {
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
  "homepageFront_payment": {
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
  "homepageFront_rectangle5": {
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
  "homepageFront_rectangle649a91155": {
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
  "homepageFront_rectangle19": {
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
    "width": 379,
    "height": 85,
    "left": 0,
    "top": 982
  },
  "homepageFront_platinumhomemortgageWhite": {
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
  "homepageFront_rectangle6": {
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
  "homepageFront_component41": {
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
    "width": 106,
    "height": 66,
    "left": 737,
    "top": 833
  },
  "homepageFront_component41_path2": {
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
    "width": 106,
    "height": 66,
    "left": 0,
    "top": 0
  },
  "homepageFront_component41_buy": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(41, 79, 130, 1)",
    "fontSize": 30,
    "fontWeight": "500",
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
    "width": 58,
    "height": 37,
    "left": 24,
    "top": 15
  },
  "homepageFront_component51": {
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
    "width": 106,
    "height": 66,
    "left": 1127,
    "top": 833
  },
  "homepageFront_component51_rectangle10": {
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
    "borderTopColor": "rgba(72, 105, 148, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(72, 105, 148, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(72, 105, 148, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(72, 105, 148, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 106,
    "height": 66,
    "left": 0,
    "top": 0
  },
  "homepageFront_component51_refi": {
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
    "width": 58,
    "height": 37,
    "left": 24,
    "top": 15
  },
  "homepageFront_whoWeAre": {
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
    "width": 276,
    "height": 55,
    "left": 41,
    "top": 997
  }
});