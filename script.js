const status = document.querySelector(".game--status");
status.textContent = "It's X's turn";

const cells = document.querySelectorAll(".cell");
let isXTurn = true;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
      if (isXTurn) {
        cell.textContent = "X";
        status.textContent = "It's O's turn";
      } else {
        cell.textContent = "O";
        status.textContent = "It's X's turn";
      }
      isXTurn = !isXTurn;

  });
});