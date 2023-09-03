const status = document.querySelector(".game--status");
status.textContent = "It's X's turn";

const cells = document.querySelectorAll(".cell");
let isXTurn = true;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      if (isXTurn) {
        cell.textContent = "X";
        status.textContent = "It's O's turn";
      } else {
        cell.textContent = "O";
        status.textContent = "It's X's turn";
      }
      isXTurn = !isXTurn;
    }
  });
});
const restart = document.querySelector(".game--restart");
restart.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.textContent = ""; // Clear the cell content
  });

  status.textContent = "It's X's turn"; // Reset status message
  isXTurn = true; // Reset the turn to X's
});

