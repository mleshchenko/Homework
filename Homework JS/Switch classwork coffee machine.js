const coffeePrice = 25;
const teaPrice = 10;
const capuccinoPrice = 50;

let requestedDrink = prompt('Введите название напитка', 'Кофе, Чай, Капучино');
let coinsDeposited = 0;
let selectedPrice = 0;

if (requestedDrink != 'кофе' && requestedDrink != 'чай' && requestedDrink != 'капучино')
{
    requestedDrink = prompt('К сожалению такого напитка нет в нашем меню! Введите название напитка', 'Кофе, Чай, Капучино')
}

requestedDrink = requestedDrink.toLowerCase();

switch (requestedDrink)
{
    case ('кофе'):
        selectedPrice = coffeePrice;
        coinsDeposited = Number(prompt(`${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        if (coinsDeposited < selectedPrice) 
        {
            coinsDeposited = Number(prompt(`Вы внесли недостаточно монет!\n${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        }
        if (coinsDeposited === selectedPrice)
        {
            alert(`Ваш ${requestedDrink} готов! Спасибо за сумму без сдачи!`)
        } else
                {
                    let change = coinsDeposited - selectedPrice;
                    alert(`Ваш ${requestedDrink} готов! Ваша сдача ${change} монет!`)
                }
        break;

    case ('чай'):
        selectedPrice = teaPrice;
        coinsDeposited = Number(prompt(`${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        if (coinsDeposited < selectedPrice) 
        {
            coinsDeposited = Number(prompt(`Вы внесли недостаточно монет!\n${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        }
        if (coinsDeposited === selectedPrice)
            {
                alert(`Ваш ${requestedDrink} готов! Спасибо за сумму без сдачи!`)
            } else 
                {
                    let change = coinsDeposited - selectedPrice;
                    alert(`Ваш ${requestedDrink} готов! Ваша сдача ${change} монет!`)
                }
        break;
        
    case ('капучино'):
        selectedPrice = capuccinoPrice;
        coinsDeposited = Number(prompt(`${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        if (coinsDeposited < selectedPrice) 
        {
            coinsDeposited = Number(prompt(`Вы внесли недостаточно монет!\n${requestedDrink} стоит ${selectedPrice} монет\nвнесите не менее ${selectedPrice} монет`));
        }
        if (coinsDeposited === selectedPrice)
        {
            alert(`Ваш ${requestedDrink} готов! Спасибо за сумму без сдачи!`)
        } else
                {
                    let change = coinsDeposited - selectedPrice;
                    alert(`Ваш ${requestedDrink} готов! Ваша сдача ${change} монет!`)
                }
        break;

    default:
        break;
};