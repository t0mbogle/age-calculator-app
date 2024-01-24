const validateDob = (now, dob) => {
    dob.days = Number(dob.days);
    dob.months = Number(dob.months);
    dob.years = Number(dob.years);

    let errors = {days: '', months: '', years: ''};

    // EMPTY ENTRIES
    for (const [key] of Object.entries(dob)) {
        if (!dob[key]) {
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
    const dateObject = new Date(dob.years, (dob.months - 1), dob.days);
    if ((!errors.years) && (dateObject.getFullYear() > now.getFullYear() || isNaN(dateObject.getFullYear()))) {
        errors.years = 'Must be in the past';
    }

    // VALID DATE IN THE PAST
    if ((!errors.days) && (dateObject.getFullYear() != dob.years || dateObject.getMonth() !== (dob.months - 1) || dateObject.getDate() != dob.days)) {
        errors.days = 'Must be a valid date';
        errors.months = '';
        errors.years = '';
    }
    console.log(errors);
    return errors;
}

export default validateDob;
