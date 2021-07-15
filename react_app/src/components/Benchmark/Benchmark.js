import "./Benchmark.css";
import { useState } from "react";
import Survey from "./Survey";
import Result from "./Result";

function Benchmark({ showLJ, showJobs }) {
    const [showResult, setShowResult] = useState(false);
    const [graphData, setGraphData] = useState({ average_salary: 0 });

    return (
        <div
            className={
                showLJ
                    ? showJobs
                        ? "benchmark-container-company"
                        : "benchmark-container-talent"
                    : "benchmark-container"
            }
        >
            <div className="benchmark-content">
            <Survey
                showLJ={showLJ}
                showJobs={showJobs}
                setShowResult={setShowResult}
                setGraphData={setGraphData}
            />
            <Result
                showLJ={showLJ}
                showJobs={showJobs}
                showResult={showResult}
                graphData={graphData}
            />
            </div>
        </div>
    );
}

export default Benchmark;
