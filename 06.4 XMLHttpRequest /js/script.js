const API = '099971273984c2327af737432hj';
const city = 'Miami';
const url = '';

let xhr = new XMLHttpRequest(); // Новый запрос
xhr.open('GET', url, false); //Настройки
xhr.send(); //Отправление

if(xhr.status != 200){
    console.log(xhr.status +''+ xhr.statusText); // Проверка статуса  
}else{
   let DATA = JSON.parse(xhr.responseText); // Статус ответа
   console.log();
   document.write(DATA.main.temp - 273);
}





