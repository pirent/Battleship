var chevy = {
	make: 'Chevy',
	model: 'Bel Air',
	year: 1957,
	color: 'red',
	passengers: 2,
	convertible: false,
	mileage: 1021
};

var cadi = {
	make: 'Cadillac',
	model: 'GM',
	year: 1955,
	color: 'tan',
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var fiat = {
	make: 'Fiat',
	model: '500',
	year: 1957,
	color: 'Medium Blue',
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,

	start: function() {
		this.started = true;
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start engine first.");
		}
	}
};

var taxi = {
	make: 'Webville Motors',
	model: 'Taxi',
	year: 1955,
	color: 'yellow',
	passengers: 4,
	convertible: false,
	mileage: 281341
};

function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

var cars = [];
cars.push(taxi);
cars.push(chevy);
cars.push(fiat);
cars.push(cadi);

for (var i = 0; i < cars.length; i++) {
	var car = cars[i];
	var worthALook = prequal(car);

	if (worthALook) {
		console.log('You gotta check out this ' + car.make + ' ' + car.model);
	} else {
		console.log('You should really pass on the ' + car.make + ' ' + car.model);
	}
}

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();

// ============================================
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

// ==================================================
console.log("===== SECRET =====");

function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	}
	else {
		return 'Invalid password! No secret for you.';
	}
}

function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}

var superSecretFile = {
	level: 'classified',
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 3);
console.log(secret);
secret = getSecret(superSecretFile, 2);
console.log(secret);