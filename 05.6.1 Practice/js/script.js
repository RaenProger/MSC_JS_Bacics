//5.6.1 Практика
//Создайте форму, которая будет по сабмиту рассчитывать 
//синус введенного в input угла. Вам понадобится найти этот метод объекта Math



const form = document.forms[0];
const insert = document.querySelector('.total');
const input = document.querySelector('input');

form.addEventListener = function(e){
	e.preventDefault();
	insert.innerHTML = Math.sin(input.value);
};

