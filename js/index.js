let gameContent = document.getElementById("game-content");
let displayComputerChoice = document.getElementById("computer-choice-img");
let displayPlayerChoice = document.getElementById("player-choice-img");
let displayResult = document.getElementById("result");
let playerChoice = "";
let computerChoice = "";
let gameContent1 = document.getElementById("game-content-1");
let gameContent2 = document.getElementById("game-content-2");
let gameContent3 = document.getElementById("game-content-3");
gameContent3.style.display = "none";
gameContent2.style.display = "none";

function startGame() {
  gameContent1.style.display = "none";
  gameContent2.style.display = "block";
}
function startAnimation() {}
displayComputerChoice.src = "images/rock.png";
displayPlayerChoice.src = "images/rock.png";
function possibleChose(choice) {
  gameContent2.style.display = "none";
  gameContent3.style.display = "block";
  startAnimation();
  playerChoice = choice;
  console.log(choice);
  if (playerChoice === "rock") {
    displayPlayerChoice.src = "images/rock.png";
  } else if (playerChoice === "papers") {
    displayPlayerChoice.src = "images/paper.png";
  } else if (playerChoice === "scissors") {
    displayPlayerChoice.src = "images/scissors.png";
  }
  generateComputerChoice();
}
function generateComputerChoice() {
  let computerPossibleChoice = ["rock", "papers", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  computerChoice = computerPossibleChoice[randomIndex];
  if (computerChoice === "rock") {
    displayComputerChoice.src = "images/rock.png";
  } else if (computerChoice === "papers") {
    displayComputerChoice.src = "images/paper.png";
  } else if (computerChoice === "scissors") {
    displayComputerChoice.src = "images/scissors.png";
  }
  getResult();
}
function getResult() {
  if (computerChoice === playerChoice) {
    result = "there is no winner !";
  } else if (computerChoice === "rock" && playerChoice === "papers") {
    result = "yohoo ! you won !";
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "ohh ! you lost";
  } else if (computerChoice === "papers" && playerChoice === "rock") {
    result = "ohh ! you lost";
  } else if (computerChoice === "papers" && playerChoice === "scissors") {
    result = "yohoo ! you won !";
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "yohoo ! you won !";
  } else if (computerChoice === "scissors" && playerChoice === "papers") {
    result = "ohh ! you lost";
  }
  displayResult.textContent = result;
}
function tryAgain() {
  startGame();
  gameContent3.style.display = "none";
}
