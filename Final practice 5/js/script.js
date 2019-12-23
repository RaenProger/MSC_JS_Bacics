

/* У вас есть данные

На их основе создайте страницу, демонстрирующую сравнение курсов криптовалюты 
— Заголовок берем из name — Цену пишем в 
параграф — Устанавливаем на странице цветной блок, 
ширина которого привязана к цене валюты */


let crypto = [  
{    
name : "Bitcoin",    
price: 80
},  
{    
name : "Ethereum",    
price: 716  
},  
{    
name : "Litecoin",    
price: 190  
}
]





for (let key in crypto){
  let value = document.getElementById(`title-${key}`);
  value.innerHTML = crypto[key].name;

  let price = document.getElementById(`price-${key}`);
  price.innerHTML = crypto[key].price;

  let block = document.getElementById(`block-${key}`);
  block.style.width = price.innerText + 'px';
}

