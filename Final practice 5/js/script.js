

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


// let Ethereum = document.getElementById('Ethereum');
// let Litecoin = document.getElementById('Litecoin');




for (let key in crypto){
  let element = document.getElementById(`title-0`);
  element.innerHTML = crypto[key].name;
}


