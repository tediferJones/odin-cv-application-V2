function AcademicExperience(props) {
  const academicExperienceDisplay = (
    // iterate through academicHistory, create an li tag for each object in academicHistory
  )

  const academicExperienceForm = (
    <form>
      <label htmlFor='name'>Name of Institution</label>
      <input id='name' name='name' type='text'></input>

      <label htmlFor='description'>Description of Studies</label>
      <textarea id='description' name='description' rows={5}></textarea>
    </form>
  )

  return (
    <div>
      {props.displayPretty ? academicExperienceDisplay : academicExperienceForm}
    </div>
  )
}

export default AcademicExperience;
