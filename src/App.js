import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.js';
import './App.css';

function App() {
  const [generalData, setGeneralData] = useState({
    displayPretty: false,
    inputs: {
      fname: 'TEST VALUE',
      lname: '',
      phoneNum: '',
      email: '',
    },
    saved: {
      fname: '',
      lname: '',
      phoneNum: '',
      email: '',
    }
  })

  const [data, setData] = useState({
    inputs: {
      generalInfo: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
      academicInfo: {
        name: '',
        description: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
      },
      practicalInfo: {
        name: '',
        description: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
      }
    },
    saved: {
      generalInfo: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
      academicHistory: [],
      practicalHistory: [],
    }
  })

  function onChange(e, inputType) {
    console.log(e)
    console.log(inputType)
  }

  // YOU NEED TO ADD onChange and onSubmit here
  // Components should only render information, all functions that cause change to data should be in the root component (i.e. this component)

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <GeneralInfo generalInfoInputs={data.inputs.generalInfo} onChange={onChange}/>
    </div>
  );
}

// MAKE USE OF PROPS, almost all logic should be in this file, then just pass the data to each component

export default App;
