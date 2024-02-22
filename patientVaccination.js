const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');
const ageDetailsElement = document.getElementById('ageDetails');

calculateButton.addEventListener('click', () => {
    const dateOfBirth = new Date(document.getElementById('dateOfBirth').value);
    const today = new Date();
    const ageInMilliseconds = today.getTime() - dateOfBirth.getTime();

    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    if (dateOfBirth > today) {
        resultElement.textContent = 'Error: Please enter a date of birth in the past.';
    } else {
        resultElement.textContent = `Your age is approximately ${years} years and ${months} months old.`;
        // ageDetailsElement.textContent = `Years: ${years}, Months: ${months}`;
    }
});
