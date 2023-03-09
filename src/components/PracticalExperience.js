import { v4 as uuidv4 } from 'uuid';
const currentYear = new Date().getFullYear();

function PracticalExperience(props) {
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => {
    return (
      <option key={uuidv4()} value={month}>
        {month}
      </option>
    );
  });

  const yearOptions = [...Array(100).keys()].map(i => {
    return (
      <option key={uuidv4()} value={currentYear - i}>
        {currentYear - i}
      </option>
    );
  });

  const practicalExperienceDisplay = props.practicalData.practicalHistory.map(listItem => {
    return (
      <li key={uuidv4()}>
        <h3>{listItem.name}</h3>
        <h4>{listItem.startMonth} {listItem.startYear} - {listItem.endMonth} {listItem.endYear}</h4>
        <p>{listItem.description}</p>
      </li>
    );
  });

  const practicalExperienceForm = (
    <form onSubmit={props.submitHandler}>
      <label htmlFor='name'>Name of Company</label>
      <input id='name' name='name' type='text' onChange={props.changeHandler} value={props.practicalData.inputs.name}></input>

      <label htmlFor='description'>Description of Duties</label>
      <textarea id='description' name='description' rows={5} onChange={props.changeHandler} value={props.practicalData.inputs.description}></textarea>

      <label htmlFor='startMonth'>Start Month</label>
      <select id='startMonth' name='startMonth' onChange={props.changeHandler} value={props.practicalData.inputs.startMonth}>{monthOptions}</select>

      <label htmlFor='startYear'>Start Year</label>
      <select id='startYear' name='startYear' onChange={props.changeHandler} value={props.practicalData.inputs.startYear}>{yearOptions}</select>

      <label htmlFor='endMonth'>End Month</label>
      <select id='endMonth' name='endMonth' onChange={props.changeHandler} value={props.practicalData.inputs.endMonth}>{monthOptions}</select>

      <label htmlFor='endYear'> End Year</label>
      <select id='endYear' name='endYear' onChange={props.changeHandler} value={props.practicalData.inputs.endYear}>{yearOptions}</select>

      <button type='submit'>Add Entry</button>
    </form>
  )

  return (
    <div>
      {props.practicalData.practicalHistory.length ? practicalExperienceDisplay : []}
      {props.practicalData.displayPretty ? [] : practicalExperienceForm}
      <button onClick={props.toggleForm} value='practicalInfo'>Toggle Form</button>
    </div>
  )
}

export default PracticalExperience;
