import React from "react";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import "./Benchmark.css";

const override = css`
    display: flex;
    justify-content: center;
    margin: 5;
    border-color: #3bbcb0;
    color: #3bbcb0;
`;

const VerticalBar = ({ graphData, showLJ, showJobs }) => {
    const averageSalary = graphData.average_salary;
    const minimumSalary = graphData.minimum_salary;
    const maximumSalary = graphData.maximum_salary;
    let [loading] = useState(true);
    let [color] = useState("#3bbcb0");

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const { t } = useTranslation();
    const data = {
        labels: [t("minimum_salary"), t("average_salary"), t("maximum_salary")],
        datasets: [
            {
                label: "€ per year",
                data: [minimumSalary, averageSalary, maximumSalary],
                backgroundColor: [
                    "rgba(123,186,250,0.5452556022408963)",
                    "rgba(231,199,242,0.7833508403361344)",
                    "rgba(0,219,209,0.2580847338935574)",
                ],
                borderColor: [
                    "rgba(43,146,252,1)",
                    "rgba(202,48,255,1)",
                    "rgba(0,207,197,1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const Swal = require("sweetalert2");
    const tryAgain = () => {
        setTimeout(() => {
            if (graphData.average_salary == null) {
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: t("graph_not_enough_data"),
                    confirmButtonColor: "#3bbcb0",
                });
            }
        }, 100);
    };

    return (
        <div className="graph-container">
            <h3
                className={
                    showLJ
                        ? showJobs
                            ? "graph-title-company"
                            : "graph-title-talent"
                        : "graph-title"
                }
            >
                {t("calculator_title")}
            </h3>

            {graphData.average_salary === 0 ? (
                <div className="loader">
                    <SyncLoader
                        color={color}
                        loading={loading}
                        css={override}
                        size={25}
                    />
                </div>
            ) : (
                <Bar data={data} options={options} />
            )}
            <p align="center" className="mention">
                {t("based_on_the_answers_of_our_survey_respondents")}
            </p>
            {tryAgain()}
        </div>
    );
};

export default VerticalBar;
