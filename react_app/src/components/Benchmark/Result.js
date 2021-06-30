import {useState} from "react";
import ResultNoshow from "../../assets/Result-noshow.svg";

function Result({salaryData}) {

    return (
        <img src={ResultNoshow} alt="result-img" className="no-result-img" />
    );
}

export default Result;
