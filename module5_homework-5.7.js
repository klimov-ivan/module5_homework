//Задание 8.


let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");

map.forEach((value, key) => {
    console.log(`<< Ключ - ${key}, значение - ${value} >>.`);
});


