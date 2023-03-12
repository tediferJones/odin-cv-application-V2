import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        id: uuidv4(),
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
        id: uuidv4(),
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
    const foundItem = data[e.target.getAttribute('componentname')].saved.filter(savedItem => savedItem.id === data[e.target.getAttribute('componentname')].inputs.id)[0];
    if (foundItem) {
      const newItem = data[e.target.getAttribute('componentname')].inputs;
      console.log(newItem);
      setData({
        ...data,
        [e.target.getAttribute('componentname')]: {
          ...data[e.target.getAttribute('componentname')],
          saved: data[e.target.getAttribute('componentname')].saved.map(savedItem => (savedItem.id === foundItem.id ? newItem : savedItem)),
          inputs: {
            id: uuidv4(),
            name: '',
            description: '',
            startMonth: defaultMonth,
            startYear: defaultYear,
            endMonth: defaultMonth,
            endYear: defaultYear,
          },
        },
      });
    } else {
      setData({
        ...data,
        [e.target.getAttribute('componentname')]: {
          ...data[e.target.getAttribute('componentname')],
          saved: data[e.target.getAttribute('componentname')].saved.concat(data[e.target.getAttribute('componentname')].inputs),
          inputs: {
            id: uuidv4(),
            name: '',
            description: '',
            startMonth: defaultMonth,
            startYear: defaultYear,
            endMonth: defaultMonth,
            endYear: defaultYear,
          },
        },
      });
    }
  };

  function deleteSaved(e) {
    setData({
      ...data,
      [e.target.getAttribute('componentname')]: {
        ...data[e.target.getAttribute('componentname')],
        saved: data[e.target.getAttribute('componentname')].saved.filter(savedItem => savedItem.id !== e.target.value),
      },
    });
  };

  function updateSaved(e) {
    const foundItem = data[e.target.getAttribute('componentname')].saved.filter(savedItem => savedItem.id === e.target.value)[0];
    setData({
      ...data,
      [e.target.getAttribute('componentname')]: {
        ...data[e.target.getAttribute('componentname')],
        inputs: {
          ...foundItem,
        },
      },
    });
  };

  return(
    <div className='content'>
      <h1 className='header'>APPV2</h1>
      <GeneralInfo generalData={data.generalInfo} changeHandler={changeHandler} toggleForm={toggleForm}/>
      <AcademicExperience academicData={data.academicInfo} changeHandler={changeHandler} toggleForm={toggleForm} submitHandler={submitHandler} deleteSaved={deleteSaved} updateSaved={updateSaved}/>
      <PracticalExperience practicalData={data.practicalInfo} changeHandler={changeHandler} toggleForm={toggleForm} submitHandler={submitHandler} deleteSaved={deleteSaved} updateSaved={updateSaved}/>
    </div>
  )
}

export default App;

