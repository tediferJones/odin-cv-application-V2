function GeneralInfo(props) {
  // console.log(props);
  const GeneralInfoForm = (
    <form onSubmit={props.toggleForm}>
      <label htmlFor='fname'>First Name:</label>
      <input id='fname' name='fname' type='text' onChange={props.changeHandler} value={props.generalData.inputs.fname}></input>

      <label htmlFor='lname'>Last Name:</label>
      <input id='lname' name='lname' type='text' onChange={props.changeHandler} value={props.generalData.inputs.lname}></input>

      <label htmlFor='phoneNum'>Phone Number:</label>
      <input id='phoneNum' name='phoneNum' type='tel' onChange={props.changeHandler} value={props.generalData.inputs.phoneNum}></input>

      <label htmlFor='email'>Email Address:</label>
      <input id='email' name='email' type='email' onChange={props.changeHandler} value={props.generalData.inputs.email}></input>

      <button type='submit'>Submit</button>
    </form>
  )

  const GeneralInfoDisplay = (
    <div>
      <h1>{props.generalData.inputs.fname}</h1>
      <h1>{props.generalData.inputs.lname}</h1>
      <h1>{props.generalData.inputs.phoneNum}</h1>
      <h1>{props.generalData.inputs.email}</h1>
      <button onClick={props.toggleForm}>Edit</button>
    </div>
  )

  return (
    <div>
      {props.generalData.displayPretty ? GeneralInfoDisplay : GeneralInfoForm}
    </div>
  )
}

export default GeneralInfo;
