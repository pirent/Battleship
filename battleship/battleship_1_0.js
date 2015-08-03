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
	ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
			 { locations: ["24", "34", "44"], hits: ["", "", ""] },
			 { locations: ["10", "11", "12"], hits: ["", "", ""] }],

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
	}
};

var controller = {
	guesses: 0,

	processGuess: function(guess) {

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
			} else {
				return row + column;	// concat number and string so we'll end up with a string
			}
		}
		return null;
	}
};

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
model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");

// ======== FOR CONTROLLER OBJECT ======== ||
console.log(controller.parseGuess("A0"));
console.log(controller.parseGuess("B6"));
console.log(controller.parseGuess("G3"));
console.log(controller.parseGuess("H0"));
console.log(controller.parseGuess("A7"));
