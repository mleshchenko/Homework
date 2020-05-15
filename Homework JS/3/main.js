let firstNumber, secondNumber, mathOperationSign;

//INPUT DATA VERIFICATION

do {
    firstNumber = prompt('Введите первое число', firstNumber);
    if (!firstNumber && !isNaN(firstNumber)) break;
} while(isNaN(firstNumber));
do {
    secondNumber = prompt('Введите второе число', secondNumber);
    if (!secondNumber && !isNaN(secondNumber)) break;
} while (!isNaN(firstNumber) && isNaN(secondNumber));
do {
    mathOperationSign = prompt('Введите вид математической операции значком\n+\n-\n*\n/', mathOperationSign);
    if (!mathOperationSign && !isNaN(mathOperationSign)) break;
} while (mathOperationSign !== '-' && mathOperationSign !== '+' && mathOperationSign !== '*' && mathOperationSign !== '/');

// END

let mathOperation = function(firstNumber, secondNumber, mathOperationSign) {
let result;
    switch (mathOperationSign) {
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            result = (Number(firstNumber)/Number(secondNumber)).toFixed(2);
            break;
        default:
            return null;
    }
return result;
}

alert(`${firstNumber} ${mathOperationSign} ${secondNumber} = ${mathOperation(firstNumber,secondNumber,mathOperationSign)}`);
