// View object
var view = {

	/**
	* This method takes a string message and displays it
	* in the message display area
	*/
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	/**
	* Display the result of user input
	*/
	displayResult: function(userInput, isHit) {
		var cell = document.getElementById(userInput);
		cell.setAttribute("class", isHit ? "hit" : "miss");
	}
}

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipSunk: 0,
	ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
			 { locations: [0, 0, 0], hits: ["", "", ""] },
			 { locations: [0, 0, 0], hits: ["", "", ""] }],

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayResult(guess, true);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipSunk += 1;
				}
				return true;
			}
		}
		view.displayResult(guess, false);
		view.displayMessage("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i += 1) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i += 1) {
			do {
				locations = this.generateShip();
			}
			while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row;
		var col;

		if (direction === 1) {
			// Generate a starting location for a horizontal ship
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		}
		else {
			// Generate a starting location for a vertical ship
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i += 1) {
			if (direction === 1) {
				// Add location to array for new horizontal ship
				newShipLocations.push(row + "" + (col + i));
			}
			else {
				// Add location to arry for new vertical ship
				newShipLocations.push((row + i) + "" + col);
			}
		}

		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i += 1) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j += 1) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = this.parseGuess(guess);
		if (location) {
			this.guesses += 1;
			var hit = model.fire(location);
			if (hit && model.shipSunk === model.numShips) {
				view.displayMessage("You sank all my battleship, in " + this.guesses + " guesses");
			}
		}
	},

	parseGuess: function(guess) {
		var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

		if (guess === null || guess.length !==2) {
			alert("Oops, please enter a letter and a number on the board.");
		}
		else {
			firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar);	// a number
			var column = guess.charAt(1);	// a string

			if (isNaN(row) || isNaN(column)) {
				alert("Oops, that isn't on the board");
			}
			else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Oops. that's off the board!");
			} 
			else {
				return row + column;	// concat number and string so we'll end up with a string
			}
		}
		return null;
	}
};

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();

		// Return false so the form doesn't do anything else (like try to submit itself)
		return false;
	}
}

window.onload = init;

// ============== TESTING ====================== ||
// ======== FOR VIEW OBJECT ======== ||
// view.displayResult("00", false);
// view.displayResult("34", true);
// view.displayResult("55", false);
// view.displayResult("12", true);
// view.displayResult("25", false);
// view.displayResult("26", true);

// view.displayMessage("Tap tap, is this thing on?")

// ======== FOR MODEL OBJECT ======== ||
// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");

// ======== FOR CONTROLLER OBJECT ======== ||
// console.log(controller.parseGuess("A0"));
// console.log(controller.parseGuess("B6"));
// console.log(controller.parseGuess("G3"));
// console.log(controller.parseGuess("H0"));
// console.log(controller.parseGuess("A7"));

// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

