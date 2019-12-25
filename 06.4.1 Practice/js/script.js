//Practice 6.4.1
/* Доработайте скрипт .
 Добавьте на страницу форму с инпутом и кнопку “узнать температуру”.
По сабмиту формы выводите температуру в том городе, который указан в инпуте.

Если чувствуете силы — добавьте второй вывод со скоростью ветра. */




const APIKey = '90ab88407ceb8e25a4c7614048316c1c';
const city = 'Miami';
const url = 'https://samples.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest(); // Новый запрос
xhr.open('GET', url, false); //Настройки
xhr.send(); //Отправление



if(xhr.status != 200){
    console.log(xhr.status + '' + xhr.statusText); // Проверка статуса  
}else{
   let DATA = JSON.parse(xhr.responseText); // Статус ответа
   console.log();
   document.write(DATA.main.temp - 273);
}





