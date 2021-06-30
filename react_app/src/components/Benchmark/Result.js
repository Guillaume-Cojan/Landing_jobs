import {useState} from "react";
import ResultNoshow from "../../assets/Result-noshow.svg";
import VerticalBar from "./Graph"

function Result({salaryData}) {
    const [ showResult, setShowResult] = useState(false);
    
    return (
        <div>
        { showResult 
            ? <img src={ResultNoshow} alt="result-img" className="no-result-img" />
            : < VerticalBar/> 
        }
        </div>

    );
}

export default Result;
