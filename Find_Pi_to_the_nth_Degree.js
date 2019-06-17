// Find PI to the Nth Digit - Enter a number and have the program generate PI up to // that many decimal places. Keep a limit to how far the program will go.

// Math.PI to use PI in JavaScript and .toFixed to set how many digits are invoked.

console.log("Enter how many digits of PI you would like viewed. Program may not exceed 10 decimal places.");

function invokePI(digit) {
    var pi = Math.PI;
    if (digit > 10) {
        return pi.toFixed(10);
    } else {
        return pi.toFixed(digit);
    }
}

invokePI();