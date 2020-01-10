/* 

Настало время написать что-то реально серьезное
Вот вводный архив с html и css кодом
https://yadi.sk/d/f1LSDu5Z3WMTJ5

Ваша задача реализовать такой функционал на javascript:

1. ﻿Дождаться прогрузки окна, после этого выполнять весь код программы

2. ﻿Создать класс Person
 а. ﻿Конструктор класса как аргумент содержит name
 b. ﻿Сам конструктор класса содержит this.name равное аргументу и this.happiness равное 0

3. ﻿Методы класса
 a. ﻿hasCat() — возвращает this.happiness увеличенное на 1
 b. ﻿hasRest() — возвращает this.happiness увеличенное на 1
 c. ﻿hasMoney() — возвращает this.happiness увеличенное на 1

 d. ﻿isSunny() — получает данные о погоде в Москве из API и в случае если температура 
в цельсиях больше 15 градусов. увеличивает this.happiness на 1 и возвращает 
this.happiness (всегда возвращается this.happiness, независимо, увеличили на 1 или нет)

4. ﻿Когда мы заполняем форму в левой колонке и нажимаем submit, происходит такой алгоритм
 a. ﻿Отменяется дефолтное событие
 b. ﻿Собираются в переменные все данные из формы
 c. ﻿Создается экземпляр класса Person, с аргументом name взятом из поля ввода с именем
 d. ﻿Делаются проверки, если радиобаттоны установлены на yes в полях “Есть кот?”, “Отдыхал недавно?”, “Денег ок?”, то вызываются методы hasCat(), hasRest() и hasMoney() созданного экземпляра соответственно
 e. ﻿Вызывается метод isSunny() созданного экземпляра
 f. ﻿Выбираются элементы .personName и .icon
 g. ﻿В .personName вставьте namе экземпляра и знак :
 h. ﻿Осуществляется проверка итогового значения happiness экземпляра. Если значение 4 вставьте иконку 😁в блок .icon, если 2 или 3 — 😐, в противном случае — ﻿☹️

Результат работы скрипта:
https://yadi.sk/i/-fkDSlVI3WMY7Q

Обратите внимание, что скрипт должен работать так, что при погоде ниже 15 градусов, выражение лица будет нейтральным, а не счастливым. Наш человек счастлив только от хорошей погоды

faces:
😁https://emojipedia.org/grinning-face-with-smiling-eyes/﻿
😐https://emojipedia.org/neutral-face/
﻿☹️﻿https://emojipedia.org/white-frowning-face/﻿
 */



window.onload = function() {

  class Person {
    constructor(name){
      this.name = name;
      this.happiness = 0;
    }
    hasCat(){
      return (++this.happiness);
    }

    hasRest(){
      return (++this.happiness);
    }

    hasMoney(){
      return (++this.happiness);
    }

    isSunny(){
      const APIKey = '90ab88407ceb8e25a4c7614048316c1c';
const city = 'Moscow';
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest(); // Новый запрос
xhr.open('GET', url, false); //Настройки
xhr.send(); //Отправление



if(xhr.status != 200){
  console.log(xhr.status + '' + xhr.statusText); // Проверка статуса  
}else {
 let DATA = JSON.parse(xhr.responseText); // Статус ответа
 console.log();
 document.write(DATA.main.temp - 273);
}

if((DATA.main.temp - 273) > 15){
  return (++this.happiness);
      }
} else {
  return (this.happiness); 
}

};