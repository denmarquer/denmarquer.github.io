// Enter game(); in the console to begin to play.

function playerSelection(text) {
  let choice = text.toLowerCase();
  return choice;
}

function game() {
  let pcScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let pcChoice = pcPlay();
    let playerPrompt = prompt("your choice?");
    let playerChoice = playerSelection(playerPrompt);
    let round = rpsRound(pcChoice, playerChoice);
    if (round === "pc") {
      pcScore++;
      alert(
        "You lose! " +
          "Pc chose: " +
          pcChoice +
          ", Your score: " +
          playerScore +
          ", Pc score: " +
          pcScore
      );
    } else if (round === "player") {
      playerScore++;
      alert(
        "You win! " +
          "Pc chose: " +
          pcChoice +
          ", Your score: " +
          playerScore +
          ", Pc score: " +
          pcScore
      );
    } else if (round === "draw") {
      alert(
        "Draw! +1 Round. " +
          "Pc chose: " +
          pcChoice +
          ", Your score: " +
          playerScore +
          ", Pc score: " +
          pcScore
      );
      i--;
    } else {
      alert("Error! Choose either: rock, scissors or paper.");
      i--;
    }
  }

  if (pcScore > playerScore) {
    return alert("You lose the five rounds :(");
  } else if (pcScore < playerScore) {
    return alert("You won the five round :)");
  }
}

function rpsRound(pc, player) {
  if (player !== "rock" && player !== "paper" && player !== "scissors") {
    return "error";
  }
  if (pc === player) {
    return "draw";
  } else if (
    (pc === "rock" && player === "scissors") ||
    (pc === "scissors" && player === "paper") ||
    (pc === "paper" && player === "rock")
  ) {
    return "pc";
  } else {
    return "player";
  }
}

function pcPlay() {
  random = Math.floor(Math.random() * 100);
  if (random > 0 && random < 33) {
    return "rock";
  } else if (random >= 33 && random <= 66) {
    return "scissors";
  } else {
    return "paper";
  }
}
