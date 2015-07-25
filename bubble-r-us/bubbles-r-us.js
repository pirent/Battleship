var scores = [];
var costs = [];

function printAndGetHighScore(scores) {
	var output;
	var highScore = 0;

	for (var i = 0; i < scores.length; i+=1) {
		output = "Bubble solution #" + i + " score: " + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	}
	return highScore;
}

function getBestResults(scores, highScore) {
	var bestSolutions = [];
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == highScore) {
			bestSolutions.push(i);
		}
	}
	return bestSolutions;
}

function getMostCostEffectiveSolution(scores, costs, highscore) {
	var cost = 100;
	var index;

	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == highscore) {
			if (cost > costs[i]) {
				index = i;
				cost = costs[i];
			}
		}
	}
	return index;
}

// =================================================
// Init the scores with random value
for (var i = 0; i < 36; i++) {
	scores[i] = Math.floor(Math.random() * 10);
}

// Init cost with random value
for (var i = 0; i < 36; i++) {
	costs[i] = Math.floor(Math.random() * 10);
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");