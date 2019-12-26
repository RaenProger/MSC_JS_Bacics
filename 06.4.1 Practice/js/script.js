//Practice 6.4.1
/* Доработайте скрипт .
 Добавьте на страницу форму с инпутом и кнопку “узнать температуру”.
По сабмиту формы выводите температуру в том городе, который указан в инпуте.

Если чувствуете силы — добавьте второй вывод со скоростью ветра. */


const form = document.forms[0];
const insert = document.querySelector('.total');

let btn = document.querySelector('.btn');
let cityName = document.querySelector('.inp');


const APIKey = '90ab88407ceb8e25a4c7614048316c1c';
const city = 'Miami';
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest(); // Новый запрос
xhr.open('GET', url, false); //Настройки
xhr.send(); //Отправление


form.onsubmit = function(e) {
    e.preventDefault();
    let DATA = JSON.parse(xhr.responseText);

    if(cityName.value == city) {
        insert.innerHTML = DATA.main.temp - 273;
    } else {
        insert.innerHTML = 'такого города нет';
    }
};





