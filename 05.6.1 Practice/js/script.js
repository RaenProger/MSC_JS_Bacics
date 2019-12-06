//5.6.1 Практика
//Создайте форму, которая будет по сабмиту рассчитывать 
//синус введенного в input угла. Вам понадобится найти этот метод объекта Math



const form = document.forms[0];
const insert = document.querySelector('.total');

form.addEventListener = function(e){
	e.preventDefault();
	Math.sin()
	insert.innerHTML = Math.sin(Math.PI / 2);
};

