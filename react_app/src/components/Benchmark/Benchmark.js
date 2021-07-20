import "./Benchmark.css";
import { useState } from "react";
import Survey from "./Survey";
import Result from "./Result";
import { useTranslation } from "react-i18next";

function Benchmark({ showLJ, showJobs }) {
    const { t } = useTranslation();
    const [showResult, setShowResult] = useState(false);
    const [graphData, setGraphData] = useState({ average_salary: 0 });

    return (
        <>
            <div className="benchmark-title">
                <h2
                    className={
                        showLJ
                            ? showJobs
                                ? "survey-title-company"
                                : "survey-title-talent"
                            : "survey-title"
                    }
                >
                    {t("survey_title")}
                </h2>
                <p className="survey-p">{t("survey_p")}</p>
            </div>
            <div
                className={
                    showLJ
                        ? showJobs
                            ? "benchmark-container-company"
                            : "benchmark-container-talent"
                        : "benchmark-container"
                }
            >
                <div className="survey-content">
                    <Survey
                        showLJ={showLJ}
                        showJobs={showJobs}
                        setShowResult={setShowResult}
                        setGraphData={setGraphData}
                        translate={t}
                    />
                </div>
                <div className="result-content">
                    <Result
                        showLJ={showLJ}
                        showJobs={showJobs}
                        showResult={showResult}
                        graphData={graphData}
                    />
                </div>
            </div>
        </>
    );
}

export default Benchmark;
