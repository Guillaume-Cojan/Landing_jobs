import React from 'react'
// TODO pass props 

class connectSurvey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Work_Company_PT_District: "",
        Job_Role_Original: "",
        Working_Experience: "",
      };
    }
  
    fetchUserData = () => {
      fetch("/salarybenchmark")
        .then((res) => res.json())
        .then((data) => this.setState({ users: data }));
    };
  
    componentDidMount() {
      this.fetchUserData();
    }
  
    handleChange_Work_Company_PT_District = (e) => {
      this.setState({
        Work_Company_PT_District: e.target.value,
      });
    };
    handleChange_Job_Role_Original = (e) => {
      this.setState({
        Job_Role_Original: e.target.value,
      });
    };
    handleChange_Working_Experience = (e) => {
      this.setState({
        Working_Experience: e.target.value,
      });
    };
  }
  
  handleClick = () => {
    this.setState({
      Work_Company_PT_District: this.state.Work_Company_PT_District,
      Job_Role_Original: this.state.Job_Role_Original,
      Working_Experience: this.state.Working_Experience,
    });
  };
  
  sendUserData = () => {
      fetch("/salarybenchmark", {
          method: "POST",
          headers : {
              "Content-type": "application/json"
          },
          body: JSON.stringify(
              this.state.Work_Company_PT_District, 
              this.state.Job_Role_Original,
              this.state.Working_Experience
          )
      })
      .then((res) => res.json())
      .then((data) => this.setState({
          Work_Company_PT_District: data,
          Job_Role_Original: data,
          Working_Experience: data
      }))
  }
  
  componentDidUpdate = (prevState) => {
      if (prevState.Work_Company_PT_District !== this.state.Work_Company_PT_District && prevState.Job_Role_Original !== this.state.Job_Role_Original && prevState.Working_Experience !== this.state.Working_Experience) {
          this.sendUserData()
      }
  }