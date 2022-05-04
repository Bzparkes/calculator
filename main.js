// const num1 = 1;
// const num2 = 2;
// const num3 = 3;
// const num4 = 4;
// const num5 = 5;
// const num6 = 6;
// const num7 = 7;
// const num8 = 8;
// const num9 = 9;

//console.log(num2 * num9)

let num;
const pressNum = document.querySelector('button');
const displayNum = document.querySelector('section');

pressNum.addEventListener('click', enterNumber(num));

function enterNumber(num) {
     return num;
     
    //Takes the button pressed, enters that value and prints to display
}

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

console.log(addition(1,2,3))