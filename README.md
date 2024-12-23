# Tic Tac Toe

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript. The game can be played in two modes: against an AI or in a two-player mode.

## Game Logic

### Board Management
The game board consists of 9 boxes, each represented by a button element. The state of each box (empty, 'O', or 'X') is managed using the `innerText` property of the button elements.

### Turns
- The game starts with Player 'O'.
- Players take turns to place their mark ('O' or 'X') in an empty box.
- The turn alternates between the players after each move.

### Winning Condition
The game checks for a winner after each move by comparing the current state of the board against predefined winning patterns. The winning patterns are stored in the `winPatterns` array.

### Draw Condition
If all boxes are filled and no player has won, the game is declared a draw.

## AI Logic

When playing against the AI:
- The AI makes a random move by selecting an empty box.
- The AI's move is made after a short delay to simulate thinking time.

## Event Listeners

### Box Click
Each box has a click event listener that:
- Places the player's mark in the clicked box.
- Disables the clicked box to prevent further clicks.
- Checks for a winner or a draw.
- If playing against the AI, triggers the AI's move.

### Reset and New Game
- The `resetGame` function resets the game state, enabling all boxes and clearing their content.
- The `newGameBtn` and `resetBtn` buttons trigger the `resetGame` function.

## Mode Selection

The game can be played in two modes:
- **Play with AI**: The player competes against the AI.
- **Two Player**: Two players take turns to play.

The mode is selected using the `AIButton` and `PersonButton` buttons. The selected mode is highlighted, and the game is reset when the mode is changed.

## How to Run

1. Open `index.html` in a web browser.
2. Select the game mode (Play with AI or Two Player).
3. Click on the boxes to play the game.
4. Use the Reset Game button to reset the game at any time.
5. Use the New Game button to start a new game after a win or draw.

Enjoy playing Tic Tac Toe!
