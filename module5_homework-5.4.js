//Задание 3.
 
let str = 'Hello';
let str1 = str.split('');
let str2 = str1.reverse();
let str3 = str2.join('');

console.log(str3);

//Задание 4.

function  numMach(min, max) {
	return Math.random()*(max - min) + min;
}
console.log(numMach(0, 100));