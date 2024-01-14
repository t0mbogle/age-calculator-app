import { useState } from "react";
import "./form.css";

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
    const ageInMs = Math.abs(now - new Date(`${dob['year-input']}/${dob['month-input']}/${dob['day-input']}`));

    const years = Math.floor(ageInMs / YEAR_IN_MS);
    const months = Math.floor((ageInMs % YEAR_IN_MS) / MONTH_IN_MS);
    const days = Math.floor(((ageInMs % YEAR_IN_MS) % MONTH_IN_MS) / DAY_IN_MS);

    console.log((ageInMs % YEAR_IN_MS) / MONTH_IN_MS);
    console.log(({ years: years, months: months, days: days }));
    setAge({ years: years, months: months, days: days })
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

        {/* <p>{age.years !== undefined ? `${age.years} years` : `-- years`}</p>
        <p>{age.months !== undefined ? `${age.months} months` : `-- months`}</p>
        <p>{age.days !== undefined ? `${age.days} days` : `-- days`}</p> */}
      </div>
    
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}
  
export default Form  