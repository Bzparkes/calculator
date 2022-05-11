const numDisplay = document.querySelector('body > section')

// numDisplay.textContent = '0.00';

const arithmatic = document.querySelector('#arithmatic');


arithmatic.addEventListener('click', e => {
    numDisplay.textContent += `${e.target.value}`;
    console.log(e.target.value);
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

