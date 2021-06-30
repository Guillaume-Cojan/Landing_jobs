import "./Benchmark.css";
import {useState} from "react";
import Survey from "./Survey";
import Result from "./Result";

function Benchmark() {
    const [ showResult, setShowResult] = useState(true);

    return (
        <div className="benchmark-container">
            <Survey setShowResult={setShowResult}/>
            <Result showResult={showResult}/>
        </div>
    );
}

export default Benchmark;
