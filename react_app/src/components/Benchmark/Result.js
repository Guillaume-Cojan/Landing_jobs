// import ResultNoshow from "../../assets/calculator_all.svg";
import ResultNoshow from "../../assets/BasicNoResult.svg";
import ResultNoshowTalent from "../../assets/TalentNoResult.svg";
import ResultNoshowCie from "../../assets/CompanyNoResult.svg";
import VerticalBar from "./Graph";

function Result({ showLJ, showJobs, showResult, graphData }) {
    return showLJ ? (
        showJobs ? (
            showResult ? (
                <VerticalBar
                    graphData={graphData}
                    showJobs={showJobs}
                    showLJ={showJobs}
                />
            ) : (
                <img
                    src={ResultNoshowCie}
                    alt="result-img"
                    className="no-result-img"
                />
            )
        ) : showResult ? (
            <VerticalBar
                graphData={graphData}
                showJobs={showJobs}
                showLJ={showJobs}
            />
        ) : (
            <img
                src={ResultNoshowTalent}
                alt="result-img"
                className="no-result-img"
            />
        )
    ) : showResult ? (
        <VerticalBar
            graphData={graphData}
            showJobs={showJobs}
            showLJ={showJobs}
        />
    ) : (
        <img src={ResultNoshow} alt="result-img" className="no-result-img" />
    );
}

export default Result;
