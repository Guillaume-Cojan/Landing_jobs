import "./Benchmark.css";
import { useState } from "react";
import Survey from "./Survey";
import Result from "./Result";

<<<<<<< HEAD


function Benchmark({ showLJ, showJobs, t }) {
    const [ showResult, setShowResult] = useState(false);
    const [ graphData, setGraphData] = useState({})
=======
function Benchmark({ showLJ, showJobs }) {
    const [showResult, setShowResult] = useState(false);
    const [graphData, setGraphData] = useState({ average_salary: 0 });
>>>>>>> 5cf75b41c9778def86988943493bcf6f5d502bc7

    return (
        <div
            className={
                showLJ
                    ? showJobs
                        ? "benchmark-container-cie"
                        : "benchmark-container-talent"
                    : "benchmark-container"
            }
        >
<<<<<<< HEAD
            <Survey showLJ={showLJ} showJobs={showJobs} setShowResult={setShowResult} setGraphData={setGraphData} translate={t}/>
            <Result showLJ={showLJ} showJobs={showJobs} showResult={showResult} graphData= {graphData} />
=======
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
>>>>>>> 5cf75b41c9778def86988943493bcf6f5d502bc7
        </div>
    );
}

export default Benchmark;
