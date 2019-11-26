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

const button = document.querySelector('button');
const popUp = document.querySelector('.popup');

button.addEventListener('click', function(){
    popUp.style.display = 'flex';
});