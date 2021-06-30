import ResultNoshow from "../../assets/Result-noshow.svg";
import ResultNoshowTalent from "../../assets/Result-noshow-talent.png";
import ResultNoshowCie from "../../assets/Result-noshow-cie.png";
import VerticalBar from "./Graph"

function Result({ showLJ, showJobs, showResult }) {
    return showLJ ? (
        showJobs ? (
            showResult 
                ?  < VerticalBar /> 
                : <img
                    src={ResultNoshowCie}
                    alt="result-img"
                    className="no-result-img"/>
        ) : (
            showResult 
            ?  < VerticalBar /> :
                <img
                    src={ResultNoshowTalent}
                    alt="result-img"
                    className="no-result-img"
                />
        )
    ) : (
        showResult 
            ?  < VerticalBar /> 
            : <img src={ResultNoshow} alt="result-img" className="no-result-img" />
    );
}

export default Result;
