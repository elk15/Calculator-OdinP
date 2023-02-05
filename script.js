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

//Display functions
const result_display = document.getElementById('result');
const stored_display = document.getElementById('stored');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (button.classList.contains('num')) {
            stored_display.innerText += button.innerText
        };
        if (button.classList.contains('op')) {
            stored_display.innerText += button.innerText
        };
        if (button.classList.contains('del')) {
            stored_display.innerText = stored_display.innerText.slice(0, -1);
        };
        if (button.classList.contains('clear')) {
            result_display.innerText = '';
            stored_display.innerText = '';
        };
        if (button.classList.contains('equal')) {

        }

    });
});
