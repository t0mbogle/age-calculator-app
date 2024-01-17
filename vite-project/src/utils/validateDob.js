const validateDob = (dob) => {
    dob.days = Number(dob.days);
    dob.months = Number(dob.months);
    dob.years = Number(dob.years);

    const DOB_INPUT_KEYS = ['days', 'months', 'years'];
    let errors = {days: '', months: '', years: ''};

    // EMPTY ENTRIES
    for (const key of DOB_INPUT_KEYS) {
        if (!Object.prototype.hasOwnProperty.call(dob, key)) {
            errors[key] = 'This field is required';
        }
    }
    
    // VALID TYPES & INPUTS FOR DD/MM/YYYY
    if ((!errors.days) && (dob.days > 31 || isNaN(dob.days))) {
        errors.days = 'Must be a valid day';
    }
    if ((!errors.months) && ((dob.months - 1) > 11 || isNaN(dob.months))) {
        errors.months = 'Must be a valid month';
    }

    // CHECK FOR FUTURE DATE
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    // set now to have the same HH/MM/SS as the entered dob
    const ageInMs = (now - new Date(`${dob.years}/${dob.months}/${dob.days}`));
    // console.log(ageInMs);
    // console.log(typeof ageInMs);
    // console.log(ageInMs <);

    if ((!errors.years) && isNaN(dob.years)) {
        errors.years = 'Must be a valid year';
    } else if ((!errors.years) && ageInMs < 0) {
        errors.years = 'Must be in the past';
    }

    // VALID DATE IN THE PAST
    const dateObject = new Date(dob.years, (dob.months - 1), dob.days);
    if ((!errors.days) && (dateObject.getFullYear() != dob.years || dateObject.getMonth() !== (dob.months - 1) || dateObject.getDate() != dob.days)) {
        errors.days = 'Must be a valid date';
        errors.months = '';
        errors.years = '';
    }
    console.log(errors);
}

export default validateDob;
