// Se incluye el método "includes"
let numbers = [ 1, 2, 3, 5, 6, 7, 9]
console.log(numbers.includes(8));

const list = ['Laura', "José", "Ramón"]
console.log(list.includes('Laura'))

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);
