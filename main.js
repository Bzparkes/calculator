const numDisplay = document.querySelector('body > section')
const num1 = document.querySelector('body > div.numbers > button:nth-child(1)');
const num2 = document.querySelector('body > div.numbers > button:nth-child(2)');
const num3 = document.querySelector('body > div.numbers > button:nth-child(3)');
const num4 = document.querySelector('body > div.numbers > button:nth-child(4)');
const num5 = document.querySelector('body > div.numbers > button:nth-child(5)');
const num6 = document.querySelector('body > div.numbers > button:nth-child(6)');
const num7 = document.querySelector('body > div.numbers > button:nth-child(7)');
const num8 = document.querySelector('body > div.numbers > button:nth-child(8)');
const num9 = document.querySelector('body > div.numbers > button:nth-child(9)');

const plusButton = document.querySelector('body > div.summation > button.add');
const minusButton = document.querySelector('body > div.summation > button.subtract');
const divideButton = document.querySelector('body > div.summation > button.divide');
const multiplyButton = document.querySelector('body > div.summation > button.multiply');
const decimalButton = document.querySelector('body > div.summation > button.decimal')
const equalsButton = document.querySelector('body > div.summation > button.equals')

const clearEntryButton = document.querySelector('body > div:nth-child(5) > button.clear-entry');
const allClearButton = document.querySelector('body > div:nth-child(5) > button.all-clear');




//console.log(num2 * num9)



function enterNumber(num) {
     //return num;
     console.log(num);
    //Takes the button pressed, enters that value and prints to display
}
enterNumber(1)

function addition() {
    return;
    //Adds new number to previous number
}

function subtraction() {
    return;
    //Subtracts the new number from the previous number
}

function multiply() {
    return num1 * num2;
    //Multiplies the previous number by the new number
}

function divide() {
    return num1 / num2;
    //Divides the previous number by the new number
}

function equals() {
    //Sums the numbers by the euqation used    
}

function clearEntry() {
    //Clears the last number/operation entered
}

function clearAll() {
    //Clears all entered data and returns to original state
}

