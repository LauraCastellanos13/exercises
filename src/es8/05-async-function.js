//La palabra reservada “async” quiere decir que una función siempre devolverá una promesa. 
// La palabra reservada “await”, solamente existe dentro de una función “async”.

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Async!"), 2000)
      : reject(new Error("Error"));
  });
}

const anotherFn = async () => {
  const somethig = await fnAsync();
  console.log(somethig);
  console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");