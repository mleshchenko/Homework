const ageLimit18 = 18;
const ageLimit22 = 22;

let userName = prompt('Введите свое имя', 'Имя');

if (Number.isFinite(parseInt(userName)) || Number.isFinite(parseFloat(userName)) || !userName)
{
    userName = prompt('Имя не может начинаться c числа или быть числом!\nИли вы не ввели имя!\nВведите свое имя', `${userName}`);
    if (Number.isFinite(parseInt(userName)) || Number.isFinite(parseFloat(userName)) || !userName)
    {
        userName = prompt('Имя не может начинаться с числа или быть числом!\nИли вы не ввели имя!\nВведите свое имя', `${userName}`);
        if (Number.isFinite(parseInt(userName)) || Number.isFinite(parseFloat(userName)) || !userName)
        {
            userName = prompt('Имя не может начинаться или быть числом!\nИли вы не ввели имя!\nВведите свое имя', `${userName}`);
        }
    }
}

if (Number.isFinite(parseInt(userName)) || Number.isFinite(parseFloat(userName)) || !userName)
{
    alert('Не корректный ввод.\nВозьмите паузу.\nПодумайте над свои поведением.\nНу и возвращайтесь!');
} else {

    let userAge = (prompt(`${userName}, введите пожалуйста свой возраст целым числом`, 'возраст'));

    if (Number.isNaN(Number(userAge)) || Number(userAge) <= 0) {
        userAge = prompt(`${userName} Вы ввели возраст в неправильном формате!\nИли не ввели его вообще!\n${userName}, введите свой возраст целым числом`, `${userAge}`);
        if (Number.isNaN(Number(userAge)) || Number(userAge) <= 0) {
            userAge = prompt(`${userName} Вы ввели возраст в неправильном формате!\nИли не ввели его вообще!\n${userName}, введите свой возраст целым числом`, `${userAge}`);
            if (Number.isNaN(Number(userAge)) || Number(userAge) <= 0) {
                userAge = prompt(`${userName} Вы ввели возраст в неправильном формате!\nИли не ввели его вообще!\n${userName}, введите свой возраст целым числом`, `${userAge}`);
            }
        }
    }

    if (Number.isNaN(Number(userAge))  || Number(userAge) <= 0)
    {
        alert(`${userName} у Вас неопределен возраст.\nНайдите свое свидетельство о рождении.\nОпределите в нем свой возраст.\nИ возвращайтесь!`);
    } else {
        if (Number(userAge) < ageLimit18)
        {
            alert(`${userName}, Вам не разрешен вход на этот сайт вам меньше ${ageLimit18} лет!`);
        } else if (Number(userAge) >= ageLimit18 && Number(userAge) <= ageLimit22) {
            if (confirm('Вы уверены, что хотите продолжить?')) {
                alert(`${userName} добро пожаловать на сайт!`);
            } else {
                alert(`${userName} до новых встречь!`);
            }
        } else if (Number(userAge) > 22)
        {
        alert(`${userName} добро пожаловать на сайт!`);
        }
    }
}



console.log(!! '');