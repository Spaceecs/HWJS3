let continueCalculation = true;

while (continueCalculation) {
    // Запит чисел і знака
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let operator = prompt("Enter an operator (+, -, *, /):");

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is not allowed!");
                continue;
            }
            break;
        default:
            alert("Invalid operator!");
            continue;
    }
    alert(`Result: ${result}`);
    continueCalculation = confirm("Do you want to perform another calculation?");
}
