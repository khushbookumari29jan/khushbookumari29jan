// Function to add input to the display screen
function addToScreen(value) {
    document.getElementById('displayScreen').value += value;
}

// Function to clear the display screen
function clearScreen() {
    document.getElementById('displayScreen').value = '';
}

// Function to perform arithmetic operations
function operation(operator) {
    var display = document.getElementById('displayScreen');
    display.value += operator;
}

// Function to calculate the result
function calculate() {
    var display = document.getElementById('displayScreen');
    var expression = display.value;
    
    // Using try-catch to handle potential syntax errors in eval
    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
