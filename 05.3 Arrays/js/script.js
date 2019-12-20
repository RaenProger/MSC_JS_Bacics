let people = ['Вася', 'Casha', 'Tor', 23, true];
console.log(people);

console.log(people[1]);
people[1] = 'Yura';
console.log(people);

people.log(people.length); 

let bigArray = [
[1,2,3],
[true,false],
['a','b','c']
]

console.log(bigArray[0][1]);

let bigObject = {
	names: ['vasya','petay','sasha'],
	grades: [
	{
		intern:1,
		junior:2
	},
	   middle: 3,
	   sinor: 2
	]
}

console.log(bigObject.names[1])
console.log(bigObject.grades[1].middle)