// // Use key events to listen for the letters that your players will type.

// Display the following on the page:

//Message that states: Press any key to get started!
//Listener for a key being pressed
//Word Bank
var wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];
// wordList length = 77 (76 indeces)
//Function to select random word from word bank
var randomChoice = Math.floor(Math.random()*wordList.length);
var answer = wordList[randomChoice];
var wordLength = answer.length;
var dashes = [wordLength];
var win = wordLength;
var letters = answer.split('');
var remainingGuesses = 12;
var output = "";
var userGuess = "";
var guessedLetters = [];
var score = 0;

console.log(answer);
console.log(wordLength);
console.log(dashes);
console.log(letters);

function gameStart() {
    for (var i = 0; i < answer.length; i++) {
        dashes[i] = "_ ";
        output = output + dashes[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
}

gameStart();

document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    
    if (userGuess === "a" && remainingGuesses > 0 || userGuess === "b" && remainingGuesses > 0 || userGuess === "c" && remainingGuesses > 0 || userGuess === "d" && remainingGuesses > 0 || userGuess === "e" && remainingGuesses > 0 || userGuess === "f" && remainingGuesses > 0 || userGuess === "g" && remainingGuesses > 0 || userGuess === "h" && remainingGuesses > 0 || userGuess === "i" && remainingGuesses > 0 || userGuess === "j" && remainingGuesses > 0 || userGuess === "k" && remainingGuesses > 0 || userGuess === "l" && remainingGuesses > 0 || userGuess === "m" && remainingGuesses > 0 || userGuess === "n" && remainingGuesses > 0 || userGuess === "o" && remainingGuesses > 0 || userGuess === "p" && remainingGuesses > 0 || userGuess === "q" && remainingGuesses > 0 || userGuess === "r" && remainingGuesses > 0 || userGuess === "s" && remainingGuesses > 0 || userGuess === "t" && remainingGuesses > 0 || userGuess === "u" && remainingGuesses > 0 || userGuess === "v" && remainingGuesses > 0 || userGuess === "w" && remainingGuesses > 0 || userGuess === "x" && remainingGuesses > 0 || userGuess === "y" && remainingGuesses > 0 || userGuess === "z" && remainingGuesses > 0 ) {
        for (var j = 0; j<answer.length; j++) {
            if (userGuess === answer[j]) {
                dashes[j] = userGuess;
                win--;
            } 
            output = output + dashes[j] + "";
        }
        remainingGuesses--;
        guessedLetters.push(userGuess);
        console.log(guessedLetters);
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("lettersGuessed").innerHTML = guessedLetters;
        document.getElementById("game").innerHTML = output;
        output ="";
    // } else {
    //     document.getElementById("message").innerHTML = "Please choose a letter!";
    //     alert("You lose. Try again.");
    //     gameStart();


    // }
    if (win < 1) {
        document.getElementById("message").innerHTML = "You Win!";
        document.getElementById("score").innerHTML = score++;
        document.getElementById("remainingGuesses").innerHTML = 12;
        // document.getElementById
        // gameStart();
    } else if (remainingGuesses === 0) {
        document.getElementById("message").innerHTML = "You Lose :(";
        document.getElementById("")
        

    }

    
};
};

if(remainingGuesses === 0) {
    alert("You ran out of guesses!");
    gameStart();
}



 



//Random word is displayed as dashes based on its length (array)
//Counter when the person wins that adds one to their score
//Function that shows letters guessed
//Funtion that listens for letters and displays correct ones
//Function that listens for letters and countsdown based on guesses
//Counter that removes one from letters remaining
//Display guessed letters
//After word is guessed, add one to wins
//After guesses are gone, show the word
//After the game is done, select new word without refresh.

// Wins: (# of times user guessed the word correctly).

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// As the user guesses the correct letters, reveal them: m a d o _ _ a.

// Number of Guesses Remaining: (# of guesses remaining for the user).

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// After the user wins/loses the game should automatically choose another word and make the user play it.