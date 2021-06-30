import ResultNoshow from "../../assets/Result-noshow.svg";
import VerticalBar from "./Graph"


function Result({showResult}) {
    
    return (
        <div>
        { showResult 
            ? <img src={ResultNoshow} alt="result-img" className="no-result-img" />
            : < VerticalBar /> 
        }
        </div>

    );
}

export default Result;
