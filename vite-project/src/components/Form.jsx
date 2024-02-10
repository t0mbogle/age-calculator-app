import { useState } from "react";
import "../styles/form.css";
import validateDob from "../utils/validateDob";
import Input from "./Input";
import AnimateNumber from "./AnimateNumber";

function Form() {
  const YEAR_IN_MS = (365.25 * 24 * 60 * 60 * 1000);
  const MONTH_IN_MS = (30.44 * 24 * 60 * 60 * 1000);
  const DAY_IN_MS = 86400000;

  const initialState = {
    hasError: false,
    errors: {days: '', months: '', years: ''}
  }

  const [alert, setAlert] = useState(initialState);
  const [dob, setDob] = useState({});
  const [age, setAge] = useState({});

  const handleFieldChange = (event) => {
    setDob({...dob, [event.target.name]: event.target.value});
  }

  const calculateAge = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // now HH/MM/SS/MS is equal to dob
    const isValid = validateDob(now, dob);

    if (JSON.stringify(isValid) !== JSON.stringify(initialState.errors)) {
      setAlert({
        hasError: true,
        errors: isValid
      })
    } else {
      setAlert(initialState);
    }

    const ageInMs = Math.abs(now - new Date(`${dob.years}/${dob.months}/${dob.days}`));

    const years = Math.floor(ageInMs / YEAR_IN_MS);
    const months = Math.floor((ageInMs % YEAR_IN_MS) / MONTH_IN_MS);
    const days = Math.floor(((ageInMs % YEAR_IN_MS) % MONTH_IN_MS) / DAY_IN_MS);

    setAge({ years: years, months: months, days: days })
  }

  return (
    <>
      <form>
        <Input label="DAY" name="days" placeholder="DD" length="2" onChange={handleFieldChange} alert={alert} />
        <Input label="MONTH" name="months" placeholder="MM" length="2" onChange={handleFieldChange} alert={alert} />
        <Input label="YEAR" name="years" placeholder="YYYY" length="4" onChange={handleFieldChange} alert={alert} />
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
        <p><span className="age-result">{!alert.hasError && age.years ? <AnimateNumber value={age.years} /> : '--'}</span>{'years'}</p>
        <p><span className="age-result">{!alert.hasError && age.months ? <AnimateNumber value={age.months} /> : '--'}</span>{'months'}</p>
        <p><span className="age-result">{!alert.hasError && age.days ? <AnimateNumber value={age.days} /> : '--'}</span>{'days'}</p>
      </div>

      {/* <AnimateNumber value={age.days} /> */}
    </>
  );
}
  
export default Form  