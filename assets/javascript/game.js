
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var letterToBeGuessed = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {

	var userGuess = event.key.toLowerCase();

	if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		
		guessesLeft--;
	}

	
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses So Far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

  var html = "<p><h1>The Psychic Game</h1></p>" + 
      "<p><h3>Guess what letter I\'m thinking of</h3></p>" + 
      "<p><h4>Wins: " + wins + "</h4></p>" + 
      "<p><h4>Losses: " + losses + "</h4></p>" + 
      "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
      "<p><h3>Your Guesses So Far: " + guessesSoFar + "</h3></p>";

	document.querySelector("#game").innerHTML = html;}