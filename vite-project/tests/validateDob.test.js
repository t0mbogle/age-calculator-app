import validateDob from "../src/utils/validateDob";

describe('validation on dob input', () => {

    const now = new Date();

    test('invalid date', () => {
        const dob = { days: 31, months: 4, years: 1991 }
        const dobResponse = validateDob(now, dob);
        const errors = {days: 'Must be a valid date', months: '', years: ''};

        expect(errors).toEqual(dobResponse);
    });

    test('all fields empty', () => {
        const dob = { days: '', months: '', years: '' }
        const dobResponse = validateDob(now, dob);
        const errors = {days: 'This field is required', months: 'This field is required', years: 'This field is required'};

        expect(errors).toEqual(dobResponse);
    })

    test('invalid entries', () => {
        const dob = { days: 98, months: 14, years: 2177 }
        const dobResponse = validateDob(now, dob);
        const errors = {days: 'Must be a valid day', months: 'Must be a valid month', years: 'Must be in the past'};

        expect(errors).toEqual(dobResponse);
    })

    test('future date', () => {
        const dob = { days: 20, months: 4, years: 2050 }
        const dobResponse = validateDob(now, dob);
        const errors = {days: '', months: '', years: 'Must be in the past'};

        expect(errors).toEqual(dobResponse);
    })
})
