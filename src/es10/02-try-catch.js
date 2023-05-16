// uso de try/catch cuando hay llamadas a una API, pero con async y await
try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherFn();
} catch {
  console.log("This is an error")
}