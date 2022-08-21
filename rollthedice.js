// Player Names

var Player1 = prompt("Enter the name of Player One");
var Player2 = prompt("Enter the name of Player Two");

  document.querySelector(".one").textContent = Player1;
  document.querySelector(".two").textContent = Player2;
  if (Player1.length === 0) {
  document.querySelector(".one").textContent = "Player One";
  }
  if (Player2.length === 0) {
  document.querySelector(".two").textContent = "Player Two";
  }

// Dice Roll
function clickDiceRoll() {
  const playerOneRoll = rollDice()
  const playerTwoRoll = rollDice()
  document.querySelector(".img1").setAttribute("src", `images/dice/${playerOneRoll}.png`)
  document.querySelector(".img2").setAttribute("src", `images/dice/${playerTwoRoll}.png`);
  if (playerOneRoll > playerTwoRoll) {
    document.querySelector("#header").innerHTML = `${getPlayerOneName()} wins!`;
  }
  else if (playerTwoRoll > playerOneRoll) {
    document.querySelector("#header").innerHTML = `${getPlayerTwoName()} wins!`;
  }
  else {
    document.querySelector("#header").innerHTML = `It's a draw!`;
  }
}

function rollDice() {
  return Math.floor(Math.random() * 20) + 1;
}

function getPlayerOneName() {
  return document.querySelector(".one").textContent;
}

function getPlayerTwoName() {
  return document.querySelector(".two").textContent;
}
