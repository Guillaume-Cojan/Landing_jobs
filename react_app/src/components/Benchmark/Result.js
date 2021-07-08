import ResultNoshow from "../../assets/calculator_all.svg";
import ResultNoshowTalent from "../../assets/calculator_talent.svg";
import ResultNoshowCie from "../../assets/calculator_company.svg";
import VerticalBar from "./Graph";

function Result({ showLJ, showJobs, showResult, graphData }) {
    return showLJ ? (
        showJobs ? (
            showResult ? (
                <VerticalBar graphData={graphData} />
            ) : (
                <img
                    src={ResultNoshowCie}
                    alt="result-img"
                    className="no-result-img"
                />
            )
        ) : showResult ? (
            <VerticalBar graphData={graphData} />
        ) : (
            <img
                src={ResultNoshowTalent}
                alt="result-img"
                className="no-result-img"
            />
        )
    ) : showResult ? (
        <VerticalBar graphData={graphData} />
    ) : (
        <img src={ResultNoshow} alt="result-img" className="no-result-img" />
    );
}

export default Result;
