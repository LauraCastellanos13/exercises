//ECMAS5
function newUser (name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Colombia';
    console.log(name, age, country)
}

newUser();
newUser('Laura', 25, 'México')

//ECMAS6

function newAdmin (name = 'Oscar', age = 32, country = "Chile"){
    console.log(name, age, country)
}

newAdmin();
newAdmin('Ana', 28, 'Perú')