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
const active_display = document.getElementById('active');
const stored_display = document.getElementById('stored');
let stored_value = [];

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (button.classList.contains('op') || button.classList.contains('equal')) {
            if (active_display.innerText.length != 0) {
                stored_value.push(parseInt(active_display.innerText));
                stored_value.push(button.innerText);
                stored_display.innerText = stored_value.join(' ');
                active_display.innerText = ''
            };
        } else if (button.classList.contains('del')) {
            active_display.innerText = active_display.innerText.slice(0, -1);
        } else if (button.classList.contains('clear')) {
            active_display.innerText = '';
            stored_display.innerText = '';
            stored_value = [];
        } else {
            active_display.innerText += button.innerText;

        };
        console.log(stored_value);

    });
});
