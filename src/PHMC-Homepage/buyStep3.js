import React from "react";

const BuyStep3 = props => {
  const { next, prev } = props
    return(
        <div>        
            {/* Page 3 */}
            <div data-layer="20a4663d-0465-45eb-ae3c-0ceda40473f3" className="whatIsTheAddressOfTheNewProperty">What is the address of the new property</div>
            <div data-layer="d42fec65-d84f-4f79-ac03-14e7de8539c1" className="rectangle138"></div>
            <div data-layer="3189cf58-475a-4d68-95e0-65c795df81d2" className="rectangle136"></div>
            <div data-layer="8d49f85d-822d-40ef-a80d-c17183c41233" className="rectangle133"></div>
            <div data-layer="e123c210-8dcd-4957-a1cf-e23c6a2940cb" className="rectangle134"></div>
            <div data-layer="64c714c3-2274-4dfd-8133-c9b9c2a8b498" className="zipcode5b28c665">Zipcode</div>
            <div data-layer="558d758a-a0f1-4781-b8cb-c0b5516cf4b3" className="rectangle135"></div>

            <div data-layer="698983d4-a25d-4427-93e7-a1acff16ffe2" className="city3513a3aa">City</div>
            <div data-layer="ad8cc746-5b5c-4cc6-854a-bb6210aaf5e0" className="address166729b7">Address</div>
            <div data-layer="2513ab04-3d03-4461-9bf0-1eac9316503f" className="aptunitd4e11ff3">Apt/Unit</div>
            <div data-layer="fa50e241-8604-4c86-bbc0-fbc55f055a3a" className="statec9038e0c">State</div>

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

export default BuyStep3;
