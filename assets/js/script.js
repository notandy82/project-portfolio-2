// Functions to select game type
function onePlayer() {
    document.getElementById("splash").style.display="none";
    document.getElementById("oneplayer").style.display="block";
    console.log("launch 1 player game");
    enableOne();
}

// Game help modal

function helpModal() {
    document.getElementById("help-modal").style.display="block";
}

function noHelp() {
    document.getElementById("help-modal").style.display="none";
}

// One player game functions
let playerChoice = "";
let compChoice = "";
var playerScore = 0;
var compScore = 0;


function playerRockThrow() {
    playerChoice = "Rock";
    compThrow();
    playerRockImage();
    bringIt();
    disableOne();
}

function playerScissorsThrow() {
    playerChoice = "Scissors";
    playerScissorsImage();
    compThrow();
    bringIt();
    disableOne();
}

function playerDynamiteThrow() {
    playerChoice = "Dynamite";
    playerDynamiteImage();
    compThrow();
    bringIt();
    disableOne();
}

function playerRockImage() {
    document.getElementById("player-image").src="assets/images/rock_reduced.png";
}

function playerScissorsImage() {
    document.getElementById("player-image").src="assets/images/scissors_reduced.png";
}

function playerDynamiteImage() {
    document.getElementById("player-image").src="assets/images/dynamite_reduced.png";
}

function disableOne() {
    var off = document.getElementsByClassName("player-one-choice");
    for (var i = 0; i < off.length; i++) {
        off[i].disabled = true;
      }
}

function enableOne() {
    var on = document.getElementsByClassName("player-one-choice");
    for (var i = 0; i < on.length; i++) {
        on[i].disabled = false;
      }
    document.getElementById("next").style.display = "none";
    document.getElementById("round-result").style.display = "none";
}

// Function for computer choice

function compThrow() {
        let compRandom = Math.floor(Math.random() * 3) + 1;
        if (compRandom == 1) {
        compChoice = "Rock";
        computerRockImage();
    } else if (compRandom == 2) {
        compChoice = "Scissors";
        computerScissorsImage();
    } else {
        compChoice = "Dynamite";
        computerDynamiteImage();
    }
    console.log(compChoice);
}

function computerRockImage() {
    document.getElementById("computer-image").src="assets/images/rock_reduced.png";
}

function computerScissorsImage() {
    document.getElementById("computer-image").src="assets/images/scissors_reduced.png";
}

function computerDynamiteImage() {
    document.getElementById("computer-image").src="assets/images/dynamite_reduced.png";
}

// If else statements for determining winner
function bringIt() {
    setTimeout(doIt, 1500);
}

function doIt() {
    if (playerChoice === "Rock" && compChoice === "Rock") {
        tie();
    } else if (playerChoice === "Rock" && compChoice === "Scissors") {
        playerWins();
    } else if (playerChoice === "Rock" && compChoice === "Dynamite") {
        compWins();
    } else if (playerChoice === "Scissors" && compChoice === "Rock") {
        compWins();
    } else if (playerChoice === "Scissors" && compChoice === "Scissors") {
        tie();
    } else if (playerChoice === "Scissors" && compChoice === "Dynamite") {
        playerWins();
    } else if (playerChoice === "Dynamite" && compChoice === "Rock") {
        playerWins();
    } else if (playerChoice === "Dynamite" && compChoice === "Scissors") {
        compWins();
    } else if (playerChoice === "Dynamite" && compChoice === "Dynamite") {
        tie();
    } else {
        // do nothing
    }
}

function playerWins() {
    console.log("You win!");
    document.getElementById("player-win").style.display="block";
    document.getElementById("comp-win").style.display="none";
    document.getElementById("player-tie").style.display="none";
    document.getElementById("next").style.display="block";
    document.getElementById("round-result").style.display="block";
    score();
}

function compWins() {
    console.log("The computer wins!");
    document.getElementById("player-win").style.display="none";
    document.getElementById("comp-win").style.display="block";
    document.getElementById("player-tie").style.display="none";
    document.getElementById("next").style.display="block";
    document.getElementById("round-result").style.display="block";
    computerScore();
}

function tie() {
    console.log("It's a tie!");
    document.getElementById("player-win").style.display="none";
    document.getElementById("comp-win").style.display="none";
    document.getElementById("player-tie").style.display="block";
    document.getElementById("next").style.display="block";
    document.getElementById("round-result").style.display="block";
}

//functions to add points to scoreboard

function score() {
    ++playerScore;
    document.getElementById("player-score").innerHTML = playerScore;
    winState();
}

function computerScore() {
    ++compScore;
    document.getElementById("computer-score").innerHTML = compScore;
    winState();
}

//Win conditions

function winState() {
    if (playerScore === 5 || compScore === 5) {
        playerGameOver();
        document.getElementById("next").style.display="none";
        console.log("game over");
    } else {
        console.log("keep playing");
    }
}

function playerGameOver() {
    document.getElementById("game-over-modal").style.display="block";
    if (playerScore === 5) {
      document.getElementById("p1-win").style.display="block";
      document.getElementById("p1-lose").style.display="none";
    } else {
      document.getElementById("p1-win").style.display="none";
      document.getElementById("p1-lose").style.display="block";
    }
}

function newGame() {
    document.getElementById("player-score").innerHTML=0;
    document.getElementById("computer-score").innerHTML=0;
    document.getElementById("splash").style.display="block";
    document.getElementById("oneplayer").style.display="none";
    document.getElementById("game-over-modal").style.display="none";
}