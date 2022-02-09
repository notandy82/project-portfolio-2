// Function to select game type
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
let playerScore = 0;
let compScore = 0;


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
// Functions to replace images with player choice

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
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("round-result").style.visibility="hidden";
    var on = document.getElementsByClassName("player-one-choice");
    for (var i = 0; i < on.length; i++) {
        on[i].disabled = true;
      }
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

function enableOne() {
    var on = document.getElementsByClassName("player-one-choice");
    for (var i = 0; i < on.length; i++) {
        on[i].disabled = false;
      }
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("round-result").style.visibility="hidden";
    document.getElementById("player-win").style.visibility="hidden";
    document.getElementById("comp-win").style.visibility="hidden";
    document.getElementById("player-tie").style.visibility="hidden";
}



// Functions for determining winner

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
    ++playerScore;
    document.getElementById("player-win").style.visibility="visible";
    document.getElementById("comp-win").style.visibility="hidden";
    document.getElementById("player-tie").style.visibility="hidden";
    document.getElementById("next").style.visibility="visible";
    document.getElementById("round-result").style.visibility="visible";
    updateScore();
    winState();
}

function compWins() {
    ++compScore;
    document.getElementById("player-win").style.visibility="hidden";
    document.getElementById("comp-win").style.visibility="visible";
    document.getElementById("player-tie").style.visibility="hidden";
    document.getElementById("next").style.visibility="visible";
    document.getElementById("round-result").style.visibility="visible";
    updateScore();
    winState();
}

function tie() {
    document.getElementById("player-win").visibility="hidden";
    document.getElementById("comp-win").visibility="hidden";
    document.getElementById("player-tie").style.visibility="visible";
    document.getElementById("next").style.visibility="visible";
    document.getElementById("round-result").style.visibility="visible";
}

//function to add points to scoreboard

function updateScore() {
    document.getElementById("computer-score").textContent = compScore;
    document.getElementById("player-score").textContent = playerScore;
}

//Win conditions

function winState() {
    if (playerScore === 5 || compScore === 5) {
        console.log("Game over");
        playerGameOver();
    } else {
        console.log("Keep playing");
    }
}

function playerGameOver() {
    document.getElementById("game-over-modal").style.display="block";
    if (playerScore === 5) {
      document.getElementById("p1-win").style.display="block";
      document.getElementById("p1-lose").style.display="none";
      document.getElementById("next").style.visibility="hidden";
    } else if (compScore === 5) {
      document.getElementById("p1-win").style.display="none";
      document.getElementById("p1-lose").style.display="block";
      document.getElementById("next").style.visibility="hidden";
    } else {
        // do nothing
    }
}

// Game over functions

function resetScore() {
    playerScore = 0;
    compScore = 0;
    updateScore();
}

function newGame() {
    document.getElementById("splash").style.display="block";
    document.getElementById("oneplayer").style.display="none";
    document.getElementById("game-over-modal").style.display="none";
    resetScore();
}

function quitGame() {
    document.getElementById("splash").style.display="block";
    document.getElementById("oneplayer").style.display="none";
    resetScore();
}