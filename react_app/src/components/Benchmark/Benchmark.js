import "./Benchmark.css";
import {useState} from "react";
import Survey from "./Survey";
import Result from "./Result";



function Benchmark({ showLJ, showJobs }) {
    const [ showResult, setShowResult] = useState(false);

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
            <Survey showLJ={showLJ} showJobs={showJobs} setShowResult={setShowResult}/>
            <Result showLJ={showLJ} showJobs={showJobs} showResult={showResult}/>
        </div>
    )
}

export default Benchmark;
