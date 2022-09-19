//Задание 1.

let meaning = +prompt("Введите значение");
console.log(typeof meaning);
let meaningInt = meaning;

if (meaning === meaningInt) {
	console.log('число');
    if (meaning % 2 === 0) {
	console.log('чётное');
    }else if (meaning % 2 !== 0) {
	console.log('не чётное');
    }
}else {
	console.log('Упс, кажется, вы ошиблись');
}

let nanANumber  = isNaN(meaning) ? 'это не число' : meaning ;
console.log(nanANumber);
console.log(isNaN(meaning));

//Задание 2.

let x =  'OK';
switch (typeof(x)) {
  case 'string':
    console.log(x + ' = X - строка');
    break;
  case 'boolean':
    console.log(x + ' = X - логический тип');
    break;
  case 'number':
    console.log(x + ' = X - число');
    break;
    default:
    console.log('Тип X не определен');
}