<br />
<p align="center">
  <a href="https://landingsalary.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src="react_app/src/assets/LJ_Logo.svg" alt="Logo" width="200">
  </a>

  <h1 align="center">Landing Jobs Salaries</h1>

  <p align="center">
Use our salary benchmark tool to check how your salary compares to that of your peers!
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
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
              <li><a href="#about-the-project">About The Project</a></li>
              <li><a href="#getting-started">Getting Started</a></li>
              <li><a href="#color-reference">Color Reference</a> </li>
              <li><a href="#dependencies">Dependencies</a> </li>
              <ul>
                  <li><a href="#react-i18next">react-i18next</a></li>
                  <li><a href="#react-select">react-select</a></li>
                  <li><a href="#react-spinners">react-spinners</a></li>
                  <li><a href="#sweet-alert">sweet-alert</a></li>
                  <li><a href="#react-chartjs-2">react-chartjs-2</a></li>
                </ul>
                <li><a href="#apis">APIs</a> </li>
                </ul>
        <li><a href="#backend">Backend</a></li>
     <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#getting-started-backend">Getting Started - Backend</a></li>
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
      <li><a href="#license">License</a></li>
      <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#contact">Contact the Developers</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
<br>

A benchmark tool that can be used by either employees or employers in order to gauge how salaries vary for various tech job roles - depending of course on location, experience and education. 
<br/>

![Image](react_app/src/assets/LJ_mainscreenshot.png)

### Built With

