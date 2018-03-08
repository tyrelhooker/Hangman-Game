
var wordBank = ["Stark", "Lannister", "Targaryen", "Arryn", "Tully", "Greyjoy", "Baratheon", "Tyrell", "Martell"];

var wins = 0;
var guessesLeft = index.length - guessedLetters;
var guessedLetters;

document.onkeyup = function(event) {
  var userGuess = event.key;
  var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  if (userGuess === gameWord.charAt()) {
    
  }
}
