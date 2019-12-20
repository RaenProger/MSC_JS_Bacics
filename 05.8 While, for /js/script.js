// 5.8 Цикл While
const items = document.getElementsByTagName('li');

let counter = 0;
while(counter < items.length){
	items[counter].innerHTML = counter + 1;
	counter++
};





// 5.9 Цикл for классический

const divs = document.querySelectorAll('div');
console.log(divs);

for(let i = 0; i<divs.length; i++){
	divs[i].style.backgroundImage = 'liner-gradient('+45+'deg, red, yellow)';
};

