
var wordBank = [
  "STARK", 
  "LANNISTER", 
  "TARGARYEN", 
  "ARRYN", 
  "TULLY", 
  "GREYJOY", 
  "BARATHEON", 
  "TYRELL", 
  "MARTELL"
];

var guessesRemaining = 6;
var lettersGuessed = [];
var randomWord = "";
var randomArray = [];
var blanksArray = [];
var wins = 0;
var losses = 0;
var userGuess; 
var img;
var keySound = new Audio("./assets/audio/swords-press.wav");
var winSound = new Audio("./assets/audio/fanfare_x.wav"); 
var errorSound = new Audio("./assets/audio/error.wav");   

// Function that updates the html score
function updateRemainingGuesses() {
  document.querySelector ("#game-counter").innerHTML = "<p>" + guessesRemaining + "</p>";
}

//Resets the wins and losses after each game and changes html.
function gameScoreReset() {
  wins = 0;
  losses = 0;
  document.querySelector ("#wins").innerHTML = "<p>" + wins + "</p";
  document.querySelector ("#losses").innerHTML = "<p>" + losses+ "</p";
}

// Resets the sigil opcity to 0.1 after a loss
function fadeSigilsReset(sigils) {
  var fader = document.getElementById("sigils"),
    value = fader.value;  
  fader.style.opacity = "0.3";
}

// Increases opacity of the opponent sigil as players guessesRemaining decrease
function fadeSigils(sigils) {
  var fader = document.getElementById("sigils"),
    value = fader.value;
  if (guessesRemaining === 6) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "0.4";
  } else if (guessesRemaining === 5) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "0.6";
  } else if (guessesRemaining === 4) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "0.7";
  } else if (guessesRemaining === 3) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "0.8";
  } else if (guessesRemaining === 2) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "0.9";
  } else if (guessesRemaining === 1) {
    var fader = document.getElementById("sigils");
    fader.style.opacity = "1.0";
    fadeSigilsReset();
  }
};

// Sets up the game for each round after a round loss or win
function roundSetup() {

  // Move a random word from wordBank to randomWord.   
  var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(randomWord);

  // Places sigil corresponding with randomWord to the right of game counters
  if (randomWord === "STARK") {
    document.getElementById("sigils").src="assets/images/stark.png";
  } else if (randomWord ==="LANNISTER") {
    document.getElementById('sigils').src="assets/images/lannister.jpg";
  } else if (randomWord ==="TARGARYEN") {
    document.getElementById('sigils').src="assets/images/targaryen.png";
  } else if (randomWord ==="ARRYN") {
    document.getElementById("sigils").src = "assets/images/arryn.png";
  } else if (randomWord ==="TULLY") {
    document.getElementById('sigils').src= "assets/images/tully.jpg";
  } else if (randomWord ==="GREYJOY") {
    document.getElementById('sigils').src="assets/images/greyjoy.jpg";
  } else if (randomWord ==="BARATHEON") {
    document.getElementById('sigils').src="assets/images/baratheon.png";
  } else if (randomWord ==="TYRELL") {
    document.getElementById('sigils').src="assets/images/tyrell.jpg";
  } else if (randomWord ==="MARTELL") {
    document.getElementById('sigils').src="assets/images/martell.jpg";
  }
  

  // Move the randomWord to randomArray and split the randomWord letters into an index. 
  randomArray = randomWord.split("");
  console.log(randomArray);

  // Iterate through the randomArray add blanks to blanksArray for each index. 
  blanksArray = [];
  for (var i = 0; i < randomArray.length; i++) { 
    blanksArray[i] = " _ ";
  }

  document.getElementById("answer-blanks").innerHTML = "<p>" + blanksArray + "</p>";
  document.getElementById("answer-blanks").innerHTML = blanksArray.join("");

  // Reset guesses variable to 6
  guessesRemaining = 6;
  updateRemainingGuesses();

  // Reset lettersGuessed to empty
  lettersGuessed = [];
  document.getElementById("guessed-letters").innerHTML = "<p> [ " + lettersGuessed + " ]</p>";
};

// *****START OF GAME*****
roundSetup();
gameScoreReset();
// Main game loop controled by onkeyup
document.onkeyup = function(event) {
  // Capture keystroke from user & converts letter to uppercase.
  userGuess = String.fromCharCode(event.which).toUpperCase();
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    keySound.play();
  } else {
    errorSound.play();
  }
  console.log(userGuess);

  // Reset sigils fade
  fadeSigils();
  // Compare the letter to lettersGuessed array  & update gueses
  if (userGuess.length !== 1) {
    return;
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    if ((lettersGuessed.indexOf(userGuess) === -1) && (randomArray.indexOf(userGuess) === -1)) {
      lettersGuessed.push(" " + userGuess + " ");
      console.log(lettersGuessed);
      document.getElementById("guessed-letters").innerHTML = "<p> [ " + lettersGuessed + " ]</p>";
      guessesRemaining -= 1;
      updateRemainingGuesses();
    } else {
      updateRemainingGuesses();
      guessesRemaining = guessesRemaining;
      console.log(guessesRemaining);
    }
  } 

   // Loop through the randomWord array, if the letter is in the randomWord array and replace blanks
  for (var i = 0; i < randomArray.length; i++) { 
    if (userGuess === randomArray[i]) {
      blanksArray[i] = userGuess;
      guessesRemaining = guessesRemaining;
    }
    console.log(userGuess);
  }
  console.log(blanksArray);
  document.getElementById("answer-blanks").innerHTML = blanksArray.join("");

  //Determines the wins and losses of the rounds and produces alert
  if (blanksArray.indexOf(" _ ") === -1) {
    console.log(userGuess);
    wins += 1;
    alert("You win this round! George R. R. Martin has completed another 1,000 pages in the Song of Fire and Ice series”");
    console.log(wins);
    roundSetup();
  } else if (guessesRemaining === 0) {
    updateRemainingGuesses();
    losses += 1;
    alert("You lose this round! George R. R. Martin has delayed the next book in the Song of Fire and Ice series for another year.");
    console.log(losses);
    roundSetup();
  }
  document.querySelector("#wins").innerHTML = "<p>" + wins + "</p>";
  document.querySelector("#losses").innerHTML = "<p>" + losses + "</p>";
  
  // Game counter
  if (losses === 5) {
    alert("You lose! George R. R. Martin has determined that the T.V. series is “good enough” and starts writing romance novels.");
    console.log(wins);
    console.log(losses);
    roundSetup();
    gameScoreReset();
  } else if (wins === 5) {
    winSound.play();
    alert("You win! You have inspired George R. R. Martin to finish the written series before the T.V. finale.");
    roundSetup();
    gameScoreReset();
  }
};

