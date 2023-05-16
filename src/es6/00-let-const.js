var lastName = "Laura";
LastName = "María";
console.log(lastName);

let fruit = "Pineapple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Cow";
animal = "Horse";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Pineapple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana"
    }
    console.log(fruit1); // function scope
    console.log(fruit2); // block scope
    console.log(fruit3); // block scope

}
fruits();