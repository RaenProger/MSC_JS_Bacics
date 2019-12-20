// 5.10 Цикл for of, for in

/* //for of
const buttons = document.querySelectorAll('button');
for(button of buttons){
	button.style.backgroundColor = 'lightblue';
}*/

//for in
let person = {
	name: 'Sasha',
	surname: 'Patlukh',
	teacher: true;
}

for(key in person){
	console.log(person[key]);
} 



// 5.11 Цикл forEach

const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = () => {
	lorems.forEach(function(lorem){
lorem.style.fontSize = '30px';
	})
}