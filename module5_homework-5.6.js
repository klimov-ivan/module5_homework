//Задание 6.

let arr = [3, 3, 3];

let isEqual = true;
let reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

arr.forEach(function(item, index, array) {
    if (item !== reference) {
		isEqual = false;

	}
 
 });
 console.log(isEqual);
	
 //Задание 7.	
 
let arry = [8, 3, null, 2, 7, 6, undefined, 0, '', NaN,0];
let zero =0;
let number = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arry.length; i++){
  if (typeof (arry[i]) === "number" && !isNaN(arry[i])){
	
	if (arry[i] === 0) {
		zero += 1;
	} else if (arry[i] % 2 === 0) {
		even += 1;
	}else if (arry[i] % 2 !== 0) {
		odd += 1;
	}
  }
  
}
console.log(arry);
console.log(`В массиве нолей: ${zero} , чётных: ${even} , нечётных: ${odd}; `);





