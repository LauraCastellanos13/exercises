const users = {
  javier: { country: "MX" },
  laura: { country: "CO" }
}
console.log(users.javier.country);
console.log(users?.laura.age || 'No existe esta información en la base de datos')