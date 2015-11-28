#Boggle! by Graig Janssen

For my first General Assembly project, I created my own version of the classic Parker Brothers word search game.

##Functionality

The game loads in the browser and when the start button is clicked, the player has three minutes to "collect" as many words as possible.  The game board is populated by randomly selecting 16 "sides" of Boggle dice and the shuffling those.  Each Boggle "die" matches the real life equivalent.  The player clicks adjacent letters to create a word in the input box below the board.  When ready, the player hits the enter key to submit the word.  It is then scored and added to a list on the right.  If the player tries to select non-adjacent tiles, an alert appears and the word is erased.  Once time expires, a gold, silver or bronze medal will appear if the player scores 25, 20, or 15 points respectively.  

##Techniques Used

*Countdown Timer: Accomplished with setInterval function that subtracts from a variable, timeRemaining.  To display the time, that variable is converted to two other variables: minutes and seconds.  Had to add extra code to display second values between 0 and 9 properly.  Several things happen when 0 is reached, including clearInterval to stop the countdown, and using JQuery .off to turn off event listeners on the game board.*

*Creating a random board:  I draw from an array that contains 16 arrays, each of which has 6 letters taken from the actual Boggle game.  The setBoard function first uses Math.random to pick one of the 6 letters from each array.  Then, I used a shuffle function that I found on Stack Overflow to randomly re-order the new array of 16 letters.  I then use and for loop and JQuery to assign each letter to a corresponding "td" tag on an HTML table.*

*Making a word: Once the board is set up, JQuery is used to add event listeners to each "td" tag, which all have a class, "cell".  JQuery is used to modify the clicked tile's css so the background turns yellow.  JQuery is also used to add each clicked letter to a "div" tag located below the board.*

*Checking Adjacency: Each <td> also has a unique id akin to an Excel spreadsheet (a1,a2,a3,a4,b1,b2...).  Using a somewhat lengthy if/else statement, the checkAdjacency function returns "false" if two tiles are clicked that are not touching.  Using charAt helped to make the function more concise.  An alert appears if tiles are not adjacent so the user knows what's going on.*

*Submitting Words: An event listener becomes active when play begins that listens for the enter key being pressed.  When that occurs, whatever word is in the "input box" is appended to a word list.  An if/else statement is used to score the word based on its length.  It also will not add a word less than 3 letters long.*

*Winning the Game:  Since single player Boggle is more about high scores than winning or losing, I added a "medal" feature that gives Gold, Silver or Bronze if certain scores are achieved.  JQuery is used to append a div with a certain id depending on the final score.  Each div's id links to a background image of a medal in the css.*  

##Unsolved Problems

The most obvious thing that I wasn't able to incorporate was a "spellchecker" that would reject words that are not in the English dictionary.  I found a javascript library of sorts that I downloaded and included in my root folder.  I tried to use one of the functions included in it that would simply check if a given word was in the dictionary, but I kept getting errors in my console that I could not decipher.  I think accomplishing this task will be something I will be better prepared for in the coming weeks.  

I also don't really understand how the "shuffle" function I grabbed really works.  I just tested it and got the desired result, so went ahead with using it.  
