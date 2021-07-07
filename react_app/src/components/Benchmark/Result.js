import ResultNoshow from "../../assets/calculator_all.png";
import ResultNoshowTalent from "../../assets/calculator_talent.png";
import ResultNoshowCie from "../../assets/calculator_company.png";
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
