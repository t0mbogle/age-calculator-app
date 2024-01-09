import { useState } from "react";
import "./form.css";

function Form() {
  const [dob, setDob] = useState({});

  const handleFieldChange = (event) => {
    setDob({...dob, [event.target.name]: event.target.value});
  }

  const calculateAge = () => {
    const dobConcatenated = `${dob['year-input']}-${dob['month-input']}-${dob['day-input']}`;
    console.log(dobConcatenated)
    console.log(typeof dobConcatenated);

    const currentDate = new Date();
    console.log(currentDate);

    // console.log(Math.abs(currentDate - dobConcatenated));
  }

  return (
    <>
      <form>
        <div className="input-div">
          <label htmlFor="day-input">DAY</label>
          <input type="datetime" name="day-input" placeholder="DD" maxLength="2"onChange={handleFieldChange} />
        </div>
  
        <div className="input-div">
          <label htmlFor="month-input">MONTH</label>
          <input type="datetime" name="month-input" placeholder="MM" maxLength="2" onChange={handleFieldChange} />
        </div>
  
        <div className="input-div">
          <label htmlFor="year-input">YEAR</label>
          <input type="datetime" name="year-input" placeholder="YYYY" maxLength="4" onChange={handleFieldChange} />
        </div>
      </form>

      <button onClick={() => calculateAge()}>Calculate age</button>

      <div className="submit-wrapper">
        <hr className="horizonal-line"/>
        <svg className="submit-arrow" xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
      </div>
    
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}
  
export default Form  