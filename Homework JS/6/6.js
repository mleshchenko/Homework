const array = [2,5,null, 'rtyhg',{d: 5, array: [1,2,3,4]}, undefined];
const type = prompt('Введите тп данных строкой на латинице', 'null');

function arrayFilter(array, type) {
    return array.filter(a => typeof a === type.toLowerCase())
}

console.log(arrayFilter(array, type));
