/* ADDITIONAL TASK

let lowerLimit = Number(prompt('Введите нижний придел промежутка','Меньшее число'));
let upperLimit = Number(prompt('Введите верхний предел промежутка', 'Большее число'));

let rejectionFlag = 0;

while (lowerLimit >= upperLimit || (!lowerLimit && !upperLimit || Number.isNaN(lowerLimit) || Number.isNaN(upperLimit))){
    lowerLimit = Number(prompt('Нарушена логика промежутка!\nНижний предел промежутка должен быть меньшим числом\nВведите нижний предел промежутка','Меньшее число'));
    upperLimit = Number(prompt('Нарушена логика промежутка!\nВерхний предел промежутка должен быть большим числом\nВведите верхний предел промежутка', 'Большее число'));
    if (Number.isNaN(lowerLimit) || Number.isNaN(upperLimit) || (!lowerLimit && !upperLimit)) {
        rejectionFlag++;
        break;
    }
};

if (rejectionFlag) {
    alert('Я так понял простые числа из заданного промежутка не нужны :) Пока!')
} else {
    let dividersCounter = 0;
    let plainNumbersCounter = 0;
    for (let i = lowerLimit; i < upperLimit+1;i++) {
        for (let j = 2; j < Math.trunc(i/2)+1; j++) {
            if (i%j === 0 || i === 1) dividersCounter++;
        }
        if (!dividersCounter) {
            console.log(i);
            plainNumbersCounter++;
        }
        dividersCounter = 0;
    }
    if (!plainNumbersCounter) prompt('В указанном промежутке нет простых чисел!');
};

 */





