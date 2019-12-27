//Practice 6.4.1
/* Доработайте скрипт .
 Добавьте на страницу форму с инпутом и кнопку “узнать температуру”.
По сабмиту формы выводите температуру в том городе, который указан в инпуте.

Если чувствуете силы — добавьте второй вывод со скоростью ветра. */


const form = document.forms[0];

form.onsubmit = function(e) {
const insert = document.querySelector('.total');
const cityName  = document.querySelector('.inp').value;

let btn = document.querySelector('.btn');



const APIKey = '90ab88407ceb8e25a4c7614048316c1c';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+APIKey;

let xhr = new XMLHttpRequest(); // Новый запрос
xhr.open('GET', url, false); //Настройки
xhr.send(); //Отправление



    e.preventDefault();
   
    let DATA = JSON.parse(xhr.responseText);

    
        insert.innerHTML = DATA.main.temp - 273;
    
};





