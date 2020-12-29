import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import Header from './Header';
import styles from './styles';

export default class Web19201 extends Component {

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
    <ScrollView data-layer="5bc2967c-43ff-4d2c-8937-4b9f957f4eab" style={styles.web19201}>
        <ReactImage data-layer="7c4b1248-f8d6-467d-a449-f1f8e1716956" source={require('../assets/HomePage/rectangle108.png')} style={styles.web19201_rectangle108} />
        <ReactImage data-layer="22844672-c622-4c73-aba5-a001962de300" source={require('../assets/HomePage/rectangle81.png')} style={styles.web19201_rectangle81} />
        <ReactImage data-layer="4df4efd5-b3a8-4cb0-beb3-c1642ea4a54a" source={require('../assets/HomePage/rectangle82.png')} style={styles.web19201_rectangle82} />
        <View data-layer="e39e0f7d-00c2-453a-bd60-59dd1e06abee" style={styles.web19201_rectangle97}></View>
        <Text data-layer="672254bd-1a79-4878-a887-4deb40902e03" style={styles.web19201_freedomToChooseTheHomeYouLove}>Freedom to choose the Home you love</Text>
        <Text data-layer="b23ab776-7d02-4d75-85df-21201a71f0de" style={styles.web19201_withALenderWhoCares}>with a lender who Cares</Text>
        <Svg data-layer="e6128dea-1e4a-453c-8a09-c14afb78e698" style={styles.web19201_line9} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg> 
        <Header></Header>
        <ReactImage data-layer="57a197e6-e61a-441c-97fc-2c17a8414f44" source={require('../assets/HomePage/rectangle85.png')} style={styles.web19201_rectangle85} />
        <ReactImage data-layer="00afd87a-2ea4-4084-a08e-fbb1f9260371" source={require('../assets/HomePage/component42.png')} style={styles.web19201_component42} />
        <ReactImage data-layer="9ad2c766-2d76-47e7-b129-2e32504d1136" source={require('../assets/HomePage/component52.png')} style={styles.web19201_component52} />
        <ReactImage data-layer="e9381ffc-686c-4c60-a84f-298e26e97d7a" source={require('../assets/HomePage/rectangle88.png')} style={styles.web19201_rectangle88} />
        <ReactImage data-layer="c40afdc2-bc23-487e-bee1-f66e572269d2" source={require('../assets/HomePage/rectangle89.png')} style={styles.web19201_rectangle89} />
        <Text data-layer="0d764156-a59b-4fd3-bdcc-70c33c2f37a2" style={styles.web19201_weAreNotJustAnotherLender}>We are Not just another Lender</Text>
        <Text data-layer="f398f3b1-3c2d-4de3-8ff2-8c5c65fbc238" style={styles.web19201_whatMakesUsDifferent}>What makes us Different</Text>
        <Text data-layer="7ed945f1-ce7a-467b-9e9b-7918675ffb37" style={styles.web19201_hereAtPlatinumHomeMortgageWeAreInTheBusinessOfHelpingPeopleOurBeliefIsThatYourHomeIsWhereLoveAndSecurityComesFromWeStriveToGetEveryPersonIntoTheirOwnHomeTalkToOurAmazingTeamTodayToSeeWhatTheyCanDoForYou}>Here at Platinum Home Mortgage, we are in the business of helping people. Our belief is that your home is where love and security comes from. We strive to get every person into their own home.  Talk to our amazing team today to see what they can do for you.</Text>
        <Text data-layer="e0d5b1d8-6e7c-442e-9160-0bb076fe9f3e" style={styles.web19201_workingWithADirectLenderLikePlatinumCanHelpYouAchieveYourHomeownershipGoalsInAMuchSmootherSimplerProcess}>Working with a direct lender, like Platinum, can help you achieve your homeownership goals in a much smoother, simpler process</Text>
        <Svg data-layer="d1cd047a-271f-4d70-b5ef-995ec12b46d2" style={styles.web19201_line10} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="08abbd48-7546-4bc8-bc9c-4ab329e6a419" style={styles.web19201_component618}>
            <Svg data-layer="9c711680-a26a-44ac-838b-048a27bf14ed" style={styles.web19201_component618_path1e868ca31} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="44559168-99ae-414c-8234-0fc0d94788db" style={styles.web19201_component618_startNowe84ab019}>Start Now</Text>
        </View>
        <ReactImage data-layer="2ebd9d90-ef6c-4f5d-a5c5-a801618a91aa" source={require('../assets/HomePage/rectangle86.png')} style={styles.web19201_rectangle86} />
        <Text data-layer="eb60dcbf-5ba7-434f-aaae-4c1f79a9bf1a" style={styles.web19201_whoWeAre}>Who We Are</Text>
        <ReactImage data-layer="7b1a967c-f8eb-41e3-a183-1d00ab4e630a" source={require('../assets/HomePage/rectangle91.png')} style={styles.web19201_rectangle91} />
        <ReactImage data-layer="ec5bc445-350b-46b5-b4df-238fd0868695" source={require('../assets/HomePage/rectangle92.png')} style={styles.web19201_rectangle92} />
        <View data-layer="3da93fce-6612-46e8-86e0-0425ab581f1b" style={styles.web19201_rectangle93}></View>
        <View data-layer="e6b4d348-56ca-4ac8-92a5-1a4f91689f6d" style={styles.web19201_rectangle94}></View>
        <View data-layer="af93c4ec-fb67-4c21-a98f-4985b29719f5" style={styles.web19201_rectangle95}></View>
        <View data-layer="091ee3bc-3394-4920-91e9-a954489fd455" style={styles.web19201_component74}>
            <Svg data-layer="acd63fbc-6357-4a27-a320-a600ac41f95f" style={styles.web19201_component74_path1f3972f84} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="2c92f173-70d2-4f75-9110-5f815a9cc884" style={styles.web19201_component74_calculate}>Calculate</Text>
        </View>
        <Text data-layer="d2d87336-3b54-44eb-8944-b067bb05d8b5" style={styles.web19201_getAPreapproaval}>Get a Preapproaval</Text>
        <Text data-layer="8ff0d451-9329-4387-9b23-01cf460effcc" style={styles.web19201_quickLookAtYourMonthlyPayments}>Quick look at your monthly payments</Text>
        <Text data-layer="234b14c4-5d19-4f4b-a514-ca8373f696a9" style={styles.web19201_aPreapprovalCanGiveYouTheExactAmountYouCanAffordAtNoObligationOrCostToYou}>A preapproval can give you the exact amount you can afford at no obligation or cost to you.

</Text>
        <Svg data-layer="8642b972-3555-4414-ab3a-990ab5f8295d" style={styles.web19201_line12} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <Text data-layer="a6b71707-8e53-4764-9458-30ec6d24aab6" style={styles.web19201_howMuchDoYouWantToBorrow}>How much do you want to borrow?</Text>
        <Text data-layer="b1dfa94e-8f9e-4b05-8929-4ddfbbb44827" style={styles.web19201_whatIsTheInterestRate}>What is the interest rate?</Text>
        <Text data-layer="54c426a2-1c8c-4fd6-b9e3-199814a304a2" style={styles.web19201_estimatedMonthlyPayment}>Estimated monthly payment</Text>
        <Text data-layer="2486b9dd-a1ed-485e-a002-f3dd2ae848bd" style={styles.web19201_howManyYearsIsTheLoan}>How many years is the loan? </Text>
        <Svg data-layer="55840a21-36db-4604-95b0-2439494f1d88" style={styles.web19201_line11} preserveAspectRatio="none" viewBox="0 -2.5 483 5" fill="transparent"><SvgPath d="M 0 0 L 483 0"  /></Svg>
        <View data-layer="792e832e-d26f-4ee0-8afe-cecd976bee2a" style={styles.web19201_component619}>
            <Svg data-layer="360ca656-359b-4558-897e-68dadf1f5299" style={styles.web19201_component619_path1f009790d} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="55edfdb0-15ba-4460-a9c4-b4bd3eaebdcf" style={styles.web19201_component619_startNow012f5e81}>Start Now</Text>
        </View>
        <View data-layer="b4337a98-319c-41ff-9e0b-e793ad46f092" style={styles.web19201_rectangle90}></View>
        <Text data-layer="12460c12-038e-4d76-a741-1c45ab6ba84e" style={styles.web19201_monthlyPaymentsMadeEasy}>Monthly Payments Made Easy</Text>
        <ReactImage data-layer="008d7c41-0aa6-4683-8a28-3f047c3df5be" source={require('../assets/HomePage/rectangle100.png')} style={styles.web19201_rectangle100} />
        <View data-layer="f13ab33f-32f2-4254-b683-a0ac67f47755" style={styles.web19201_rectangle101}></View>
        <View data-layer="acd9cb2b-faa5-4879-be20-f6daeb2d3c1b" style={styles.web19201_rectangle103}></View>
        <View data-layer="0bebebaa-c7bc-4f08-baba-77dc7872b180" style={styles.web19201_rectangle102}></View>
        <ReactImage data-layer="f3a0375f-0f19-4816-9e75-844111989562" source={require('../assets/HomePage/rectangle104.png')} style={styles.web19201_rectangle104} />
        <ReactImage data-layer="73b9d083-d8c5-44bd-9b88-030d43011fc5" source={require('../assets/HomePage/rectangle105.png')} style={styles.web19201_rectangle105} />
        <ReactImage data-layer="d880c054-d5ee-428e-966b-c421e5157ea5" source={require('../assets/HomePage/rectangle106.png')} style={styles.web19201_rectangle106} />
        <View data-layer="2a7337c0-0374-48c3-87a4-34a382cb75fb" style={styles.web19201_component620}>
            <Svg data-layer="a20edcc9-c489-413b-9fc4-6ec40528ddfd" style={styles.web19201_component620_path1eae9680b} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="63cfcf97-dcf3-42fa-8d1e-5e81dd212132" style={styles.web19201_component620_fromCeo}>From CEO</Text>
        </View>
        <View data-layer="9350907a-3603-4bc3-b4e5-644f09ce026d" style={styles.web19201_component621}>
            <Svg data-layer="960b8560-e6de-4542-9611-7e29041a22e7" style={styles.web19201_component621_path1b238e024} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="31c6d373-3213-421e-a638-2d9ba7e79123" style={styles.web19201_component621_holiday}>Holiday</Text>
        </View>
        <View data-layer="3922e185-da8e-4db2-8ee2-32467e7dc7d3" style={styles.web19201_component622}>
            <Svg data-layer="fee64601-8e22-4ec5-be57-974732839dc0" style={styles.web19201_component622_path191e135b0} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="93fed936-2766-46c5-b34f-494f03b876e5" style={styles.web19201_component622_market}>Market</Text>
        </View>
        <View data-layer="0013b077-6f5e-4c55-af4d-f76ddbece196" style={styles.web19201_component623}>
            <Svg data-layer="8ea16fb7-2e2f-48f6-b084-c94cfe12044d" style={styles.web19201_component623_path11fb01002} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="6a504ce0-3a53-4fbb-a6f8-aee4c5beb73f" style={styles.web19201_component623_realEstate}>Real Estate</Text>
        </View>
        <View data-layer="d359aadd-7163-480a-b8e6-b4c35694f630" style={styles.web19201_component624}>
            <Svg data-layer="4d923eeb-3244-4fac-a8a5-767fad93b445" style={styles.web19201_component624_path164d77394} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="f2c117e5-6bcb-4104-bac5-f99526c275fe" style={styles.web19201_component624_resources}>Resources</Text>
        </View>
        <View data-layer="1528c829-7ba8-44d9-ad53-3ee47bf9e9a2" style={styles.web19201_component625}>
            <Svg data-layer="6c8a0aeb-da97-427d-b091-76160f9586e4" style={styles.web19201_component625_path1bb7d2e1c} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="f888aa65-ed1e-4e98-abfb-9922ca2f3071" style={styles.web19201_component625_spotlight}>Spotlight</Text>
        </View>
        <View data-layer="a214cf21-fb85-4c45-97e8-97c43c559a2c" style={styles.web19201_component626}>
            <Svg data-layer="fb077376-b4de-47d1-bea6-36527893b1b9" style={styles.web19201_component626_path189720d44} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="760f731b-1dbe-4fb9-bcb6-45b26d3143fc" style={styles.web19201_component626_technology}>Technology</Text>
        </View>
        <Svg data-layer="b6b16d65-8bd7-4b1f-8c4b-e84abcac0b04" style={styles.web19201_line13} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <Text data-layer="1813dcf6-bbdd-4dea-93c2-f1b792593356" style={styles.web19201_commonMortgageTermsExplained}>Common Mortgage Terms Explained</Text>
        <Text data-layer="852fdfe4-75dd-4ecb-a099-af620e3a08ef" style={styles.web19201_theSpringMarketHasSprung}>The Spring Market has Sprung</Text>
        <Text data-layer="9a623fea-fb45-4aa4-ba6b-e993d57d31e2" style={styles.web19201_theRoaring20sMoneyMachine}>The Roaring 20’s Money Machine</Text>
        <Svg data-layer="28d492a4-378e-4a35-b442-dde815c193e6" style={styles.web19201_ellipse23} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse23" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/HomePage/ellipse23.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse23)" /></Svg>
        <Svg data-layer="cbf4e7d3-3ceb-4240-9aa2-7b85857bffc5" style={styles.web19201_ellipse24} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse24" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/HomePage/ellipse24.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse24)" /></Svg>
        <Svg data-layer="97b43177-e420-4e98-9e87-f13527acdd99" style={styles.web19201_ellipse25} preserveAspectRatio="none" viewBox="0 0 61 61" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse25" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/HomePage/ellipse25.png')} x="0" y="0" width="61.00px" height="61.00px" /></Pattern></Defs><SvgPath d="M 30.5 0 C 47.34468078613281 0 61 13.65531730651855 61 30.5 C 61 47.34468078613281 47.34468078613281 61 30.5 61 C 13.65531730651855 61 0 47.34468078613281 0 30.5 C 0 13.65531730651855 13.65531730651855 0 30.5 0 Z" fill="url(#img-ellipse25)" /></Svg>
        <Text data-layer="221c4da7-fab6-456a-8f0c-e8365650c799" style={styles.web19201_authorapril192019}>Author
April 19, 2019        </Text>
        <Text data-layer="87fd3a3a-98b1-49b2-9bfc-7c43aa8c5816" style={styles.web19201_authorapril242018}>Author
April 24, 2018        </Text>
        <Text data-layer="75347a98-de68-4d6f-97a6-9e7f53d224d5" style={styles.web19201_authorjanuary102020}>Author
January 10, 2020        </Text>
        <Text data-layer="66dcce9f-fe21-4fe5-b476-071fd4fefefa" style={styles.web19201_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata44f534eb}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
        <Text data-layer="ecebeeae-1190-45eb-88cc-a42dbf4d71fe" style={styles.web19201_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata1cc9e289}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
        <Text data-layer="b3b64a60-a8cc-4701-a4fd-66350fe1ca49" style={styles.web19201_loremIpsumDolorSitAmetConseteturSadipscingElitrSedDiamNonumyEirmodTemporInviduntUtLaboreEtDoloreMagnaAliquyamEratSedDiamVoluptuaAtVeroEosEtAccusamEtJustoDuoDoloresEtEaRebumStetClitaKasdGubergrenNoSeaTakimata}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</Text>
        <View data-layer="3f085518-c033-4354-85dd-ce454e7924e0" style={styles.web19201_rectangle96}></View>
        <Text data-layer="80731bd3-17fe-4a50-ab9b-691f67af8dd8" style={styles.web19201_aFreshLookAtYourHome}>A fresh look at your home</Text>
        <ReactImage data-layer="1ed34e77-c88a-4d34-8df2-22fc982ccdb4" source={require('../assets/HomePage/rectangle110.png')} style={styles.web19201_rectangle110} />
        <ReactImage data-layer="ffa322ed-cc8c-4119-acdc-7a7ee16b702e" source={require('../assets/HomePage/rectangle113.png')} style={styles.web19201_rectangle113} />
        <Text data-layer="d73d1461-d845-4067-982f-61fa3e16b59d" style={styles.web19201_foundThePerfectHomeOrInTheHomeYouLove}>Found the Perfect home 
or in the home you Love</Text>
        <Svg data-layer="f4225ed3-0638-44f1-9ba2-78afffba88bc" style={styles.web19201_line15} preserveAspectRatio="none" viewBox="0 -1.5 1591 3" fill="transparent"><SvgPath d="M 0 0 L 1591 0"  /></Svg>
        <View data-layer="58612efe-9dfe-463e-b3da-e450de2a6ecb" style={styles.web19201_component627}>
            <Svg data-layer="e86adc74-5fff-4e43-92d4-b23e8ee4d357" style={styles.web19201_component627_path1} preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" fill="transparent"><SvgPath d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></Svg>
            <Text data-layer="aabdbfd6-448f-456f-aa42-a04ff555db33" style={styles.web19201_component627_startNow}>Start Now</Text>
        </View>
        <View data-layer="a21ada3e-7719-4b58-8341-80c65181405d" style={styles.web19201_rectangle114}></View>
        <Text data-layer="59758957-b4ba-44e8-b2ce-98a6334ff271" style={styles.web19201_andyWentOverAndAboveToMakeSureThatWeHadTheBestPossibleExperienceWithOurMortgageFromTheMomentWeStartedWorkingWithHimHeWasInConstantContactEnsuringThatWeHadTheBestRateAndAnsweringAnyAndAllQuestionsWeCouldThrowH}>Andy went over and above to make sure that we had the best possible experience with our mortgage. From the moment we started working with him he was in constant contact-ensuring that we had the best rate and answering any and all questions we could throw his way. From start to finish our experience was outstanding! You won’t find a better lender! 
                                                                      
  — mandaraper3</Text>
        <View data-layer="c04ea8ec-ec16-4925-ad60-408a515bc279" style={styles.web19201_group6}>
            <Svg data-layer="c3ebe12c-d62e-438b-9016-fbe17051893f" style={styles.web19201_group6_ellipse15} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="7d7fe09a-400e-406b-89e0-f41a5e92473a" style={styles.web19201_group6_ellipse16} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="e0743d37-ec41-46b9-900e-76f731bf6f3f" style={styles.web19201_group6_ellipse17} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="a69921c3-def7-41c1-94e8-0cf6412ddbe7" style={styles.web19201_group6_ellipse18} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="bcc5a91e-9a7e-4c4b-a5c6-cbbd3647b5b1" style={styles.web19201_group6_ellipse19} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 18.5" fill="rgba(54, 84, 124, 1)"><SvgPath d="M 9 0 C 13.97056198120117 0 18 3.805579662322998 18 8.5 C 18 13.19441986083984 13.97056198120117 17 9 17 C 4.02943754196167 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 4.02943754196167 0 9 0 Z"  /></Svg>
        </View>
        <View data-layer="00954afc-6833-44b6-871c-925a160a0b93" style={styles.web19201_rectangle109}></View>
        <View data-layer="6942b21c-d601-4c30-b744-6f7943a9fd8a" style={styles.web19201_group5}>
            <ReactImage data-layer="941cc0a4-1f51-46ed-bfc7-ccac2daad453" source={require('../assets/HomePage/rectangle64.png')} style={styles.web19201_group5_rectangle64} />
            <ReactImage data-layer="f3da8b79-265d-4abe-a13b-dd989de9635c" source={require('../assets/HomePage/rectangle65.png')} style={styles.web19201_group5_rectangle65} />
            <ReactImage data-layer="9e1d0a59-03a1-403f-a74d-a9facf1340bc" source={require('../assets/HomePage/rectangle66.png')} style={styles.web19201_group5_rectangle66} />
        </View>
        <Text data-layer="46e37bca-30b5-4fed-92a4-08d5f838be3b" style={styles.web19201_homeBlogContactLocationsCareersPayment}>Home | Blog | Contact | Locations | Careers | Payment</Text>
        <Text data-layer="0f9402e7-c724-4302-a06f-1050ef12d325" style={styles.web19201_nmlsPrivacyPolicyTermsOfUseDisclosureLicensing}>NMLS | Privacy Policy | Terms of Use | Disclosure | Licensing</Text>
        <Text data-layer="d7a37be9-be1e-4db2-82bd-46f1f6105021" style={styles.web19201_x2021PlatinumHomeMortgageCorporationAllRightsReservedLegalLicensingPrivacyInNewYorkDbaPhmcMortgageNmlsId}>© 2021 Platinum Home Mortgage Corporation. All rights reserved. Legal | Licensing | Privacy In New York: dba PHMC Mortgage NMLS ID #13589. For licensing information, go to: www.nmlsconsumeraccess.org All loans subject to credit approval and certain restrictions may apply. Information subject to change without notice. HomeStyle® is a registered trademark of Fannie Mae.</Text>
        <ReactImage data-layer="bf9ca279-fd20-4361-b3dc-0e8260ccf9a6" source={require('../assets/HomePage/rectangle111.png')} style={styles.web19201_rectangle111} />
        <ReactImage data-layer="a7755939-e087-42f5-80d8-f9d5a1f78698" source={require('../assets/HomePage/rectangle112.png')} style={styles.web19201_rectangle112} />
        <Svg data-layer="7bf87e16-debd-4d33-a7f6-df3d67d9beab" style={styles.web19201_line14} preserveAspectRatio="none" viewBox="0 -0.5 1560 1" fill="transparent"><SvgPath d="M 0 0 L 1560 0"  /></Svg>
        <View data-layer="4ea8830b-e94c-484d-b3d5-a26bbba5ae73" style={styles.web19201_rectangle115}></View>
        <ReactImage data-layer="ddb15883-f421-4350-8c77-0a9b23f45ad6" source={require('../assets/HomePage/platinumlogohorizontal.png')} style={styles.web19201_platinumlogohorizontal} />
        <View data-layer="27e9190a-65bc-4b67-8766-8b4670640d4c" style={styles.web19201_rectangle107}></View>
        <Text data-layer="5bd0ad1b-031a-44f0-b50f-428334eab5b1" style={styles.web19201_whatPeopleAreSaying}>What people are saying</Text>
    </ScrollView>
    );
  }
}

Web19201.propTypes = {

}

Web19201.defaultProps = {

}


