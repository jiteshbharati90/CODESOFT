let displayValue = '0';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function appendNumber(number) {
  if (waitingForSecondOperand) {
    displayValue = number;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? number : displayValue + number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (operator) {
    calculateResult();
  }
  operator = op;
  waitingForSecondOperand = true;
}

function calculateResult() {
  const secondOperand = parseFloat(displayValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }

  displayValue = result.toString();
  operator = '';
  firstOperand = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

// Initial display
updateDisplay();
