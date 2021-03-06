var animal = {};
animal.species = "dog";
animal["name"] = "Zelda";
animal.noises = [];

console.log(animal);

var noises = [];
noises[0] = "Woof";
noises.push("Bark");
noises.unshift("Ark");
noises[noises.length] = "WoofWoof";

console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

noises = animal["noises"];
animal["noises"].push("Woofens");

console.log(animal);

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
  
};

animals.push(duck);
  
console.log(animals);

var hedgehog = {
    species: "hedgehog",
    name: 'Sonic',
    noises: ['huff', 'puff', 'Gotta go fast!'],
};

animals.push(hedgehog);

var bear = {
    species: "bear",
    name: 'Smokey',
    noises: ['puffpuff', 'pass'],
};

animals.push(bear);
console.log(animals);
console.log(animals.length);

//Chose an array because it is zero-indexed!

var friends = [];
function getRandom(animals) {
    return animals[Math.floor(Math.random() * (animals.length - 0) + 0)]
}

var randomAnimal = getRandom(animals);

friends.push(randomAnimal.name);

console.log(friends);

var friendList = getRandom(animals);
    friends.push(friendList.name);
    animals[0].friends = friends;

function search(animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animalName) { 
            return animals[i];
        }   
    }
    return null;
}

function edit(animalName, animalObject) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animalName) {
            animals[i] = animalObject;
        }
    }
    return null;
}

function remove(animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animalName) {
            return animals.splice(i, 1);    
        }
    }
}

function create(object) {
    for(var i = 0; i < animals.length; i++) {
        if (object.name.length <= 0 || object.species.length <= 0 || animals[i].name === object.name) {
        return null;
        } 
    } 
    animals.push(object);
}

