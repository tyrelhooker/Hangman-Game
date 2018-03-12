
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

var guessesRemaining = 5;
var lettersGuessed = [];
var randomWord = "";
var randomArray = [];
var blanksArray = [];
var wins = 0;
var losses = 0;
var userGuess;

// Function that udates the score
function updateRemainingGuesses() {
  document.querySelector ("#game-counter").innerHTML = "<p>" + guessesRemaining + "</p";
}

document.getElementById("startButton").addEventListener("click", setupFunction);

function setupFunction() {
  document.getElementById("instructions").innerHTML = "<p>You have entered the Game of Thrones</p>" + "<p>You must defeat five major houses. Defeating five major houses will encourage George R.R. Martin to finish the book series before the T.V. series. The game is won, if, and only if, George R.R. Martin finishes the book series before the T.V. series.</p>";

  // Move a random word from wordBank to randomWord.   
  var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(randomWord);

  // Move the randomWord to randomArray and split the randomWord letters into an index. 
  randomArray = randomWord.split("");
  console.log(randomArray);

  // Iterate through the randomArray add blanks to blanksArray for each index. 
  blanksArray = [];

  for (var i = 0; i < randomArray.length; i++) { 
    blanksArray[i] = " _ ";
    document.getElementById("answer-blanks").innerHTML = "<p>" + blanksArray + "</p>";
  }

  // Reset guesses variable to 10
  guessesRemaining = 5;
  updateRemainingGuesses();

 
  // Reset lettersGuessed to empty
  lettersGuessed = [];
  document.getElementById("guessed-letters").innerHTML = "<p> [ " + lettersGuessed + " ]</p>";
};



// Ask user to guess a letter. 
// document.getElementById("prompt").innerHTML = "<p>Please press a letter</p>";

document.onkeyup = function(event) {

  // Capture keystroke from user & converts letter to uppercase.
  userGuess = String.fromCharCode(event.which).toUpperCase();
  console.log(userGuess);

  /* Compare the letter to lettersGuessed array, if the letter is in the lettersGuessed array --> notify user that they already guessed this letter. If the letter is not in the lettersGuessed array --> add letter to lettersGuessed array, subtract 1 from guessesRemaining, and compare letter to the randomWord array index. */

  // for (var j = 0; j < lettersGuessed.length; j++) {
  //   if (lettersGuessed[j] === userGuess) {
  //     console.log("You have already guessed this letter.");
  //     guessesRemaining = guessesRemaining - 1;
  //     updateRemainingGuesses();
  //   } else {
  //     lettersGuessed.push(userGuess);
  //     guessesRemaining - 1;
  //     updateRemainingGuesses();
  //     console.log(lettersGuessed);
  //   }
  // }
  /*
  Loop through the randomWord array, if the letter is in the randomWord array, at each index where letter is found, replace the corresponding blank in the blank array. If letter is not in the randomWord array, add letter to lettersGuessed array. 
  */
  for (var i = 0; i < randomArray; i++) {
    if (randomArray[i] === userGuess) {
      // randomWord[i] replaces corresponding index value of blanksArray?
      blanksArray[i] === randomArray[i];
    } else {
      lettersGuessed.push(userGuess);

    }
  }
};


// 3. Verify keystroke is a letter



 




  


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
// function print(message) {
//   var outputDiv = document.getElementById("output");
//   outputDiv.innerHTML = message;
// }