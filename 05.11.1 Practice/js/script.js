/* У вас есть массив



	При помощи любых циклов for переберите его так, чтобы в консоль вывели все птицы и животные
	Вам понадобится не один цикл, подумайте об этом */

	let names = [
		[
		  ['куры', 'гуси', 'павлины'],
		  ['сокол', 'орел', 'соловей']
		],
		[
		  ['собака', 'кошка'],
		  ['обезьяна', 'рысь']
		]
	   ];
	  
	  for (let nameArr in names) {
		 for (let animals in names[nameArr]) {
		   for (let animal in names[nameArr][animals]) {
			 console.log(names[nameArr][animals][animal])
		   }
		 }
	  }
	