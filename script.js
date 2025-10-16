let display = document.getElementById('result');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function trigFunction(func) {
    try {
        let value = parseFloat(display.value);
        let result;
        
        if (func === 'sin') {
            result = Math.sin(value * Math.PI / 180);
        } else if (func === 'cos') {
            result = Math.cos(value * Math.PI / 180);
        } else if (func === 'tan') {
            result = Math.tan(value * Math.PI / 180);
        } else if (func === 'log') {
            result = Math.log10(value);
        }
        
        display.value = result.toFixed(6);
    } catch (error) {
        display.value = 'Error';
    }
}

function powerFunction() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.pow(value, 2);
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        event.preventDefault();
        appendToDisplay('/');
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    }
});