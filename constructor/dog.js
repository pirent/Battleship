function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 25) {
			alert(this.name + " says Woof!");
		}
		else {
			alert(this.name + " says Yip!");
		}
	}
}

var fido = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog('Fluffy', 'Poodle', 30);
var spot = new Dog('Spot', 'Chihuahua', 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i += 1) {
	var size = "small";
	if (dogs[i].weight > 10) {
		size = "large";
	}
	console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
	dogs[i].bark();
}

// ================================
// INDEPENDENT METHODS
// ================================
fido.owner = "Bob";	// Can add a new property just by assigning it a vlua in our object
delete fido.weight; // Or can get rid of a property by using the delete operator

fido.trust = function(person) {
	return (person === "Bob");
};

var notBite = fido.trust("Bob");

// =================================
// ARRAY OBJECT
// =================================
var arrayLiteral = [0, 1, 2];
var arrayObject = new Array(3);
arrayObject[0] = 0;
arrayObject[1] = 1;
arrayObject[2] = 2;

console.log(arrayObject.reverse());
console.log(arrayLiteral.reverse());
