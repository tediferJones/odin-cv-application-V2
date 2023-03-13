function GeneralInfo(props) {
  const GeneralInfoForm = (
    <form>
      <h2>General Information</h2>

      <label htmlFor='fname'>First Name:</label>
      <input id='fname' name='fname' type='text' componentname='generalInfo' onChange={props.changeHandler} value={props.generalData.inputs.fname}></input>

      <label htmlFor='lname'>Last Name:</label>
      <input id='lname' name='lname' type='text' componentname='generalInfo' onChange={props.changeHandler} value={props.generalData.inputs.lname}></input>

      <label htmlFor='phoneNum'>Phone Number:</label>
      <input id='phoneNum' name='phoneNum' type='tel' componentname='generalInfo' onChange={props.changeHandler} value={props.generalData.inputs.phoneNum}></input>

      <label htmlFor='email'>Email Address:</label>
      <input id='email' name='email' type='email' componentname='generalInfo' onChange={props.changeHandler} value={props.generalData.inputs.email}></input>
    </form>
  )

  const GeneralInfoDisplay = (
    <div className='generalInfoDisplay'>
      <h3>{`${props.generalData.inputs.fname} ${props.generalData.inputs.lname}`}</h3>
      <h4>{props.generalData.inputs.phoneNum}</h4>
      <h4>{props.generalData.inputs.email}</h4>
    </div>
  )

  return (
    <div className='section'>
      {props.generalData.displayPretty ? GeneralInfoDisplay : GeneralInfoForm}
      <button onClick={props.toggleForm} componentname='generalInfo' className={props.generalData.displayPretty ? 'editButton' : ''}>{props.generalData.displayPretty ? 'Edit' : 'Done'}</button>
    </div>
  )
}

export default GeneralInfo;
