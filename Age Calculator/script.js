function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById('birthdate').value;
    
    const birthdateParts = birthDateInput.split('-');
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1] - 1; 
    const birthYear = birthdateParts[2];
    
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    // console.log(birthDateInput);
    // console.log(birthdateParts);
    // console.log(birthDay);
    // console.log(birthMonth);
    // console.log(birthYear);
    // console.log(birthDate);

    // Date validation function
    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date Format: Enter in DD-MM-YYYY format");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');

    result.innerHTML = `
        <div class="result-item">
            <h3>Age: </h3>
            <p>${ageInYears} years, ${ageInMonths % 12} months, and ${ageInDays % 30} days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed: </h3>
            <p>${ageInMonths} Months</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed: </h3>
            <p>${ageInWeeks} Weeks</p>
        </div>
        <div class="result-item">
            <h3>Days Passed: </h3>
            <p>${ageInDays} Days</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed: </h3>
            <p>${ageInHours} Hours</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed: </h3>
            <p>${ageInMinutes} Minutes</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed: </h3>
            <p>${ageInSeconds} Seconds</p>
        </div>
    `;

    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateAge();
});
