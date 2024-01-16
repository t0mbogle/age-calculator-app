const validateDob = async (dob) => {
    const DOB_INPUT_KEYS = ['days', 'months', 'years'];

    let errors = {days: '', months: '', years: ''};

    for (const key of DOB_INPUT_KEYS) {
        if (!Object.prototype.hasOwnProperty.call(dob, key)) {
            errors[key] = 'This field is required';
        }
    }

    if (errors.days === '' && (dob.days > 31 || typeof dob.days !== 'number')) {
        errors.days = 'Must be a valid day';
    }

    if (errors.months === '' && (dob.months > 12 || typeof dob.months !== 'number')) {
        errors.months = 'Must be a valid month';
    }

    if (dob.years > new Date().getFullYear()) {
        errors.years = 'Must be in the past';
    } else if (errors.years === '' && dob.years !== 'number') {
        errors.years = 'Must be a valid year';
    } 

    console.log(errors);
}


export default validateDob;
