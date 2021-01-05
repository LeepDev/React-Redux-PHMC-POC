import React from "react";

const BuyStep5 = props => {
  const { next, prev } = props
    return(
        <div>        
            {/* Page 5 */}
          <div data-layer="06440609-3d58-4592-958f-9755971d1d51" className="whatsTheExpectedMonthlyRentalIncome927dfb58">What’s the expected monthly rental income?</div>
          <div data-layer="789816c8-6b06-415e-a71d-6c7ec09f43d3" className="rectangle155"></div>
          <div data-layer="7baa769c-1a6a-491e-b6f9-de7f295968a4" className="ifTheresAnExistingTenantEnterTheRentAmountFromTheirLeaseIfYoureBringingInNewTenantsEnterTheExpectedRentAmount">If there’s an existing tenant, enter the rent amount from their lease. If you’re bringing in new tenants, enter the expected rent amount. </div>

          <div data-layer="c8f6017a-2afd-4e85-92c2-74f9fa2ea8f3" className="xff594eea">$</div>

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

export default BuyStep5;
