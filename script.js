const bottomDisplay = document.querySelector('#screenbot');
const topDisplay = document.querySelector('#screentop');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const pointButton = document.querySelector('.point');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equalButton = document.querySelector('.equalsign');
let operandOne = '';
let operandTwo = '';
let operatorUsed = '';

pointButton.onclick = () => addDecimalPoint();
clearButton.onclick = () => clearScreen();
deleteButton.onclick = () => deleteNumber();
equalButton.onclick = () => solveNumbers();
window.addEventListener('keydown', keyboardInput)

numButtons.forEach(numButton => {
  numButton.addEventListener('click', (e) => {
    displayNumber(e.target.id);
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    useOperator(e.target.id);
  });
});

function displayNumber(num) {
  if (bottomDisplay.textContent == '0') {
    bottomDisplay.textContent = num;
  } else {
    bottomDisplay.textContent += num;
  }
}

function addDecimalPoint() {
  if (bottomDisplay.textContent == '') {
    bottomDisplay.textContent += '0';
  }
  if (bottomDisplay.textContent.includes('.')) {
    return
  }
  bottomDisplay.textContent += '.'
}

function clearScreen() {
  bottomDisplay.textContent = '0';
  topDisplay.textContent = '';
}

function deleteNumber() {
  bottomDisplay.textContent = bottomDisplay.textContent.slice(0,-1);
  if (bottomDisplay.textContent == '') {
    bottomDisplay.textContent = '0';
  }
}

function useOperator(operator) {
  if (operatorUsed != null) solveNumbers();
  operandOne = bottomDisplay.textContent;
  operatorUsed = operator;
  topDisplay.textContent = `${operandOne} ${operatorUsed}`;
  bottomDisplay.textContent = '0';
}

function solveNumbers() {
  operandTwo = bottomDisplay.textContent
  if (operatorUsed == '') return;
  if (operatorUsed == '/' && operandTwo == '0') {
    alert("It is not possible to divide by 0!");
    return
  } 
  if (operandTwo == '') return 
  bottomDisplay.textContent = limitDecimals(operate(operandOne, operandTwo, operatorUsed));
  topDisplay.textContent = `${operandOne} ${operatorUsed} ${operandTwo} =`
  operatorUsed = '';
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(operandOne, operandTwo, operatorUsed) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  switch(operatorUsed) {
    case '+':
      return add(operandOne, operandTwo)
    case '-':
      return subtract(operandOne, operandTwo)
    case '*':
      return multiply(operandOne, operandTwo)
    case '/':
      return divide(operandOne, operandTwo)
    default:
      return
  } 
}

function limitDecimals(num) {
  return Math.round(num * 1000) / 1000
}

function keyboardInput(e) {
  console.log(e.key);
  if (e.key >= 0 && e.key <= 9) displayNumber(e.key);
  if (e.key == '.') addDecimalPoint();
  if (e.key == '=' || e.key == 'Enter') solveNumbers();
  if (e.key == 'Delete') clearScreen();
  if (e.key == 'Backspace') deleteNumber();
  if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') useOperator(e.key);
}