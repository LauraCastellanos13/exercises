const user = { username: "laura", age: 25, coutry: "CO" };
const { username, ...values } = user;

console.log(username);
console.log(values);