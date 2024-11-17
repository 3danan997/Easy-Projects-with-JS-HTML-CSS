const playerHand = document.querySelectorAll(".rps-btns");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const playerScore = document.getElementById("pScore").lastElementChild;
const computerScore = document.getElementById("cScore").lastElementChild;
const wins = { rock: "scissor", paper: "rock", scissor: "paper" };

function game(input) {
  playerChoice.textContent = input;
  let choices = Object.keys(wins);
  let rand = Math.floor(Math.random() * 3);
  computerChoice.textContent = choices[rand];

  if (input === computerChoice.textContent) {
    result.textContent = "IT'S A TIE";
  } else if (computerChoice.textContent === wins[input]) {
    result.textContent = "PLAYER WON!";
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else {
    result.textContent = "COMPUTER WON!";
    computerScore.textContent = Number(computerScore.textContent) + 1;
  }

  if (Number(playerScore.textContent) == Number(computerScore.textContent)) {
    playerScore.className = "";
    computerScore.className = "";
  } else if (
    Number(playerScore.textContent) > Number(computerScore.textContent)
  ) {
    playerScore.className = "greenText";
    computerScore.className = "redText";
  } else {
    playerScore.className = "redText";
    computerScore.className = "greenText";
  }
}
