//Тернарный оператор Задание 4.4.1
/*
const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько ему лет');
answer = parseInt(answer);

(answer >= 18) ? 
Image.style.backgroundImage = 'url(img/item1.png)': 
Image.style.backgroundImage = 'url(img/item7.png)';
*/



/*GAME
const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'


player == 0 && computer == 1 ?
console.log('player win'):
console.log('computer win');

player == 1 && computer == 2 ?
console.log('player win'):
console.log('computer win');

player == 2 && computer == 0 ?
console.log('player win'):
console.log('computer win');
*/

//MODUL
const userNumber = prompt('Введите число');
userNumber < 0 ?
result = userNumber * -1:
result = userNumber;

console.log(result);


