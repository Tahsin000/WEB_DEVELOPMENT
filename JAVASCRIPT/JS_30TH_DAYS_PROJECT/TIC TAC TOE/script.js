
    // Game variables
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameOver = false;

    // Winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Function to handle player moves
    function makeMove(index) {
      if (!gameOver && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerHTML =
          currentPlayer;
        checkWin();
        togglePlayer();
      }
    }

    // Function to toggle players
    function togglePlayer() {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // Function to check for a win
    function checkWin() {
      for (let combo of winningCombos) {
        if (
          board[combo[0]] !== "" &&
          board[combo[0]] === board[combo[1]] &&
          board[combo[1]] === board[combo[2]]
        ) {
          gameOver = true;
          displayMessage(`Player ${board[combo[0]]} wins!`);
          break;
        }
      }

      if (!board.includes("") && !gameOver) {
        gameOver = true;
        displayMessage("It's a tie!");
      }
    }

    // Function to display message
    function displayMessage(msg) {
      document.querySelector(".message").textContent = msg;
    }