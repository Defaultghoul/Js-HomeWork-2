// 1

let celsius = +prompt('Введіть Градуси Цельсія');
alert((celsius * 9) / 5 + 32);

// 2

let month = +prompt('Введіть кількість днів в місяці:');

console.log(`Годин: ${month * 24}, Хвилин: ${month * 24 * 60}`);

// 3

let playerHp = 100;
let playerEnegry = 100;

playerHp -= 10;
playerEnegry -= 11;

console.log(`Здоровья: ${playerHp}, енергія: ${playerEnegry}`);

// 4

let amount = 1944;
let discount = +prompt('Введіть знижку:') * 0.01;
let resultDiscount = amount * discount;

amount = amount - resultDiscount;

console.log(amount);

// 5

let floatingNumber = 4.8;

console.log('Округлене число: ' + Math.floor(floatingNumber));

// 6

let parseNumber = '4.8';

console.log('Десяткове число: ' + Number.parseFloat(parseNumber));

// 7

let fullNumber = '10';

console.log('Ціле число: ' + Number.parseInt(fullNumber));

// 8

let number = 10;

console.log('Квадратний корінь числа: ' + Math.sqrt(number));

// 9

let integerNumber = 10;
let stringNumber = '10';

console.log(parseInt(stringNumber));

console.log(integerNumber.toString());
