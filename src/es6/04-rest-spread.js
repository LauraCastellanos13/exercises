// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
// Opcion 1
console.log(a, b);
// Opcion 2
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Alexa", age: 34 };
let { username, age } = user;
// Opcion 1
console.log(username, age);
// Opcion 2
console.log(username, user.age);

//La desestructuración permite desarmar objetos y asignarle a cada elemento una variable distinta

//Spread operator /... hace la desestructuración  

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

let person = { name: "Pierre", age: 30 };
let country = "Italy"

let data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) { //Toma los parámetros y los agrega
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(2, 3, 4, 5);