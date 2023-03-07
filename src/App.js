import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.js';
import AcademicExperience from './components/AcademicExperience.js';
import './App.css';
const defaultMonth = 'January';
const defaultYear = '2023';

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
  };

  function generalDataSubmitHandler(e) {
    setGeneralData({
      ...generalData,
      displayPretty: true,
    });
  };

  const [academicData, setAcademicData] = useState({
    displayPretty: false,
    academicHistory: [],
    inputs: {
      name: '',
      description: '',
      startMonth: defaultMonth,
      startYear: defaultYear,
      endMonth: defaultMonth,
      endYear: defaultYear,
    },
  });

  function academicDataChangeHandler(e) {
    setAcademicData({
      ...academicData,
      inputs: {
        ...academicData.inputs,
        [e.target.name]: e.target.value,
      },
    });
  };

  function academicDataSubmitHandler(e) {
    // this function should add the inputs object to academicHistory, then restore the inputs to their defaults
    e.preventDefault();
    setAcademicData({
      academicHistory: academicData.academicHistory.concat(academicData.inputs),
      inputs: {
        name: '',
        description: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
      },
    });
  };

  function academicDataToggleForm(e) {
    if (academicData.displayPretty) {
      setAcademicData({
        ...academicData,
        displayPretty: false,
      });
    } else {
      setAcademicData({
        ...academicData,
        displayPretty: true,
      });
    }
  };

  // MAKE USE OF PROPS, almost all logic should be in this file, then just pass the data to each component
  // YOU NEED TO ADD onChange and onSubmit here
  // Components should only render information, all functions that cause change to data should be in the root component (i.e. this component)
  // This may not be entirely true, in reality, app.js should contain the TRUTH, i.e. our data, component cant have functions if those functions are specific to the component

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <GeneralInfo generalData={generalData} changeHandler={generalDataChangeHandler} submitHandler={generalDataSubmitHandler}/>
      <AcademicExperience academicData={academicData} changeHandler={academicDataChangeHandler} submitHandler={academicDataSubmitHandler} toggleForm={academicDataToggleForm}/>
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
