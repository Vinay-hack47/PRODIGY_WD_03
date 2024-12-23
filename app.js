let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let scoreO = 0;
let scoreX = 0;
let playWithAI = true; 
let AIButton = document.querySelector("#ai_button");
let PersonButton = document.querySelector("#person_button"); 
let turnO = true;
let gameWon = false; 


const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const resetGame = () => {
  turnO = true;
  gameWon = false; 
  enableBoxes();
  msgContainer.classList.add("hide");
  msg.innerText = "";
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


const showWinner = (winner) => {
  if (!gameWon) {
    gameWon = true; 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    if (winner === "O") {
      scoreO++;
      document.getElementById("score-o").innerText = scoreO;
    } else if (winner === "X") {
      scoreX++;
      document.getElementById("score-x").innerText = scoreX;
    }
  }
};


const makeAIMove = () => {
  const availableBoxes = [...boxes].filter((box) => box.innerText === "");
  if (availableBoxes.length > 0 && !gameWon) {
    const randomBox =
      availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
    randomBox.innerText = "X";
    randomBox.disabled = true;
    checkWinner();
  }
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }

  if ([...boxes].every((box) => box.innerText !== "") && !gameWon) {
    msg.innerText = `It's a draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameWon = true; 
  }
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO && !gameWon) {
      box.innerText = "O";
      box.disabled = true;
      turnO = false;
      checkWinner();

      if (playWithAI && !gameWon && !turnO) {
        setTimeout(makeAIMove, 500);
        turnO = true;
      }
    } else if (!playWithAI && !gameWon) {
      box.innerText = "X";
      box.disabled = true;
      turnO = true;
      checkWinner();
    }
  });
});


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


AIButton.addEventListener("click", () => {
  playWithAI = true;
  AIButton.classList.add("selected");
  PersonButton.classList.remove("selected");
  resetGame();
});

PersonButton.addEventListener("click", () => {
  playWithAI = false;
  PersonButton.classList.add("selected");
  AIButton.classList.remove("selected");
  resetGame();
});
