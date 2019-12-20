// 5.7.1 Методы работы с массивами

let arr = [1,2,3]
console.log(arr);

//добавление последенего
arr.push(4,5);
console.log(arr);

//удаление последнего
arr.pop()
console.log(arr);

//добавление начального
arr.unshift(-1,0);
console.log(arr);

//удаление начальных
arr.shift()
console.log(arr);




// 5.7.2 Методы работы с массивами (удаление любых элементов в массиве)

//удаление без сдвига(undefined)

delete arr[2];
console.log(arr);

//удаление co сдвигом
arr.splice(1,2);
console.log(arr);

//удаление с заменой
arr.splice(1,1, 'Здесь должно быть число 1', 'Здесь должно быть число 2', 'Здесь должно быть число 3');
console.log(arr);






// 5.7.3 Методы работы с массивами 

//Вырезать нужную копию элементов массива

let ar = [1,2,3,4]
ar.slice(1,3);
console.log(ar);


//разворот

ar.reverse();
console.log(ar);



//конкат ( добавление )

let b = [5,6,7]
ar.concat(b);
console.log(ar);





// 5.7.3 Методы работы с массивами 

// Поиск в массиве
let names = ['Sasha', 'Peter', 'Kola'];
names.indexOf('Peter');
console.log(names);


// Cортировка
let a = [3,2,6];
function compare(a,b) {
	if(a>b) return 1
	if(a<b) return -1
}

a.sort(compare);
console.log(a);