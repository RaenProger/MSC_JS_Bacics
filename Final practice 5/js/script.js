

/* У вас есть данные

На их основе создайте страницу, демонстрирующую сравнение курсов криптовалюты 
— Заголовок берем из name — Цену пишем в 
параграф — Устанавливаем на странице цветной блок, 
ширина которого привязана к цене валюты */


let crypto = [  
{    
name : "Bitcoin",    
price: 1388.37  
},  
{    
name : "Ethereum",    
price: 716  
},  
{    
name : "Litecoin",    
price: 140  
}
]

let element = document.querySelector('h2');
let elements = document.querySelector('h2');

element.innerHTML = 34;
elements.innerHTML = 36;




/* for (let key in crypto){
 element.innerHTML = crypto[key].name;
 console.log(crypto[key].name);
} */


