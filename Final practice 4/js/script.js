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
const button = document.querySelector('button');
const popUp = document.querySelector('.popup');

let state = 'none';
button.addEventListener('click', function(){
    if (state == 'none'){
    popUp.style.display = 'flex';
    state = 'flex';
    } else {
    popUp.style.display = 'none';
    state = 'none';
    }
});

// 3.4.
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click' , function(){
if(state == 'none'){
menu.style.left = '0';
state = '0';
} else {
closeMenu.style.left = '-50vw';
state = '-50vw';
}
});

