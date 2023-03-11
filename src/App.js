import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.js';
import AcademicExperience from './components/AcademicExperience.js';
import PracticalExperience from './components/PracticalExperience.js';
import './App.css';
const defaultMonth = 'January';
const defaultYear = new Date().getFullYear();

function App() {
  const [data, setData] = useState({
    generalInfo: {
      displayPretty: false,
      inputs: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
    },
    academicInfo: {
      saved: [],
      displayPretty: false,
      inputs: {
        name: '',
        description: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
      },
    },
    practicalInfo: {
      saved: [],
      displayPretty: false,
      inputs: {
        name: '',
        description: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
      },
    },
  });

  function changeHandler(e) {
    setData({
      ...data,
      [e.target.getAttribute('componentname')]: {
        ...data[e.target.getAttribute('componentname')],
        inputs: {
          ...data[e.target.getAttribute('componentname')].inputs,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  function toggleForm(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.getAttribute('componentname')]: {
        ...data[e.target.getAttribute('componentname')],
        displayPretty: !data[e.target.getAttribute('componentname')].displayPretty,
      },
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.getAttribute('componentname')]: {
        ...data[e.target.getAttribute('componentname')],
        saved: data[e.target.getAttribute('componentname')].saved.concat(data[e.target.getAttribute('componentname')].inputs),
        inputs: {
          name: '',
          description: '',
          startMonth: defaultMonth,
          startYear: defaultYear,
          endMonth: defaultMonth,
          endYear: defaultYear,
        },
      },
    });
  };

  return(
    <div>
      <h1>APPV2</h1>
      <GeneralInfo generalData={data.generalInfo} changeHandler={changeHandler} toggleForm={toggleForm}/>
      <AcademicExperience academicData={data.academicInfo} changeHandler={changeHandler} toggleForm={toggleForm} submitHandler={submitHandler}/>
      <PracticalExperience practicalData={data.practicalInfo} changeHandler={changeHandler} toggleForm={toggleForm} submitHandler={submitHandler}/>
    </div>
  )
}

export default App;

