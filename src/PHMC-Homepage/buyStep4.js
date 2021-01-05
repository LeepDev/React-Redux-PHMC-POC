import React from "react";

const BuyStep4 = props => {
  const { next, prev } = props
    return(
        <div>        
            {/* Page 4 */}
          <div data-layer="142e053f-b031-4c51-b4f9-3241e10d8fa9" className="whatTypeOfHomeAreYouMostInterestedIn">What type of home are you most interested in?</div>
          <div data-layer="ddd630d6-9db6-4731-a362-2e5de2a5a6ea" className="primaryResidence">Primary residence</div>
          <svg data-layer="c2e24d3d-34be-4a2c-9494-020146aa4777" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse34"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="9b65793e-4808-433c-8146-736c1bafa091" className="secondHome">Second home</div>
          <svg data-layer="6a425d2f-e336-41eb-ba82-b7ffe49b0aa8" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse35"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="5e91e20f-0728-4489-b311-ca71a52e5c67" className="investment">Investment</div>
          <svg data-layer="813a0401-5835-4a09-85a9-695f1b928d5d" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse36"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          
          <div data-layer="cb32d5e3-2656-4942-b1bb-b0105cea894e" className="whatPropertyTypeWouldThisBe">What property type would this be?</div>
          <div data-layer="dd8283cc-2009-4701-bff7-f79d508cbd50" className="singleFamily">Single Family</div>
          <svg data-layer="d58949d3-a8c2-4079-8767-b38757ec21e6" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse37"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="6091ebfc-861f-438b-90ad-9f1cea2ee6f2" className="townhouseOrCondo">Townhouse or Condo</div>
          <svg data-layer="6042108f-1ec6-46fd-8e2b-01bbfa3e9057" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse38"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="96ffd317-931e-4bd9-9d46-e988500b07db" className="x24Units">2-4 units</div>
          <svg data-layer="53f40f7c-ef06-49ce-8350-b9f1180e1148" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse39"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>

          <button onClick={next}>
              <div data-layer="cfd99181-9242-4dc4-9ab7-d3ae2f063679" className="component755">
                <svg data-layer="47571093-5942-454c-ae18-9f8722db4160" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path13ef1fe56"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
                <div data-layer="07b14246-4007-41ef-8cdb-b29042fa8c39" className="next">Next</div>
              </div>
            </button>    

            <button onClick={prev}>
              <div className="component75">
                <svg data-layer="47571093-5942-454c-ae18-9f8722db4160" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path13ef1fe56"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
                <div data-layer="07b14246-4007-41ef-8cdb-b29042fa8c39" className="next">Prev</div>
              </div>
            </button>    
        </div>
    )
}

export default BuyStep4;
