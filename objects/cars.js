var chevy = {
	make: 'Chevy',
	model: 'Bel Air',
	year: 1957,
	color: 'red',
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,

	start: function() {
		this.started = true;
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("You need to start engine first.");
		}
	}
};

var cadi = {
	make: 'Cadillac',
	model: 'GM',
	year: 1955,
	color: 'tan',
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,

	start: function() {
		this.started = true;
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("You need to start engine first.");
		}
	}
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
	fuel: 0,

	start: function() {
		if (this.fuel > 0) {
			this.started = true;	
		} else {
			console.log("The car is on empty, fill up before starting!");
		}
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				console.log("Uh oh, out of fuel.");
				this.stop();
			}
		} else {
			console.log("You need to start engine first.");
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

var taxi = {
	make: 'Webville Motors',
	model: 'Taxi',
	year: 1955,
	color: 'yellow',
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,

	start: function() {
		this.started = true;
	},

	stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("You need to start engine first.");
		}
	}
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

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

console.log("Trying to start all cars.");
cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();

