import React from "react";

const BuyStep2 = props => {
  const { next, prev } = props
    return(
        <div>        
            {/* Page 2 */}
            <div data-layer="cb96147d-441b-4b16-80a6-f8aaac56398c" className="whenDoYouPlanOnPurchasingYourProperty268dc52b">When do you plan on purchasing your property?</div>
            <div data-layer="c306ca33-58c1-448b-a24b-c6c927e58b17" className="x03Months">0-3 months</div>
            <svg data-layer="6e18950c-4f07-4612-9915-4f68884ead77" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse30"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="994ea8d0-ce9a-47ed-9a73-8f0db24d2e63" className="x36Months">3-6 months</div>
            <svg data-layer="9383735d-e6ae-4e6d-8491-328750e2a6c1" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse31"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="4f1c8ebb-300a-4c50-b1b0-8420f80530aa" className="x6Months">6+ months</div>
            <svg data-layer="7feb09ee-938b-4916-b239-af0568f02921" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse32"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="55540092-e0e0-4cc9-8e9f-6e47a927526b" className="notSure65c65585">Not sure</div>
            <svg data-layer="c002e3dc-319a-481d-a26c-4eed24f95ac8" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse33"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="f55adc9b-9452-4867-9246-a0102be50651" className="whenDoYouPlanOnPurchasingYourProperty">When do you plan on purchasing your property?</div>
            <div data-layer="c6e9d41d-1769-46da-81cb-0222f38a446f" className="rectangle131"></div>

            <div data-layer="1f4b38cb-3e94-459e-93f8-b677d3979281" className="cityStateOrZip">City, state, or zip</div>

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

export default BuyStep2;
