/*
Помните скрипт про покупки яблок и хлеба?
Теперь перепишите его в виде функции под названием haveEnough
В качестве аргументов используйте все входные параметры этого скрипта, 
перечислив их в скобках через запятую
Функция должна возвращать “Вам хватает денег на покупки” 
(если хватает) или “Вам не хватает денег”, если не хватает
*/




//Практика 2
var money = prompt("Cколько у вас с собой есть денег?");
var apples = prompt("Cколько вы купили яблок?");
var bread = prompt("Cколько вы купили батонов хлеба?");
var applePrice = prompt("Cколько стоит одно яблоко?");
var breadPrice = prompt("Cколько стоит один батон хлеба?");
var totalPrice = applePrice * apples + breadPrice * bread;
var total = money >= totalPrice;
//console.log(total);

function haveEnough(money, apples, bread, applePrice, breadPrice){
    return total;
}

alert(haveEnough('Вам хватает денег на покупки'));
alert(haveEnough('Вам не хватает денег'));