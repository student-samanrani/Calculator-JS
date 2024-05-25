
var firstNumber = '';
var operator = '';
var secondNumber = '';
var result = '';
var display = document.querySelector('.input');

function clearDisplay() {
    display.value = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = '';
}
function backspace(){
    display.value = display.value.slice(0,-1);
}
function setOperator(op) {
    firstNumber = document.getElementById('display').value;
    operator = op;
    document.getElementById('display').value += op;
}
function appendToDisplay(value) {
    if (display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}
function calculate() {
    let expression = display.value;
    let operatorIndex = -1;

    // Find the index of the operator
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/'|| expression[i] === '%') {
            operatorIndex = i;
            break;
        }
    }

    // If no operator found or operator is the last character, display error
    if (operatorIndex === -1 || operatorIndex === expression.length - 1) {
        display.value = 'Error';
        return;
    }

    // Extract first operand, operator, and second operand
    firstNumber = expression.substring(0, operatorIndex);
    operator = expression[operatorIndex];
    secondNumber = expression.substring(operatorIndex + 1);

    // Perform calculation based on the operator
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                display.value = 'Error';
                return;
            }
            result = firstNumber / secondNumber;
            break;
            case '%':
            result = firstNumber % secondNumber;
            break;
    
    }

    // Display the result and clear operands and operator for future calculations
    display.value = result;
    firstNumber = '';
    operator = '';
    secondNumber = '';
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button').forEach(function (button) {
        button.addEventListener('click', function (e) {
            var buttonText = e.target.innerText;

            if (buttonText == 'AC') {
                clearDisplay();
            } else if (buttonText == 'DEL') {
                backspace();
            } else if (buttonText == '=') {
                calculate();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});