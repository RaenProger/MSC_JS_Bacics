
/*
// Scope
var a = 'h1';
function myFunc() {
    a = 'hello';
    return a;
}

console.log(a);

function myFunc2(){
    var b = 3;
    console.log(b);
}

myFunc();
*/



//Events
const button = document.querySelector('button');
const par = document.querySelector('p');

let state = 'none';

button.addEventListener('click', function(){
if(state = 'none') {
    par.style.display ='block';
    state = 'block';
} else {
    par.style.display ='none';
    state ='none';
}
})
