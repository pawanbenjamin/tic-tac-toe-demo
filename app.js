const board = document.querySelector(".board");

const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}

board.addEventListener("click", (e) => {
  const row = e.target.id[0];
  const col = e.target.id[2];

  gameState.board[row][col] = gameState.currentPlayer;

  console.log("Game State: ", gameState);

  renderBoard();
  switchPlayers();
});

function renderBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
    }
  }
}

function switchPlayers() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
}
