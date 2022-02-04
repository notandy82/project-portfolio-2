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
var playerChoice;
var compChoice;

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

function playerRockThrow() {
    playerChoice = "Rock";
    console.log(playerChoice);
    compThrow();
    
}

function playerScissorsThrow() {
    playerChoice = "Scissors";
    console.log(playerChoice);
    compThrow();
    
}

function playerDynamiteThrow() {
    playerChoice = "Dynamite";
    console.log(playerChoice);
    compThrow();
    
}

if (playerChoice === "Rock") {
    if (compChoice === "Rock") {
        tie();
    } else if (compChoice ==="Scissors") {
        playerWins();
    } else {
        compWins();
    }
} else if (playerChoice === "Scissors") {
    if (compChoice === "Rock") {
        compWins();
    } else if (compChoice ==="Scissors") {
        tie();
    } else {
        playerWins();
    }
} else {
    if (compChoice === "Rock") {
        playerWins();
    } else if (compChoice ==="Scissors") {
        compWins();
    } else {
        tie();
    }
}

function playerWins() {
    console.log("You win!")
}

function compWins() {
    console.log("The computer wins!");
}

function tie() {
    console.log("It's a tie!");
}
