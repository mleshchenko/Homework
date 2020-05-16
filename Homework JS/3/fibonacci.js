let nthNumber = Number(prompt('Введите какое по порядку число Фибоначчи вы хотите сгенерировать'));

const number = new Array(nthNumber);
let counter = 0;

let fibo = function(nthNumber) {
    let result;
    if (number [nthNumber] !== undefined) {
        counter++;
        return number[nthNumber];
    }
    if (nthNumber === 2 || nthNumber === 1) {
        result = 1} else {
        result = fibo(nthNumber -1) + fibo(nthNumber-2)
    };

    number [nthNumber] = result;

    return result;
}

alert(fibo(nthNumber));
console.log (counter, number);
