import React from "react";

const BuyStep7 = props => {
  const { prev, submit } = props
    return(
        <div>        
            {/* Page 7 */}
          <div data-layer="1994bec2-01f7-48c1-ad0e-5b740e612e92" className="personalInformation">Personal information</div>
          <div data-layer="803ed5ff-bb6b-481a-a48f-ec4d9626ef1a" className="rectangle144"></div>
          <div data-layer="60057291-e961-4942-8cab-b67b3ed784db" className="rectangle145"></div>
          <div data-layer="f37260a6-d809-4333-ba01-6492d52550cf" className="rectangle143"></div>
          <div data-layer="9bfe094c-ca66-4395-be3c-69d83ee4f3e0" className="rectangle141"></div>
          <div data-layer="2afe76ab-c42d-4d8f-b98a-381a5dbd6588" className="rectangle142"></div>

          <div data-layer="49345c66-403d-4286-88e2-299355f37934" className="currentAddress">Current Address</div>
          <div data-layer="031d6583-ddec-4c25-a101-6e21d85725e2" className="rectangle149"></div>
          <div data-layer="3bc4547b-6d20-4285-aa32-8752a9c1d65c" className="rectangle150"></div>
          <div data-layer="fb679e87-2cc9-40e7-9ae7-a95ff538951e" className="rectangle148"></div>
          <div data-layer="79680979-264b-42d6-b299-1ddb5aa58edf" className="rectangle147"></div>
          <div data-layer="4bbdd258-8046-4634-91c7-58754b94ce55" className="rectangle146"></div>

          <div data-layer="809fa3e6-bb77-4ce1-946e-f3500266c266" className="rectangle151"></div>
          <div data-layer="5d13ad48-a251-450a-9ec4-082232b92d7c" className="iAuthorizePlatinumHomeMortgageToVerifyMyCreditIveAlsoReadAndAgreedToPlatinumHomeMortgageTermsOfUsePrivacyPolicyAndConsentToReceiveElectronicLoanDocuments">I, authorize Platinum Home Mortgage to verify my credit. I’ve also read and agreed to Platinum Home Mortgage Terms of use, Privacy Policy, and Consent to receive Electronic Loan Documents.</div>
          
          <div data-layer="23f73094-e973-48ae-8794-88815883d5d7" className="firstName">First name</div>
          <div data-layer="9ff8109e-4e21-415e-aafe-7e77807f78a3" className="lastName">Last name</div>
          <div data-layer="50905b35-962b-47b6-8b49-5969149b0036" className="mobilePhone">Mobile phone</div>
          <div data-layer="430d530f-c6b9-4919-821e-402ee146d889" className="emailAddress">Email Address</div>
          <div data-layer="af760ea7-9f4b-45db-b266-b9c3ffbeeeee" className="socialSecurityNumber">Social Security Number</div>
          <div data-layer="4c62ab03-ac9f-4406-877e-b95910791490" className="address">Address</div>
          <div data-layer="6828a905-b1d4-41e7-bf7d-49c7189b2a49" className="aptunit">Apt/Unit</div>
          <div data-layer="07609ac1-7397-4d3f-a684-c9002dbdd5a9" className="city">City</div>
          <div data-layer="e30242ab-a038-4aa0-982f-d12dd5e12ede" className="state">State</div>
          <div data-layer="af40e765-ea4b-4c67-ae5e-d5a6900c51a0" className="zipcode">Zipcode</div>

          <button onClick={prev}>
            <div className="component75">
              <svg preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path13ef1fe56"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
              <div className="next">Prev</div>
            </div>
          </button>    

          <button onClick={submit}>
            <div className="component755">
              <svg preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path13ef1fe56"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
              <div className="submit">Submit</div>
            </div>
          </button>   
        </div>
    )
}

export default BuyStep7;
