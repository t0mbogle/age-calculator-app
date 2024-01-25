import { useState } from "react";
import "../styles/form.css";
import validateDob from "../utils/validateDob";

function Form() {
  const YEAR_IN_MS = (365.25 * 24 * 60 * 60 * 1000); // Average year length 365.25, accounting for leap years
  const MONTH_IN_MS = (30.44 * 24 * 60 * 60 * 1000); // Average month length 30.44
  const DAY_IN_MS = 86400000;

  const [dob, setDob] = useState({});
  const [age, setAge] = useState({});

  const handleFieldChange = (event) => {
    setDob({...dob, [event.target.name]: event.target.value});
  }

  const calculateAge = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // now HH/MM/SS/MS is equal to dob
    validateDob(now, dob);

    const ageInMs = Math.abs(now - new Date(`${dob.years}/${dob.months}/${dob.days}`));

    const years = Math.floor(ageInMs / YEAR_IN_MS);
    const months = Math.floor((ageInMs % YEAR_IN_MS) / MONTH_IN_MS);
    const days = Math.floor(((ageInMs % YEAR_IN_MS) % MONTH_IN_MS) / DAY_IN_MS);

    setAge({ years: years, months: months, days: days })
  }

  return (
    <>
      <form>
        <div className="input-div">
          <label htmlFor="day-input">DAY</label>
          <input type="datetime" name="days" placeholder="DD" maxLength="2"onChange={handleFieldChange} />
        </div>
  
        <div className="input-div">
          <label htmlFor="month-input">MONTH</label>
          <input type="datetime" name="months" placeholder="MM" maxLength="2" onChange={handleFieldChange} />
        </div>
  
        <div className="input-div">
          <label htmlFor="year-input">YEAR</label>
          <input type="datetime" name="years" placeholder="YYYY" maxLength="4" onChange={handleFieldChange} />
        </div>
      </form>

      <div className="submit-wrapper">
        <hr />
        <svg 
          className="submit-arrow"
          onClick={() => calculateAge()}
          xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g>
        </svg>
      </div>

      <div className="age-wrapper">
        <p><span className="age-result">{age.years !== undefined ? age.years : '--'}</span>{'years'}</p>
        <p><span className="age-result">{age.months !== undefined ? age.months : '--'}</span>{'months'}</p>
        <p><span className="age-result">{age.days !== undefined ? age.days : '--'}</span>{'days'}</p>
      </div>
    
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}
  
export default Form  