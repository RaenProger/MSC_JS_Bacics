//console.log("You are at" + window.location);


//Practice 3

//Question -1

const body = document.querySelector('body');

let quest = prompt('Какой ты хошечшь фон у страницы?');
body.style.backgroundColor = quest;

//Question -2

const page = document.querySelector('.page');

let quest2 = prompt('Какой будет цвет текста на странице?');
page.style.backgroundColor = quest2;

//Question -3
let quest3 = prompt('Как зовут человека, который вас вдохновляет?');
const name = document.querySelector('.name');

name.innerHTML = quest3;


//Question -4   https://i.ibb.co/3pLrM92/MC-1.png  адрес картинки
let quest4 = prompt('Введите адрес картинки');
const image = document.querySelector('img');
image.setAttribute('src', 'quest4');

//Question -5
let quest5 = prompt('Введите текст страницы');
const text = document.querySelector('.shortBio');
text.setAttribute('.shortBio', 'quest5');

//Question -6
const shortBio = document.querySelector('.shortBio');
shortBio.className += ' animated'; 





