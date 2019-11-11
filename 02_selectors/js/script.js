//console.log("You are at" + window.location);





/*Практика 2
var money = prompt("Cколько у вас с собой есть денег?");
var apples = prompt("Cколько вы купили яблок?");
var bread = prompt("Cколько вы купили батонов хлеба?");
var applePrice = prompt("Cколько стоит одно яблоко?");
var breadPrice = prompt("Cколько стоит один батон хлеба?");
var totalPrice = applePrice * apples + breadPrice * bread;
var total = money >= totalPrice;
console.log(total);*/

const byTag = document.getElementsByTagName("div");
const byClass = document.getElementsByClassName("myClass");
const byId = document.getElementById("myId");

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll(".coolClass.mine");
const firstBySelector = document.querySelector(".coolClass.mine");


console.log(allBySelector, irstBySelector);




