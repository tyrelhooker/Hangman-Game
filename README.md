# Hangman-Game

Pseudocode for Hangman-Game
Game of Thrones Theme

	1.	Ask user to press any key to continue. 
    ⁃	Capture random word from wordBank array
    ⁃	Display random word from wordBank in blanks matching str.length 
    ⁃	Display countdown for guesses = 6 guesses
    ⁃	Display a win column
    ⁃	Display a loss column
    - Display guessed letters column
	2.	Ask user to guess a letter
    ⁃	Capture keystroke from user guess
    ⁃	Convert letter to uppercase
	3.	Compare user guess letter to letters in random word string from wordBank
    ⁃	If letter is in random word string from wordBank, 
      ⁃	display the letter in the corresponding blank. If letter appears multiple times —> display the letter in each position it appears. 
    ⁃	If letter is not in random word string from wordBank,
      ⁃	display the incorrectly guessed letter
      ⁃	subtract 1 from the countdown
	4.	If user correctly guesses all random word letters
    ⁃	display “You won. George R. R. Martin has completed another 1,000 pages in the Song of Fire and Ice series”
    ⁃	add +1 to the win column
	5.	If countdown for guesses reaches zero
    ⁃	display you lost “You lost. George R. R. Martin has delayed the next book in the Song of Fire and Ice series for another year.”
    ⁃	add -1 to the loss column.
	6.	Ask user to press any key to continue
	7.	When wins = 5 - End game 
    ⁃	Display you have inspired George R. R. Martin to finish the written series before the T.V. finale
	8.	When losses = 5 - End game
    ⁃	Display George R. R. Martin has determined that the T.V. series is “good enough” and starts writing a romance series.