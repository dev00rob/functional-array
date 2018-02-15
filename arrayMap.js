const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];

function findNamesForLoop(animalia) {
    let names = [];

    for (let i = 0; i < animalia.length; i++) {
        names.push(animalia[i].name);
    }

    return names;
}

function findNamesArrayMap(animalia) {
    return animalia.map(leAnimal => leAnimal.name);
}

// letnames = findNamesForLoop(Animals);
 // let names = findNamesArrayMap(Animals);

console.log(findNamesForLoop(Animals));
console.log(findNamesArrayMap(Animals));
// console.log(names);
