const error = document.querySelector('.alert');
const inputs = document.querySelectorAll('input');

function isLeapYear(year) {
    return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);


    if (month > 12 || month < 1) {
        error.classList.add('alert');
        error.style.display = 'block';
        setTimeout(function() {
        error.style.display = 'none';
        }, 3000)
        init();
        return;

    }

    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day < 1 || day > daysInMonth [month - 1]) {
        error.classList.add('alert');
        error.style.display = 'block';
        setTimeout(function() {
        error.style.display = 'none';
           }, 1000)
        init();
       return;
    }

let today = new Date();
let todayDay = today.getDate();
let todayMonth = today.getMonth() + 1;
let todayYear = today.getFullYear();

let ageYears = todayYear - year;
let ageMonths = todayMonth - month;
let ageDays = todayDay - day;

if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(todayYear, todayMonth - 1, 0).getDate();
}
 if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;

    init();
    
    document.getElementById('span').innerHTML = `${ageYears}`;
    document.getElementById('months-span').innerHTML = `${ageMonths} `;
    document.getElementById('days-span').innerHTML = `${ageDays}`;
} else {
    inputs.forEach(input => {
        if(input.value === '') {
        error.classList.add('alert');
        error.style.display = 'block';
        }
    })
    setTimeout(function() {
        error.style.display = 'none';
    },3000);
}

}

document.querySelector('.calculate').addEventListener('click', calculateAge);

 function init() {
    document.querySelector('#day').value = '';
    document.querySelector('#month').value = '';
    document.querySelector('#year').value = '';
 }
init();
