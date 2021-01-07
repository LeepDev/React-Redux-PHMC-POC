import React from "react";

const BuyStep6 = props => {
  const { next, prev } = props
    return(
        <div>        
            {/* Page 6 */}
          <div data-layer="fcbc6ece-a338-495f-a037-b4218cf4366a" className="howManyUnitsWillTheInvestmentHave">How many units will the investment have?</div>
          <div data-layer="6311da4c-cb36-4890-82aa-7d7575b47a78" className="x2Units">2 units</div>
          <svg data-layer="05591da7-e83a-47ab-b7d0-8bc9c7d7aabd" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse40"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="b3828f02-c183-454f-9f86-0fea7a3af9e5" className="x3Units">3 units</div>
          <svg data-layer="1ec6cea2-cdd6-41e0-997b-219eada2331b" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse41"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="39ca35d8-51ba-44df-abfc-e2daba3b5f60" className="x4Units">4 units</div>
          <svg data-layer="4637fa86-6758-4f66-9189-0f108b5f1290" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse42"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
          <div data-layer="ded91906-d2f6-4162-8f15-b4572b5574db" className="notSure">Not sure</div>
          <svg data-layer="fab257f2-d440-406a-a452-8d5c4c3e57ec" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse43"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>

          <div data-layer="bb250e4a-479e-4542-9236-14bbb7322ab9" className="whatsTheExpectedMonthlyRentalIncome">What’s the expected monthly rental income?</div>
          <div data-layer="5ae3cfd6-e1f2-499e-9262-92fe2f5933e7" className="rectangle153"></div>
          <div data-layer="07045ac0-8915-43e4-8425-7850f6b16dc5" className="ifTheresAnExistingTenantEnterTheRentAmountFromTheirLeaseIfYoureBringingInNewTenantsEnterTheExpectedRentAmount6b686666">If there’s an existing tenant, enter the rent amount from their lease. If you’re bringing in new tenants, enter the expected rent amount. </div>

          <div data-layer="c9130e0e-278e-4c84-88c5-0376d84391f6" className="x89edc884">$</div>

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

export default BuyStep6;
