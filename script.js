// Basic Math Functions
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

//Operate function takes an operator and 2 numbers and calls one of the above functions

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

const calculate = (string) => {
    let arr = string.split('');
    let operator = '';
    let first = '';
    let value = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/\+|-|x|\//)) {
            operator = arr[i];
            first = value;
            value = '';
        } else {
            value += arr[i];
        }
    };
    console.log(operator);
    return operate(operator, parseInt(first), parseInt(value));
};

//Display functions
const result_display = document.getElementById('result');
const stored_display = document.getElementById('stored');
let result = 0

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (stored_display.innerText.length < 10) {
            if (button.classList.contains('num')) {
                stored_display.innerText += button.innerText;
            };
            if (button.classList.contains('op')) {
                stored_display.innerText += button.innerText;
            };
        }
        if (button.classList.contains('del')) {
            stored_display.innerText = stored_display.innerText.slice(0, -1);
        };
        if (button.classList.contains('clear')) {
            result_display.innerText = '';
            stored_display.innerText = '';
        };
        if (button.classList.contains('equal')) {
            if (stored_display.innerText.match(/^\d+(\+|-|x|\/)\d+$/)) {
                result_display.innerText = '';
                result = calculate(stored_display.innerText).toString();
                if (result.length > 15) {
                    result = result.slice(0, 15);
                }
                result_display.innerText += result;
            }
        }


    });
});
