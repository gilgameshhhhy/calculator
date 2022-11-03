let resultNum;

function add(numOne, numTwo) {
  resultNum = numOne + numTwo;
  console.log(resultNum);
  return resultNum;
}

function subtract(numOne, numTwo) {
  resultNum = numOne - numTwo;
  console.log(resultNum);
  return resultNum;
}

function multiply(numOne, numTwo) {
  resultNum = numOne * numTwo;
  console.log(resultNum);
  return resultNum;
}

function divide(numOne, numTwo) {
  resultNum = numOne / numTwo;
  console.log(resultNum);
  return resultNum;
}

function operate(numOne, numTwo, operator) {
  if (operator == "add") {
    add(numOne,numTwo);
  } else {
    console.log('pog');
  }
}
