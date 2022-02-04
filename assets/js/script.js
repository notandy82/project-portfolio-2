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



function playerRockThrow() {
    playerChoice = "Rock";
    console.log(playerChoice);
    compThrow();
    bringIt();
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
    console.log("You win!")
}

function compWins() {
    console.log("The computer wins!");
}

function tie() {
    console.log("It's a tie!");
}