* [React](https://reactjs.org/)
* [Node.js](https://nodejs.dev/)
* [Express](https://expressjs.com/)
* [mySQL](https://www.mysql.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy of the react app up and running follow these simple steps.

1. Clone the project

```bash
  git clone https://github.com/Guillaume-Cojan/Landing_jobs.git
```

2. Go to the project directory

```bash
  cd Landing_jobs
  cd react_app
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

## Color Reference


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Downy| ![#73d3ca](https://via.placeholder.com/10/73d3ca?text=+) #73d3ca |
| Cornflower Blue| ![#4293EA](https://via.placeholder.com/10/4293EA?text=+) #4293ea |
| Dark Orchid | ![#a729d2](https://via.placeholder.com/10/a729d2?text=+) #a729d2 |
| Black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |

<br/>

## Dependencies

### > react-i18next

React-i18next is a powerful internationalization framework for React / React Native which is based on i18next.
The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes.

```bash
  npm install react-i18next i18next --save

 # if you'd like to detect user language and load translation
  npm install i18next-http-backend i18next-browser-languagedetector --save
```

_Learn more about react-i18next : [Documentation](https://react.i18next.com/)_

**Usage**

<p align="center">
<img src="react_app/src/assets/en-intro.png" alt="English" width="400">
<img src="react_app/src/assets/pt-intro.png" alt="Portugese" width="400">
<img src="react_app/src/assets/fr-intro.png" alt="French" width="400">
</p>

### > react-select 

A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.


```bash
npm install --save react-select

  # or

yarn add react-select
```

**Usage**

```javascript
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
```

_For live demos and comprehensive documentation see : [Documentation](https://react-select.com/home)_

### > react-spinners

A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen).

```bash
npm install --save react-spinners

  # or

yarn add react-spinners
```

**Usage**

IMPORTANT: This package uses emotion. Remember to add the plugin to .babelrc, for example:

```json
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
```

Example

```javascript
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default App;
```

_For comprehensive documentation see : [Documentation](https://github.com/davidhu2000/react-spinners)_
_For live demos see: [React-Spinners](https://www.davidhu.io/react-spinners/)_

### > sweetalert2

A beautiful, responsive, customizable, accessible replacement for Javascript's pop-up boxes - with ZERO dependencies!

```bash
npm install --save sweetalert2

  # or

yarn add sweetalert2
```

**Usage**

```javascript
  // ES6 Modules or TypeScript
  import Swal from 'sweetalert2'

  // CommonJS
  const Swal = require('sweetalert2')
```

_For live demos and comprehensive documentation see : [Documentation](https://sweetalert2.github.io/)_


### > react-chartjs-2

For this project we used the library's "Vertical Bar Chart" but many more options are available at [React-chartjs-2 Demo](https://reactchartjs.github.io/react-chartjs-2/#/) !

<p align="center">
  <img src="react_app/src/assets/graphresult-screenshot.png" alt="Logo" width="300" > 
</p>
<br />

```bash
npm install --save react-chartjs-2 chart.js

  # or

yarn add react-chartjs-2 chart.js
```
**Usage**

```javascript
  import { Doughnut } from 'react-chartjs-2';

  <Doughnut data={...} />
```
_Github Source: [React-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)_

## APIs

Our web application makes use of two separate APIs. Firstly, in order to have relevant and up to date job postings on the JobCard components, we use the Landing.Jobs API with the following endpoints:

URL: `https://landing.jobs/api/v1/jobs`

```http
  GET /api/v1/jobs?limit=3&offset=47
```

Example response:

```JSON
[
    {
        "id": 1,
        "city": "East Terry",
        "company_id": 1,
        "country_code": "ML",
        "country_name": "Mali",
        "currency_code": "EUR",
        "expires_at": "2015-05-21",
        "nice_to_have": "Esse veniam vitae. Dolore ipsa sed quam modi quis quidem qui. Culpa facilis illum non. Doloribus est eum sit.",
        "perks": "Officiis aut fugiat temporibus consequatur perspiciatis sint cumque.",
        "published_at": "2015-02-09T18:34:30.270Z",
        "reward": 500,
        "remote": false,
        "relocation_paid": false,
        "role_description": "---\n- Autem nemo quia recusandae harum consequatur eos. Recusandae iure quia modi qui.\n ",
        "salary_low": null,
        "salary_high": null,
        "successful?": false,
        "title": "Regional Creative Specialist",
        "work_from_home": false,
        "created_at": "2015-02-09T18:34:30.270Z",
        "updated_at": "2015-02-12T19:01:56.042Z",
        "type": "Contract",
        "tags": [
            "Arduino",
            "Oberon"
        ]
    },
    {
        "id": 2,
        "city": "Port Timothyland",
        "company_id": 1,
        "country_code": "ML",
        "country_name": "Mali",
        "currency_code": "EUR",
        "expires_at": "2015-02-11",
        "nice_to_have": "Amet nemo quia temporibus officiis vero et.",
        "perks": "Quibusdam adipisci aspernatur aut amet dignissimos nihil asperiores.",
        "published_at": "2015-02-11T13:17:01.621Z",
        "reward": 900,
        "remote": false,
        "relocation_paid": false,
        "role_description": "---\n- Neque nobis ut enim porro autem. Voluptatem nulla et quia. Tenetur enim fugiat quo\n  praesentium eos amet aliquam. Sit facilis tempore quidem quas explicabo ipsam sed.\n",
        "salary_low": null,
        "salary_high": null,
        "successful?": false,
        "title": "Dynamic Infrastructure Liason",
        "work_from_home": false,
        "created_at": "2015-02-11T13:17:01.621Z",
        "updated_at": "2015-02-12T19:01:56.042Z",
        "type": "Part-time",
        "tags": [
            "Lisp",
            "LPC",
            "xBase"
        ]
    },
    {
        "id": 3,
        "city": "Botsfordborough",
        "company_id": 1,
        "country_code": "ML",
        "country_name": "Mali",
        "currency_code": "EUR",
        "expires_at": "2015-04-01",
        "nice_to_have": "Excepturi ratione debitis nulla.",
        "perks": "Blanditiis vel ea suscipit et quae. Eveniet magnam pariatur ullam rem ut.",
        "published_at": "2015-02-11T00:28:01.683Z",
        "reward": 600,
        "remote": false,
        "relocation_paid": false,
        "role_description": "---\n- A aut itaque magni ut. Voluptas quos qui ullam mollitia animi nam. Et qui voluptatibus.\n",
        "salary_low": null,
        "salary_high": null,
        "successful?": false,
        "title": "Corporate Infrastructure Liason",
        "work_from_home": false,
        "created_at": "2015-02-11T00:28:01.683Z",
        "updated_at": "2015-02-12T19:01:56.042Z",
        "type": "Freelance",
        "tags": [
            "Go",
            "JScript",
            "Slate"
        ]
    }
]
```


This GET request with pagination set to the last page will ensure that our website will display the most recent last 3 job postings. However, the object received only contains a company_id, so another fetch is necessary in order to display the company name and logo on our Job Cards.

URL: `https://landing.jobs/api/v1/companies/[id]`

```http
  GET /api/v1/companies/[id]
```

Example response:
```JSON
{
    "id": 1,
    "name": "Hackett, Treutel and Hartmann",
    "description": "facilitate supply-chains",
    "logo_url": "https://example.jpg",
    "website_url": "http://cristnienow.info/alyon",
    "created_at": "2015-02-12T19:01:34.529Z",
    "updated_at": "2015-02-12T19:01:34.529Z"
}
```
Result:

<p align="center">
  <img src="react_app/src/assets/job-card-screenshot.png" alt="Logo" > 
</p>

_For more information: [Landing.Jobs API Documentation](https://github.com/LandingJobs/LandingJobs-api)_

Secondly, Landing.Jobs Salary uses an API developed by us which retrieves the salary data necessary in order to generate a result when the user presses the "Calculate" button.

URL: `https://landing-pay-server.herokuapp.com/salarybenchmark/`

Example response:
```JSON
{
    "average_salary": 32500.00,
    "maximum_salary": 32500,
    "minimum_salary": 32500
}
 ```

---

<br/>

<br/>

<br/>

### Prerequisites

Here is a list of things you need in order to use the web application and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* [node.js](https://nodejs.org/en/download/)
* [mySQL](https://dev.mysql.com/downloads/installer/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Guillaume-Cojan/Landing_jobs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Happy coding!

### API

URL: `https://landing-pay-server.herokuapp.com/salarybenchmark/`

 ```http
  POST /salarybenchmark/
```

 ```http
  POST /subscribe/
```


<!-- LICENSE -->
## License

Distributed under the Landing.Jobs License.

<p align="center">
<img src="react_app/src/assets/LJicon.png" alt="Logo" width="90" height="90"> 
</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Many thanks to our amazing client [Landing.Jobs](https://landing.jobs/) for offering us this opportunity to work on an exciting tool for both tech talents and companies! 

<p align="center">
<img src="react_app/src/assets/LJicon.png" alt="Logo" width="90" height="90"> 
</p>

<!-- CONTACT -->
## Contact The Developers

Guillaume Cojan - [Github](https://github.com/Guillaume-Cojan) - [LinkedIn](https://www.linkedin.com/in/guillaumecojan/)

Anca Gheorghe - [Github](https://github.com/anca2196) -  [LinkedIn](https://www.linkedin.com/in/anca-laura-gheorghe/)

Anna Gosme - [Github](https://github.com/AnnaGosme) - [LinkedIn](https://www.linkedin.com/in/anna-gosme/)  

Carmen Llamas - [Github](https://github.com/makrmeen) - [LinkedIn](https://www.linkedin.com/in/makarmeen/)

<p align="center">
<img src="react_app/src/assets/LJicon.png" alt="Logo" width="50" height="50"> 
</p>

## Demo

Click on the logo in order to view our app. Enjoy! 😊

<p align="center">
  <a href="https://landingsalary.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src="react_app/src/assets/LJ_Logo.svg" alt="Logo" width="400">
  </a>
</p>
