import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.js';
import AcademicExperience from './components/AcademicExperience.js';
import PracticalExperience from './components/PracticalExperience.js';
import './App.css';
const defaultMonth = 'January';
const defaultYear = new Date().getFullYear();

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

  function generalDataToggleForm(e) {
    if (generalData.displayPretty) {
      setGeneralData({
        ...generalData,
        displayPretty: false
      })
    } else {
      setGeneralData({
        ...generalData,
        displayPretty: true,
      });
    }
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

  const [practicalData, setPracticalData] = useState({
    displayPretty: false,
    practicalHistory: [],
    inputs: {
      name: '',
      description: '',
      startMonth: defaultMonth,
      startYear: defaultYear,
      endMonth: defaultMonth,
      endYear: defaultYear,
    },
  });

  function practicalDataChangeHandler(e) {
    setPracticalData({
      ...practicalData,
      inputs: {
        ...practicalData.inputs,
        [e.target.name]: e.target.value
      },
    });
  };

  function practicalDataSubmitHandler(e) {
    e.preventDefault();
    console.log(e)
    setPracticalData({
      ...practicalData,
      practicalHistory: practicalData.practicalHistory.concat(practicalData.inputs),
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

  function practicalDataToggleForm(e) {
    console.log(e.target.value)
    if (practicalData.displayPretty) {
      setPracticalData({
        ...practicalData,
        displayPretty: false,
      });
    } else {
      setPracticalData({
        ...practicalData,
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
      <GeneralInfo generalData={generalData} changeHandler={generalDataChangeHandler} toggleForm={generalDataToggleForm}/>
      <AcademicExperience academicData={academicData} changeHandler={academicDataChangeHandler} submitHandler={academicDataSubmitHandler} toggleForm={academicDataToggleForm}/>
      <PracticalExperience practicalData={practicalData} changeHandler={practicalDataChangeHandler} submitHandler={practicalDataSubmitHandler} toggleForm={practicalDataToggleForm}/>
    </div>
  );
}

export default App;

  // This code is very repitive, instead of making 3 change handlers and 3 submit handlers, just make one that sets the value depending on where it was sent from
  // To do this convert forms into something else idk but the button can't have type submit, 
  // use onClick to perform the neccesary setState, with the value of the button corresponding to the field of the main data object
  // Then use that value in the submit function to decide which fields need updating, just like we do in the changeHandler functions wih the stupid [aString]: someValue

  // const [data, setData] = useState({
  //   academicHistory: [],
  //   practicalHistory: [],
  //   inputs: {
  //     generalInfo: {
  //       displayPretty: false,
  //       fname: '',
  //       lname: '',
  //       phoneNum: '',
  //       email: '',
  //     },
  //     academicInfo: {
  //       displayPretty: false,
  //       name: '',
  //       description: '',
  //       startMonth: '',
  //       startYear: '',
  //       endMonth: '',
  //       endYear: '',
  //     },
  //     practicalInfo: {
  //       displayPretty: false,
  //       name: '',
  //       description: '',
  //       startMonth: '',
  //       startYear: '',
  //       endMonth: '',
  //       endYear: '',
  //     }
  //   },
  // })
