/* MAIN TASK
let userDefinedLimit = Number(prompt('Введите предел промежутка', 'Целое число'));

let rejectionFlag = 0;
while (!Number.isInteger(userDefinedLimit) || Number.isNaN(userDefinedLimit) || !userDefinedLimit) {
    userDefinedLimit = Number(prompt('Нарушены условия ввода!\nВведите целое число!', 'Целое число'));
    if (Number.isNaN(userDefinedLimit) || !userDefinedLimit) {
        rejectionFlag++;
        break;
    }
}

let numbersCounter = 0;
let lowerLimit = 0;
let upperLimit = 0;

if (rejectionFlag) {
    alert('Ну Вы подумайте и возвращайтесь :)');
} else {
    if (userDefinedLimit < 0) {
        lowerLimit = userDefinedLimit
    } else {
        upperLimit = userDefinedLimit;
    }
    for (let i = lowerLimit; i < upperLimit+1; i++) {
        if (i%5 === 0 && i!== 0) {
            console.log(i);
            numbersCounter++;
        }
    }
    if (!numbersCounter) {
        alert(`В промежутке от ${lowerLimit} до ${upperLimit}\nчисла кратные 5 отсутствуют!`);
    }
};

 */
