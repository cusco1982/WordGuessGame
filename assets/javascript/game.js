var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var guessesRemaining = 9;
var userGuesses = [];

function game() {
    document.onkeyup = function(event) {
        var userGuess=event.key;
        if (alphabet.includes(userGuess)==true) {
            
            userGuesses.push(userGuess);
            var computerGuess=alphabet[Math.floor(Math.random() * alphabet.length)];

            if ((userGuess===computerGuess)) {
                wins++;
                alert("You won!")
                restart();
            } 
            else {
                guessesRemaining--;
            }
        if ((guessesRemaining === 0)) {
                loss++;
                alert("You lost!")
                restart();
            }
            
            gamesWon.textContent = "Wins: " + wins;
            gamesLost.textContent = "Losses: " + loss;
            guessList.textContent = "Your Guesses So Far: " + userGuesses.join(", ");
            guessesLeft.textContent = "Guesses Left: " + guessesRemaining;
        }
        else {
            alert("Please pick a letter");
        };
    };
};

function restart() {
    guessesRemaining = 9;
    userGuesses = [];
    game();
};

game();
