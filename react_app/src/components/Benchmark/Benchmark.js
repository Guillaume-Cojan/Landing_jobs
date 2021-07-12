import "./Benchmark.css";
import {useState} from "react";
import Survey from "./Survey";
import Result from "./Result";



function Benchmark({ showLJ, showJobs, t }) {
    const [ showResult, setShowResult] = useState(false);
    const [ graphData, setGraphData] = useState({})

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
            <Survey showLJ={showLJ} showJobs={showJobs} setShowResult={setShowResult} setGraphData={setGraphData} translate={t}/>
            <Result showLJ={showLJ} showJobs={showJobs} showResult={showResult} graphData= {graphData} />
        </div>
    )
}

export default Benchmark;
