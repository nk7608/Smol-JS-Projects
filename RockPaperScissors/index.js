const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("player-score-display");
const computerScoreDisplay = document.getElementById("computer-score-display");
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 2)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "paper" ? "YOU LOOSE!" : "YOU WIN!";
        break;
      case "paper":
        result = computerChoice === "scissors" ? "YOU LOOSE!" : "YOU WIN!";
        break;
      case "scissors":
        result = computerChoice === "rock" ? "YOU LOOSE!" : "YOU WIN!";
        break;
    }
  }

  player.textContent = `Player: ${playerChoice}`;
  computer.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = `${result}`;
  resultDisplay.classList.remove("apply-red", "apply-green", "apply-blue");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("apply-green");
      playerScore++;
      playerScoreDisplay.textContent = `${playerScore}`;
      break;
    case "YOU LOOSE!":
      resultDisplay.classList.add("apply-red");
      computerScore++;
      computerScoreDisplay.textContent = `${computerScore}`;
      break;
    case "IT'S A TIE!":
      resultDisplay.classList.add("apply-blue");
      break;
  }
}
