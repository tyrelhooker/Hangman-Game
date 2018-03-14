
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

// Function that updates the score
function updateRemainingGuesses() {
  document.querySelector ("#game-counter").innerHTML = "<p>" + guessesRemaining + "</p>";
}

function gameScoreReset() {
  wins = 0;
  losses = 0;
  document.querySelector ("#wins").innerHTML = "<p>" + wins + "</p";
  document.querySelector ("#losses").innerHTML = "<p>" + losses+ "</p";
}

function fadeSigil() {
  if (guessesRemaining === 5) {
    document.getElementById("sigil");
    element.classList.add("fade1");
  } else if (guessesRemaining === 4) {
    document.getElementById("sigil").removeAttribute("fade1");
    document.getElementById("sigil");
    element.classList.add("fade2");
  } else if (guessesRemaining === 4) {
    document.getElementById("sigil").removeAttribute("fade2");
    document.getElementById("sigil");
    element.classList.add("fade3");
  } else if (guessesRemaining === 4) {
    document.getElementById("sigil");
    element.classList.add("fade4");
  } else if (guessesRemaining === 4) {
    document.getElementById("sigil");
    element.classList.add("fade5");
  }
};

function roundSetup() {
  document.getElementById("instructions").innerHTML = "<p>You have entered the Game of Thrones</p>" + "<p>You must defeat five major houses. Defeating five major houses will encourage George R.R. Martin to finish the book series before the T.V. series. The game is won, if, and only if, George R.R. Martin finishes the book series before the T.V. series.</p>";

  // Move a random word from wordBank to randomWord.   
  var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(randomWord);

  // Places sigil corresponding with randomWord to the right of contents
  if (randomWord === "STARK") {
    // img = "img src='assets/images/stark.png'>";
    document.getElementById("sigils").src="assets/images/stark.png";
  } else if (randomWord ==="LANNISTER") {
    // img = "<img src ='../assets/images/lannister.jpg'>";
    document.getElementById('sigils').src="assets/images/lannister.jpg";
  } else if (randomWord ==="TARGARYEN") {
    img = "<img src ='../assets/images/targaryen.png'>";
    document.getElementById('sigils').src="assets/images/targaryen.png";
  } else if (randomWord ==="ARRYN") {
    // img = "<img src ='assets/images/arryn.png'>";
    document.getElementById("sigils").src = "assets/images/arryn.png";
  } else if (randomWord ==="TULLY") {
    // img = "<img src ='../assets/images/tully.jpg'>";
    document.getElementById('sigils').src= "assets/images/tully.jpg";
  } else if (randomWord ==="GREYJOY") {
    // img = "<img src ='../assets/images/greyjoy.jpg'>";
    document.getElementById('sigils').src="assets/images/greyjoy.jpg";
  } else if (randomWord ==="BARATHEON") {
    // img = "<img src ='../assets/images/baratheon.png'>"; 
    document.getElementById('sigils').src="assets/images/baratheon.png";
  } else if (randomWord ==="TYRELL") {
    // img = "<img src ='../assets/images/tyrell.jpg'>";
    document.getElementById('sigils').src="assets/images/tyrell.jpg";
  } else if (randomWord ==="MARTELL") {
    // img = "<img src ='../assets/images/martell.jpg'>";
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



roundSetup();
gameScoreReset();
document.onkeyup = function(event) {
  // Capture keystroke from user & converts letter to uppercase.
  userGuess = String.fromCharCode(event.which).toUpperCase();
  console.log(userGuess);

  /* Compare the letter to lettersGuessed array, if the letter is in the lettersGuessed array --> notify user that they already guessed this letter. If the letter is not in the lettersGuessed array --> add letter to lettersGuessed array, subtract 1 from guessesRemaining, and compare letter to the randomWord array index. */

  if ((lettersGuessed.indexOf(userGuess) === -1) && (randomArray.indexOf(userGuess) === -1)) {
    lettersGuessed.push(" " + userGuess + " ");
    console.log(lettersGuessed);
    document.getElementById("guessed-letters").innerHTML = lettersGuessed;
    guessesRemaining -= 1;
    updateRemainingGuesses();
  } else {
    console.log("You have already guessed this letter.");
    updateRemainingGuesses();
    guessesRemaining = guessesRemaining;
    console.log(guessesRemaining);
  }

   // Loop through the randomWord array, if the letter is in the randomWord array, at each index where letter is found, replace the corresponding blank in the blank array. If letter is not in the randomWord array, add letter to lettersGuessed array. 

  // if (randomArray.indexOf(userGuess) === -1) {
  //   guessesRemaining -= 1;
  //   updateRemainingGuesses();
  //   console.log(guessesRemaining);
  // } else {
  for (var i = 0; i < randomArray.length; i++) { 
    if (userGuess === randomArray[i]) {
      blanksArray[i] = userGuess;
      guessesRemaining = guessesRemaining;
    }
  }
  console.log(blanksArray);
  document.getElementById("answer-blanks").innerHTML = blanksArray.join("");

  if (blanksArray.indexOf(" _ ") === -1) {
    console.log("You Win this round!");
    wins += 1;
    console.log();
    roundSetup();
  } else if (guessesRemaining === 0) {
    console.log("You lose this round!");
    losses += 1;
    console.log();
    roundSetup();
  }
  document.querySelector("#wins").innerHTML = "<p>" + wins + "</p>";
  document.querySelector("#losses").innerHTML = "<p>" + losses + "</p>";
  
  if (losses === 5) {
    alert("You lose!");
    roundSetup();
    gameScoreReset();
  } else if (wins === 5) {
    alert("You win!");
    roundSetup();
    gameScoreReset();
  }
};


 





 




  

/* 
1. Check to see if the user has correctly guessed all letters in randomWord array. 

2. If user correctly guessed all letters --> display message and add +1 to wins counter. Remove the word from the wordBank array and store in usedWords array. Run function from #1.
wins += 1;

var i = wordBank.indexOf("randomWord");
if(i != -1) {
	array.splice(i, 1);
}

3. If guesses countdown reaches 0 --> display message and add +1 to the losses counter. Run function from #1. 

4. If user wins 5 games --> end game and display message. Run function from #1. 

5. If user loses 5 games --> end game and display message. Run function from #1. 
*/
