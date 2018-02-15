const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];

function findNames(animalia) {
    let names = [];

    for (let i = 0; i < animalia.length; i++) {
        names.push(animalia[i].name);
    }

    return names;
}

let names = findNames(Animals);

console.log(names);
