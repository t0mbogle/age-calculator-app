import PropTypes from 'prop-types';
import "../styles/input.css";

function Input({ label, name, placeholder, length, onChange, alert }) {
    let error = alert.errors[name];

    return (
        <div className="input-div">
          <label
            className={alert.hasError ? "input-label label-error" : "input-label"} 
            htmlFor={name + "-input"}>
              {label}
          </label>
          <input 
            className={alert.hasError ? "input-entry input-error" : "input-entry"} 
            type="datetime" autoComplete="off" name={name} placeholder={placeholder} maxLength={length} onChange={onChange}
          />
          {alert.hasError && <p className="text-error">{error}</p>}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    alert: PropTypes.object.isRequired,
};

export default Input;   