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
    if (b == 0) {
        return 'Impossible!'
    }
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
        if (arr[i].match(/\+|-|x|\//g)) {
            operator = arr[i];
            first = value;
            value = '';
        } else {
            value += arr[i];
        }
    };
    if (arr.includes('.')) {
        return operate(operator, parseFloat(first), parseFloat(value));
    }
    return operate(operator, parseInt(first), parseInt(value));
};

//Rounding Function

const round_num = (num) => {
    return Math.round(num * 1000) / 1000
};

//Display functions
const active_display = document.getElementById('active');
const stored_display = document.getElementById('stored');
let result = '';



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (active_display.innerText.length < 10) {
            if (button.classList.contains('num')) {
                active_display.innerText += button.innerText;
            };
        };
        if (button.classList.contains('op')) {
            if (active_display.innerText.length != 0) {
                if (stored_display.innerText.length != 0) {
                    if (stored_display.innerText.includes('=')) {
                        stored_display.innerText = active_display.innerText + button.innerText;
                    } else {
                        result = stored_display.innerText + active_display.innerText;
                        result = calculate(result);
                        stored_display.innerText = round_num(result) + button.innerText;
                    }

                } else {
                    stored_display.innerText = active_display.innerText + button.innerText;

                };
                active_display.innerText = '';
            };
        };

        if (button.classList.contains('dot')) {
            if (!active_display.innerText.includes('.')) {
                if (active_display.innerText.length == 0) {
                    active_display.innerText += 0;
                }
                active_display.innerText += button.innerText;
            }
        };
        if (button.classList.contains('del')) {
            active_display.innerText = active_display.innerText.slice(0, -1);
        };
        if (button.classList.contains('clear')) {
            active_display.innerText = '';
            stored_display.innerText = '';
            result = ''
        };
        if (button.classList.contains('equal')) {
            if (active_display.innerText.length != 0 && stored_display.innerText.length != 0) {
                result = stored_display.innerText + active_display.innerText;
                stored_display.innerText = result + button.innerText;
                active_display.innerText = round_num(calculate(result));
            }
        };

    })
})




