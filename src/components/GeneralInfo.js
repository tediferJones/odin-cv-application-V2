import React, { useState } from 'react';

function GeneralInfo(props) {
  console.log(props);
  // You will need a form, and a fascade (i.e. prettyDisplay)
  // How do we implement onChange and onSubmit functions?

  function onChange(e) {
    console.log('onChange Function')
  }

  function onSubmit(e) {
    console.log('onSubmit Function')
  }

  const GeneralInfoForm = (
    <form onSubmit={onSubmit}>
      <label htmlFor='fname'>First Name:</label>
      <input id='fname' name='fname' type='text' onChange={onChange}></input>

      <label htmlFor='lname'>Last Name:</label>
      <input id='lname' name='lname' type='text'></input>

      <label htmlFor='phoneNum'>Phone Number:</label>
      <input id='phoneNum' name='phoneNum' type='tel'></input>

      <label htmlFor='email'>Email Address:</label>
      <input id='email' name='email' type='email'></input>

      <button type='submit'>SUBMIT</button>
    </form>
  )

  const GeneralInfoDisplay = (
    <div>
      <h1>{props.generalData.saved.fname}</h1>
      <h1>{props.generalData.saved.lname}</h1>
      <h1>{props.generalData.saved.phoneNum}</h1>
      <h1>{props.generalData.saved.email}</h1>
    </div>
  )

  // {props.generalData.displayPretty ? GeneralInfoForm : <h1>DISPLAY PRETTY</h1>}

  return (
    <div>
      {props.generalData.displayPretty ? GeneralInfoDisplay : GeneralInfoForm}
    </div>
  )
}

export default GeneralInfo;
