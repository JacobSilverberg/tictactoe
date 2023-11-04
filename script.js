// 3 objects:
// Game
// Player
// Gameboard

function createGameBoard () {
    const gameBoard = document.querySelector("#game-board");

    for (let i = 0; i < 3; i++) {
        const boardRow = document.createElement('div');
        boardRow.setAttribute('class', 'game-board-row');
        boardRow.setAttribute('id', `game-board-row-${i + 1}`);
        for (let j = 0; j < 3; j++) {
            const boardTile = document.createElement('div');
            boardTile.setAttribute('class', 'board-tile');
            boardTile.setAttribute('id', `board-tile-${(i * 3) + (j + 1)}`);
            boardTile.textContent = `tile ${(i * 3) + (j + 1)}`;
            boardRow.appendChild(boardTile);
        }
        gameBoard.appendChild(boardRow);
    }
}

createGameBoard();