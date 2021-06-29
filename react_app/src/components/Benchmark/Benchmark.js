import "./Benchmark.css";
import Survey from "./Survey";
import Result from "./Result";

function Benchmark({ showLJ, showJobs }) {
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
            <Survey showLJ={showLJ} showJobs={showJobs} />
            <Result showLJ={showLJ} showJobs={showJobs} />
        </div>
    );
}

export default Benchmark;
