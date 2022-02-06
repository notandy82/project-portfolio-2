// Functions to select game type
function onePlayer() {
    document.getElementById("splash").style.display="none";
    document.getElementById("oneplayer").style.display="block";
    console.log("launch 1 player game");
}

function twoPlayer() {
    document.getElementById("splash").style.display="none";
    document.getElementById("twoplayer").style.display="block";
    console.log("launch 2 player game");
}

// One player game functions
let playerChoice = "";
let compChoice = "";
var playerScore = 0;
var compScore = 0;


function playerRockThrow() {
    playerChoice = "Rock";
    console.log(playerChoice);
    compThrow();
    bringIt();
    disableOne();
}

function playerScissorsThrow() {
    playerChoice = "Scissors";
    console.log(playerChoice);
    compThrow();
    bringIt();
}

function playerDynamiteThrow() {
    playerChoice = "Dynamite";
    console.log(playerChoice);
    compThrow();
    bringIt();
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 65) {
        playerRockThrow();
    } else if (e.keyCode == 83) {
        playerScissorsThrow();
    } else if (e.keyCode == 68) {
        playerRockThrow();
    } else {
        // do nothing
    }
});

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
}

// Function for computer choice

function compThrow() {
        let compRandom = Math.floor(Math.random() * 3) + 1;
        if (compRandom == 1) {
        compChoice = "Rock";
    } else if (compRandom == 2) {
        compChoice = "Scissors";
    } else {
        compChoice = "Dynamite";
    }
    console.log(compChoice);
}

// If else statements for determining winner

function bringIt() {
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
    score();
}

function compWins() {
    console.log("The computer wins!");
    document.getElementById("player-win").style.display="none";
    document.getElementById("comp-win").style.display="block";
    document.getElementById("player-tie").style.display="none";
    document.getElementById("next").style.display="block";
    computerScore();
}

function tie() {
    console.log("It's a tie!");
    document.getElementById("player-win").style.display="none";
    document.getElementById("comp-win").style.display="none";
    document.getElementById("player-tie").style.display="block";
    document.getElementById("next").style.display="block";
}

//functions to add points to scoreboard

function score() {
    ++playerScore;
    document.getElementById("player-score").innerHTML = playerScore;
}

function computerScore() {
    ++compScore;
    document.getElementById("computer-score").innerHTML = compScore;
}
