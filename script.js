
var display = document.querySelector('.input');

function clearDisplay() {
    display.value = '';
}
function backspace(){
    display.value = display.value.slice(0,-1);
}
function appendToDisplay(value) {
    if (display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function evalf() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
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
                 evalf();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});