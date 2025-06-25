// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Helper function to get numbers from inputs
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function () {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = add(a, b);
});

document.getElementById('subtract').addEventListener('click', function () {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = subtract(a, b);
});

document.getElementById('multiply').addEventListener('click', function () {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = multiply(a, b);
});

document.getElementById('divide').addEventListener('click', function () {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = divide(a, b);
});
