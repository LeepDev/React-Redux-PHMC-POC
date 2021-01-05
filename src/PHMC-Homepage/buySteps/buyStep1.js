import React from "react";
import {useForm} from 'react-hook-form';

function BuyStep1(props) {
    const { next } = props
    const { register, handleSubmit, errors } = useForm();
    // const onSubmit = (data) => {
    //   alert(data);
    // };

    return (
        <div>        
            {/* Page 1 */}
            <div className="whereInTheProcessAreYou">Where in the process are you?</div>

            <div value="Research" className="processButton">
              <svg preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse26">
                <path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  />
              </svg>
              <span className="imJustResearching189bce5a">I’m just researching</span>
            </div>
            
            <div data-layer="2e4d4406-57a4-4ba1-b49e-f32f4ed9a0c5" className="imGoingToOpenHouses">I’m going to open houses</div>
            <svg data-layer="12ec651b-93fc-483b-9fc7-a2a3011b76e6" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse27"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="ab24e264-86be-49ec-9677-fefa0fbb13fa" className="imJustResearching9aca29fc">I’m just researching</div>
            <svg data-layer="a2641ff0-e209-4d76-bb14-1afc98e8b07f" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse28"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>
            <div data-layer="2641574c-00c2-49e5-b1d4-4c26f0393cec" className="imJustResearching">I’m not sure</div>
            <svg data-layer="8185fa2f-0b4f-45fb-aab4-a78e0a30ffcd" preserveAspectRatio="none" viewBox="-0.75 -0.75 37.5 40.5" className="ellipse29"><path d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></svg>

            <button onClick={next}>
              <div data-layer="cfd99181-9242-4dc4-9ab7-d3ae2f063679" className="component75">
                <svg data-layer="47571093-5942-454c-ae18-9f8722db4160" preserveAspectRatio="none" viewBox="-1.5 -1.5 178 69" className="path13ef1fe56"><path d="M 0 0 L 175 0 L 175 66 L 0 66 L 0 0 Z"  /></svg>
                <div data-layer="07b14246-4007-41ef-8cdb-b29042fa8c39" className="next">Next</div>
              </div>
            </button>    
            </div>
    );
}

export default BuyStep1;
