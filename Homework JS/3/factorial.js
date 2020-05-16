let nthFactorial = Number(prompt('Введите натуральное положительное число', '0'));

const factorial = function(nthFactorial) {
    let result;
    if (nthFactorial === 0 || nthFactorial === 1) result = 1
    else
        result = nthFactorial*factorial(nthFactorial-1);
    return result;
}

alert(`${nthFactorial}! = ${factorial(nthFactorial)}`);