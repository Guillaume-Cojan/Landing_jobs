import React from "react";
import Select from "react-select";



function SurveyList({ title, list, setUserSelection, userSelection }) {
    
    const options = [];

    list.forEach(function (element) {
        options.push({ label: element, value: element });
    });

    const handleSelectChanges = (e, name) => {
        setUserSelection({...userSelection, [name.name] : e.value})
    }

    return (
        <div className="survey-list-container">
            <h3>{title}</h3>
            <Select name={title} options={options} className="select" onChange={handleSelectChanges}/>
        </div>
    );
}



// class SurveyList extends React.Component {
//     constructor(props){ 
//         super(props)
//         this.state = {
//             userSelection: "hellor"
 
//         }
//     }


// //    handleSelectChanges = ( e, name) => {
    
// //     const handleCategoryChange = (e) => {
// //         this.setState({
// //             userSelection: { ...this.state.userSelection, [name.name]: e.value},
// //           });
// //     }
    

//     // }   
//     // { [name.name] : e.value}
//     // console.log("this is e " , e )
//     // console.log("this is name " , name)


//     // handleSelectChanges = ( e, name) => {
//     //     if(name.name === "Category") {
//     //         this.setState(
//     //     { Category : e.value, Experience: this.state.userSelection.Experience})
//     //     }
//     //     if(name.name === "Experience"){
//     //         this.setState(
//     //             {Category : this.state.userSelection.Category, Experience : e.value})
//     //     }
//     // }   

//     handleSelectChanges = (e, name, state, setState) => {
//         console.log("hello from", name.name)
//     }

//     componentDidUpdate(){
//         console.log(this.props.state)
//     }

//   render () {  
//     const {title, list, state, setState } = this.props;

//     const options = [];

//     list.forEach(function (element) {
//         options.push({ label: element, value: element });
//     });

//      console.log( setState)
//     return (
//         <div className="survey-list-container">
//             <h3>{title}</h3>
//             <Select name={title} options={options} className="select" state={state} setState={setState} onChange={this.handleSelectChanges}/>
//         </div>
//     );
// }


// }


export default SurveyList;
