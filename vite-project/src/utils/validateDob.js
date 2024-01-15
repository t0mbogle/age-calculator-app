const validateDob = (dob) => {
    const DOB_INPUT_KEYS = ['days', 'months', 'years'];

    let errors = {days: '', months: '', years: ''};
    
    for (const key of DOB_INPUT_KEYS) {
        if (!Object.prototype.hasOwnProperty.call(dob, key)) {
            errors[key] = 'This field is required';
        }
    }

    if (dob.days > 31) {
        errors.days = 'Must be a valid day';
    }

    console.log(errors);
}


export default validateDob;
