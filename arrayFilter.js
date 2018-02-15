const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];

let dogs = function(animals) {
    let doggies = [];

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].species === "dog") {
            doggies.push(animals[i].name);
        }
    }

    return doggies;
};

console.log(dogs(Animals));
