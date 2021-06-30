import ResultNoshow from "../../assets/Result-noshow.svg";
import ResultNoshowTalent from "../../assets/Result-noshow-talent.png";
import ResultNoshowCie from "../../assets/Result-noshow-cie.png";

function Result({ showLJ, showJobs }) {
    return showLJ ? (
        showJobs ? (
            <img
                src={ResultNoshowCie}
                alt="result-img"
                className="no-result-img"
            />
        ) : (
            <img
                src={ResultNoshowTalent}
                alt="result-img"
                className="no-result-img"
            />
        )
    ) : (
        <img src={ResultNoshow} alt="result-img" className="no-result-img" />
    );
}

export default Result;
