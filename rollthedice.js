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
  document.querySelector(".img1").setAttribute("src", `images/dice${rollDice()}.png`)
  document.querySelector(".img2").setAttribute("src", `images/dice${rollDice()}.png`);
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
