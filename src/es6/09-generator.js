function* iterate(array)  {
    for (let value of array) {
        yield value; // palabra reservada; Detiene la ejecución de la función generadora y el valor de la expresión que sigue a la palabra clave yield se devuelve
    }
}

const it = iterate(["Laura", "María", "Maxi", "Javier"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);