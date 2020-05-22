// DOM Elements
const switchInput = document.getElementById('switch');
const monthlyPrice = document.getElementsByClassName('monthly');
const annualPrice = document.getElementsByClassName('annually');


switchInput.addEventListener("click", handleClick);

function handleClick() {
    if (switchInput.checked) {
        hideAnnualPrice();
        displayMonthlyPrice();
    } else {
        hideMonthlyPrice();
        displayAnnualPrice();
    }
}

//Display functions
function hideAnnualPrice() {
    for (let index = 0; index < annualPrice.length; index++) {
        annualPrice[index].style.display = 'none';
    }
}

function hideMonthlyPrice() {
    for (let index = 0; index < monthlyPrice.length; index++) {
        monthlyPrice[index].style.display = 'none';
    }
}

function displayMonthlyPrice() {
    for (let index = 0; index < monthlyPrice.length; index++) {
        monthlyPrice[index].style.display = 'inline-block';
    }
}

function displayAnnualPrice() {
    for (let index = 0; index < annualPrice.length; index++) {
        annualPrice[index].style.display = 'inline-block';
    }
}