const baseSalaryInput = document.querySelector('#baseSalary');
const hikePercentageInput = document.querySelector('#hikePercentage');
const newBaseSalaryEle = document.querySelector('#newBaseSalary');
const takeHomeSalaryEle = document.querySelector('#newTakeHomeSalary');
const resultContainer = document.querySelector('#result-container');
const hikeCalciForm = document.querySelector('#hikeCalciForm');
const clearBtn = document.querySelector('#clear-btn');

const MAX_BASE_SALARY = 9999999;
const MAX_HIKE_PERCENTAGE = 500;

//Not allowing the users to enter +, - or 'e' character for number input
baseSalaryInput.addEventListener('keypress', (e) => {
    if (e.key === '+' || e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
});

//Setting the max limit for base salary and hike percentage input value
const handleInput = (e, type) => {
    if (type === 'BASE_SALARY' && e.value >= MAX_BASE_SALARY) {
        e.value = MAX_BASE_SALARY
    }
    if (type === 'HIKE_PERCENTAGE' && e.value >= MAX_HIKE_PERCENTAGE) {
        e.value = MAX_HIKE_PERCENTAGE
    }
}

hikeCalciForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (baseSalaryInput.value) {
        const newBaseSalary = parseInt(baseSalaryInput.value * (hikePercentageInput.value / 100)) + parseInt(baseSalaryInput.value);
        newBaseSalaryEle.innerHTML = '&#x20b9; ' + newBaseSalary;

        const takeHomeSalary = (newBaseSalary * 149000) / 2456160;
        takeHomeSalaryEle.innerHTML = '&#x20b9; ' + takeHomeSalary;

        resultContainer.style.display = 'block';
        clearBtn.style.display = 'block';
    }
});

const resetValues = () => {
    baseSalaryInput.value = '';
    hikePercentageInput.value = '';
    resultContainer.style.display = 'none';
    clearBtn.style.display = 'none';
}

