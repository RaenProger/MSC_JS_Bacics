//Final Practice  4

/*У вас есть код

https://jsfiddle.net/Lsk3qopt/

В нем написан HTML и CSS﻿

Ваша задача

1. ﻿Написать такой JS, который по нажатию на кнопку 
с классом .request изменит стиль блока .popup на строку flex

2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’

3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0

4. ﻿По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’
*/

// 1. 2.
const button = document.querySelector('.request');
const closePopUp = document.querySelector('.closePopup');
const popUp = document.querySelector('.popup');


button.addEventListener('click', function(){
popUp.style.display = 'flex';
});

popUp.addEventListener('click', function(){
popUp.style.display = 'none';
});

// 3.4.
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');



openMenu.addEventListener('click' , function(){
menu.style.left = '0';
});

closeMenu.addEventListener('click' , function(){
   menu.style.left = '-50vw';
    });
