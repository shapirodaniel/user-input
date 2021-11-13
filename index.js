const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const player1Btn = player1Input.nextElementSibling;
const player2Btn = player2Input.nextElementSibling;

const state = {
  player1: "",
  player2: "",
};

console.log(player1Input, player2Input, player1Btn, player2Btn);

player1Btn.addEventListener("click", () => {
  state.player1 = player1Input.value;
});

player2Btn.addEventListener("click", () => {
  state.player2 = player2Input.value;
});

document.getElementById("startGameBtn").addEventListener("click", () => {
  if (!state.player1) {
    state.player1 = "Computer";
  }
  if (!state.player2) {
    state.player2 = "Computer";
  }

  document.getElementById("board").style.display = "inherit";
  document.getElementById("inputContainer").style.display = "none";

  const player1 = document.createElement("div");
  const player2 = document.createElement("div");

  player1.innerText = `Welcome ${state.player1}`;
  player2.innerText = `Welcome ${state.player2}`;

  document.body.appendChild(player1);
  document.body.appendChild(player2);

  const resetGameBtn = document.createElement("button");
  resetGameBtn.innerText = "Reset Game!";
  document.body.appendChild(resetGameBtn);

  resetGameBtn.addEventListener("click", () => {
    state.player1 = "";
    state.player2 = "";

    document.getElementById("board").style.display = "none";
    document.getElementById("inputContainer").style.display = "inherit";

    document.body.removeChild(resetGameBtn);
    document.body.removeChild(player1);
    document.body.removeChild(player2);

    console.log(state);
  });
});
