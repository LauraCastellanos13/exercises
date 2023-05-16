// Ejemplo flat;  permite aplanar los elementos internos de un array permitiendo eliminar array internos.
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3)); //profunidad-nivel

// Ejemplo flatmap; Permite aplanar los elementos de un array en un nivel.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers2.flatMap(num => num * 2))