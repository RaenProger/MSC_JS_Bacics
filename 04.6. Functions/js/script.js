//Function
/*
function sayHi() {
return 'Привет студень!';
}
document.body.innerHTML = sayHi();

function sayName(name){
    return 'Привет '+ name;
}
console.log(sayName('Саша'));
console.log(sayName('Петруха'));



//Function anonimus

let myFunc = function(element, color) {
element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');
myFunc(heading, 'red');
myFunc(par, 'green');
*/

//Arrow function
let myText = (element, text) => {
element.innerHTML = text;
}
myText(document.body, 'привет');