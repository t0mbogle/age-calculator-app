function Form() {
  return (
    <>
      <form className="form">
        <div className="input-div">
          <label htmlFor="day-input">DAY</label><br />
          <input type="datetime" name="day-input" placeholder="DD" maxLength="2" />
        </div>
  
        <div className="input-div">
          <label htmlFor="month-input">MONTH</label><br />
          <input type="datetime" name="month-input" placeholder="MM" maxLength="2" />
        </div>
  
        <div className="input-div">
          <label htmlFor="year-input">YEAR</label><br />
          <input type="datetime" name="year-input" placeholder="YYYY" maxLength="4" />
        </div>
      </form>
    
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}
  
export default Form  