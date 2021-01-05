
import React from "react";
import Header from "../Header";
import Footer2 from "../Footer2";
import BuyForm from "../buyTestForm";

import "./css/buy.css";

class Buy extends React.Component {

  render() {    
    return (
        <div data-layer="32cbb582-2c43-4283-9db0-9b97573fbcbb" className="buy"> 
          <div data-layer="f4568106-93e9-45bf-8666-5b491ff50f3d" className="rectangle116"></div>
          <div data-layer="a542cee0-ca5f-4207-a88f-c2a8b4c46951" className="rectangle117"></div>
          <Header></Header>
          {/* Buy Header */}
          <div data-layer="d23ee23f-0e22-4b21-8bdc-2fb0d848d548" className="buy3677a907">Buy</div>
          <svg data-layer="f4bc24a3-6b05-4c88-9c61-d2eeb1b75494" preserveAspectRatio="none" viewBox="0 -1.5 1591 3" className="line16"><path d="M 0 0 L 1591 0"  /></svg>
          {/* Call Button (Right Side) */}
          <div data-layer="4eb9529e-804f-4609-af6d-1d1aae6a566c" className="component628">            
            <svg data-layer="885b8a57-3bfa-4e87-bcdf-1b76088a0c74" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1c8fc5284"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="2a00e0fe-237d-4c05-9d03-660e100d16a9" className="call">Call</div>
          </div>
          {/* Email Button (Right Side) */}
          <div data-layer="ec2056ac-ee4e-425d-820d-c2a25e5fc37d" className="component629">
            <svg data-layer="cb409eec-dab3-44fb-9f13-38e6471141b2" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path11a80c564"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="7f9e8b11-4c08-4698-9477-ea5b157c37b8" className="email">Email</div>
          </div>
          {/* Chat Button (Right Side) */}
          <div data-layer="b2c79d5f-948b-4d10-9cab-940fec367e65" className="component630">
            <svg data-layer="fcfbe32b-99f0-4114-96eb-aac20fe5f002" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path1"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
            <div data-layer="51915c6f-8b42-484d-bef5-fddbd9eaf924" className="chat">Chat</div>
          </div>
          {/* Girl Image (Right Side) */}
          <svg data-layer="d7c0e62b-d65f-4489-88ae-d7ec99ddd729" preserveAspectRatio="none" viewBox="0 0 175 175" className="ellipse23"><defs><pattern id="img-ellipse23" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlinkHref={require('../assets/buy/ellipse23.png')} x="0" y="0" width="175.00px" height="175.00px" /></pattern></defs><path d="M 87.5 0 C 135.8249053955078 0 175 39.17509078979492 175 87.5 C 175 135.8249053955078 135.8249053955078 175 87.5 175 C 39.17509078979492 175 0 135.8249053955078 0 87.5 C 0 39.17509078979492 39.17509078979492 0 87.5 0 Z" fill="url(#img-ellipse23)" /></svg>


          <BuyForm></BuyForm>

          <Footer2></Footer2>
        
        
        </div>

    );
  }
}

Buy.propTypes = {

}

Buy.defaultProps = {

}


export default Buy;
          