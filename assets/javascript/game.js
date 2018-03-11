
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

var guesses = 6;
var lettersGuessed = [];
var randomWord = "";
var randomArray = [];
var blanks = [];
var wins = 0;
var losses = 0;

/* 
1. Move a random string from wordBank to randomWord.   
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

2. Move the randomWord to randomArray and split the randomWord letters into an index. 
randomArray = randomWord.split("");

3. Loop through the randomArray add blank to blanks array for each index. 
for (var i = 0; i < randomArray.length); i++) { 

}

4. Reset guesses variable to 6
var guesses = 6;

5. Reset lettersGuessed to empty
lettersGuess = [];

*/

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}



/*
1. Ask user to guess a letter. 

2. Capture keystroke from user. 
document.onkeyup = function(event) {
  var userGuess = event.key;
}

3. Verify keystroke is a letter

4. Convert letter to uppercase. 

5. Compare the letter to lettersGuessed array, if the letter is in the lettersGuessed array --> notify user that they already guessed this letter. 

6. If the letter is not in the lettersGuessed array --> add letter to lettersGuessed array, subtract 1 from the countdown, and compare letter to the randomWord array index. 

7. Loop through the randomWord array, if the letter is in the randomWord array, at each index where letter is found, replace the corresponding blank in the blank array.

8. If letter is not in the randomWord array, add letter to lettersGuessed array. 


*/


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
