console.log('====== DOG TEST =========')
var dog = {
	name: 'Fido',
	weight: 20.2,
	age: 4,
	breed: 'mixed',
	activity: 'fetch balls'
};

if (dog.weight > 20) {
	dog.bark = "WOOF WOOF"; 
} else {
	dog.bark = "woof woof";
}

var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
console.log(speak);

