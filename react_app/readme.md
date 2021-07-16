<br />
<p align="center">
  <a href="https://landingpay.netlify.app/">
    <img src="src/assets/LJ_Logo.svg" alt="Logo" width="200">
  </a>

  <h2 align="center">Landing Jobs Salaries - Front End</h2>

  <p align="center">
    <br />
    <br />
    <a href="https://landingpay.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/Guillaume-Cojan/Landing_jobs/issues">Report Bug</a>
    ·
    <a href="https://github.com/Guillaume-Cojan/Landing_jobs/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#color-reference">Color Reference</a> </li>
    <li><a href="#dependencies">Dependencies</a> </li>
    <li><a href="#apis">APIs</a> </li>
    <li><a href="#components">Components</a></li>
        <ul>
            <li><a href="#intro"> Intro </a></li>
            <li><a href="#profile"> Profile </a></li>
            <li><a href="#profile"> Benchmark </a></li>
            <li><a href="#profile"> Subscribe </a></li>
            <li><a href="#profile"> Footer </a></li>
        </ul>     
    <li><a href="#contact">Contact the Developers</a></li>
  </ol>
</details>

## About The Project

---
<img src="src/assets/BasicNoResult.svg" align="right"
     alt="salary benchmark logo" width="200" height="178">

<img alt="React" src="https://img.shields.io/badge/React-white?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />

A  salary benchmark tool with clean design and easy to use interface, created with React. When setting out to build our product, the vision was clear: an application that requires no unnecessary extra steps, no endless forms to fill-up and no restrictions!

<br />

<!-- GETTING STARTED -->
## Getting Started

---
To get a local copy up and running follow these simple example steps.

1. Clone the project

```bash
  git clone https://github.com/Guillaume-Cojan/Landing_jobs.git
```

2. Go to the project directory

```bash
  cd Landing_jobs
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm start
```
5. Happy coding!

<br />

<!-- ABOUT THE PROJECT -->
## Color Reference

---

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Downy| ![#73d3ca](https://via.placeholder.com/10/73d3ca?text=+) #73d3ca |
| Cornflower Blue| ![#4293EA](https://via.placeholder.com/10/4293EA?text=+) #4293ea |
| Dark Orchid | ![#a729d2](https://via.placeholder.com/10/a729d2?text=+) #a729d2 |
| Black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |

<br/>

<!-- ABOUT THE PROJECT -->
## Dependencies

---

<!-- ABOUT THE PROJECT -->
## APIs

---
 
## Components

---

### Intro

* English / Portuguese / French option description

### Profile

 * Selecting one of the profiles will trigger a separate component to appear on the page: Landing Jobs Container. The content of this latter component will depend on which profile you selected.
 * Your selection will also determine a new color scheme of the webpage.

 <img src="src/assets/profiles-screenshot.png" align="center"
     alt="profiles">

### Benchmark

* react-select 
* react-chart - bar graph 
* Only two fields are mandatory (Category and Experience) but you are welcome to explore the result for different selections
* API: "https://landing-pay-server.herokuapp.com/salarybenchmark/"


```http
  POST /salarybenchmark
```

### Landing Jobs Container

* API: "https://landing.jobs/api/v1/companies/[id]"
* API: "https://landing.jobs/api/v1/jobs?limit=3&offset=47"
* Explanation:
    + for why two APIs (company name and logo are separate)
    + for the jobs fetch parameters

```http
  GET /api/v1/companies/[id]
```

```http
  GET /api/v1/jobs?limit=3&offset=47
```
For more information: 
[Landing.Jobs API Documentation](https://github.com/LandingJobs/LandingJobs-api)

### Subscribe

---
* sweet alert

### Footer

---
* consistent with the footer of the parent company, Landing.Jobs

<!-- CONTACT -->
## Contact The Developers

---
Anna Gosme - [Github](https://github.com/AnnaGosme) - [LinkedIn](https://www.linkedin.com/in/anna-gosme/)  

Carmen Llamas - [Github](https://github.com/makrmeen) - [LinkedIn](https://www.linkedin.com/in/makarmeen/)

Guillaume Cojan - [Github](https://github.com/Guillaume-Cojan) - [LinkedIn](https://www.linkedin.com/in/guillaumecojan/)

Anca Gheorghe - [Github](https://github.com/anca2196) -  [LinkedIn](https://www.linkedin.com/in/anca-laura-gheorghe/)

<br />

<!-- DEMO -->
## Demo

---
Click the logo in order to view our app. Enjoy! 😊

<p align="center">
  <a href="https://landingpay.netlify.app/">
    <img src="src/assets/LJ_Logo.svg" alt="Logo" >
  </a>

