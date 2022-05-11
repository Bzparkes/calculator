const numDisplay = document.querySelector('.display')
const arithmatic = document.querySelector('#arithmatic');
const allClear = document.querySelector('#all-clear');

let placeHolder = numDisplay.textContent = '0.00';


arithmatic.addEventListener('click', e => {
    placeHolder = '';
    numDisplay.textContent += `${e.target.value}`;
    console.log(e.target.value);
});

allClear.addEventListener('click', e => {
    numDisplay.textContent = '0.00';
});

function addition(e) {
    return e.target.value + e.target.value;
    
    //Adds new number to previous number
}

function subtraction(e) {
    return e.target.value - e.target.value;
    //Subtracts the new number from the previous number
}

function multiply(e) {
    return e.target.value * e.target.value;;
    //Multiplies the previous number by the new number
}

function divide(e) {
    return e.target.value / e.target.value;;
    //Divides the previous number by the new number
}

function equals() {
    //Sums the numbers by the equation used    
}

function clearEntry() {
    //Clears the last number/operation entered
}

function clearAll() {
    //Clears all entered data and returns to original state
}

