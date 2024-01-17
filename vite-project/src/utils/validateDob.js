const validateDob = (dob) => {
    const DOB_INPUT_KEYS = ['days', 'months', 'years'];

    let errors = {days: '', months: '', years: ''};

    // EMPTY ENTRIES
    for (const key of DOB_INPUT_KEYS) {
        if (!Object.prototype.hasOwnProperty.call(dob, key)) {
            errors[key] = 'This field is required';
        }
    }
    
    // VALID DATE IN THE PAST
    const dateObject = new Date(dob.years, (dob.months - 1), dob.days);
    if (dateObject.getFullYear() != dob.years || dateObject.getMonth() !== (dob.months - 1) || dateObject.getDate() != dob.days) {
        errors.days = 'Must be a valid date';
        //console.log('Must be a valid date');
    }

    // VALID TYPES & INPUTS FOR DD/MM/YYYY
    if (errors.days === '' && (dob.days > 31 || typeof dob.days !== 'number')) {
        errors.days = 'Must be a valid day';
    }
    if (errors.months === '' && ((dob.months - 1) > 11 || typeof dob.months !== 'number')) {
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
