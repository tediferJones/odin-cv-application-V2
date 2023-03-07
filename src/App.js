import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.js';
import './App.css';

function App() {
  const [generalData, setGeneralData] = useState({
    displayPretty: false,
    inputs: {
      fname: 'TEST',
      lname: '',
      phoneNum: '',
      email: '',
    },
  });

  function generalDataChangeHandler(e) {
    setGeneralData({
      ...generalData,
      inputs: {
        ...generalData.inputs,
        [e.target.name]: e.target.value,
      }
    });
    // console.log(generalData);
  };

  function generalDataSubmitHandler(e) {
    setGeneralData({
      ...generalData,
      displayPretty: true,
    });
  };

  const [academicExperience, setAcademicExperience] = useState({
    displayPretty: false,
    academicHistory: [],
    inputs: {
      name: '',
      description: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    },
  });

  // MAKE USE OF PROPS, almost all logic should be in this file, then just pass the data to each component
  // YOU NEED TO ADD onChange and onSubmit here
  // Components should only render information, all functions that cause change to data should be in the root component (i.e. this component)
  // This may not be entirely true, in reality, app.js should contain the TRUTH, i.e. our data, component cant have functions if those functions are specific to the component

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <GeneralInfo generalData={generalData} changeHandler={generalDataChangeHandler} submitHandler={generalDataSubmitHandler}/>
    </div>
  );
}

export default App;


  // const [data, setData] = useState({
  //   inputs: {
  //     generalInfo: {
  //       fname: '',
  //       lname: '',
  //       phoneNum: '',
  //       email: '',
  //     },
  //     academicInfo: {
  //       name: '',
  //       description: '',
  //       startMonth: '',
  //       startYear: '',
  //       endMonth: '',
  //       endYear: '',
  //     },
  //     practicalInfo: {
  //       name: '',
  //       description: '',
  //       startMonth: '',
  //       startYear: '',
  //       endMonth: '',
  //       endYear: '',
  //     }
  //   },
  //   saved: {
  //     generalInfo: {
  //       fname: '',
  //       lname: '',
  //       phoneNum: '',
  //       email: '',
  //     },
  //     academicHistory: [],
  //     practicalHistory: [],
  //   }
  // })
