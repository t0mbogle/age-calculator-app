import validateDob from "../src/utils/validateDob";

describe('validation on dob input', () => {

    const now = new Date();

    xtest('invalid date', () => {
        const dob = { days: 31, months: 4, years: 1991 }
        const dobResponse = validateDob(now, dob);

        let errors = {days: 'Must be a valid date', months: '', years: ''};

        expect(errors).toEqual(dobResponse);
    });     
})
