import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import "./Benchmark.css"

const VerticalBar = () => {

    const [ averageSalary, setAverageSalary ]  = useState(0);
    const [ minimumSalary, setMinimumSalary ] = useState(0);
    const [ maximumSalary, setMaximumSalary ] = useState(0);


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
    
    const getAverageResult = () => {
        fetch("http://localhost:5000/salarybenchmark/")
        .then(response => response.json())
        .then((data) => {
          setAverageSalary(data.average_salary)
          setMinimumSalary(data.minimum_salary)
          setMaximumSalary(data.maximum_salary)
        })
    } 

    useEffect( getAverageResult, [])

    const data = {
        labels: ['Minimum Salary', 'Average Salary', 'Maximum Salary'],
        datasets: [
          {
            label: '€ per year',
            data: [minimumSalary, averageSalary, maximumSalary],
            backgroundColor: [
              'rgba(123,186,250,0.5452556022408963)',
              'rgba(231,199,242,0.7833508403361344)',
              'rgba(0,219,209,0.2580847338935574)',
            ],
            borderColor: [
              'rgba(43,146,252,1)',
              'rgba(202,48,255,1)',
              'rgba(0,207,197,1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
  return (
  <div>
    <div className='header'>
      <h1 className='title'>Average Salary Calculation</h1>
    </div>
    <Bar data={data} options={options} />
    <p> * based on the answers of our survey respondents</p>
  </div>)
};

export default VerticalBar;