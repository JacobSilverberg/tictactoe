// 3 objects:
// Game
// Player
// Gameboard


let gameController = (function() {
    let gameActive = true;
    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const board = [];
    for (let i = 0; i < 9; i++) {
        board[i] = "";
    };

    const players = [
        {
          name: "Player One",
          token: "X"
        },
        {
          name: "Player Two",
          token: "O"
        }
    ];

    let activePlayer = players[0];

    function switchPlayers() {
        if (activePlayer == players[0]) {
            activePlayer = players[1];
        }
        else {
            activePlayer = players[0];
        }
        console.log(`It is ${activePlayer.name}'s turn.`)
    };

    function makeMove(tileSelection) {
        if (board[tileSelection] == "") {
            board[tileSelection] = activePlayer.token;
            document.getElementById(tileSelection).textContent = activePlayer.token;
            return (true);
        }
        else {
            return (false);
        }
    }

    function checkIfWinning() {
        for (let i = 0; i < winning.length; i++){
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2]){
                return(true);
            }
        }
        return(false);
    };

    function checkIfFull() {
        for (let i = 0; i < board.length; i++){
            if (board[i] == "") {
                return (true);
            } else {
                continue;
            }
        }
        return(false);
    }

    function receiveInput(e) {
        const tileInput = Number(e.target.id);
        gameLoop(tileInput);
    };

    function gameLoop(tileSelection) {
        if (makeMove(tileSelection)) {
            if (checkIfWinning()) {
                if (checkIfFull()){
                    switchPlayers();
                }
                else {
                    console.log("Tie!");
                }
            }
            else {
                console.log("Winner! Someone.");
            }
        } else {
            console.log("Illegal Tile Placement");
        }
    };

    
    return {receiveInput}

})();

const gameBoard = (function createGameBoard () {
    const gameBoardContainer = document.querySelector("#game-board");

    for (let i = 0; i < 3; i++) {
        const boardRow = document.createElement('div');
        boardRow.setAttribute('class', 'game-board-row');
        boardRow.setAttribute('id', `game-board-row-${i + 1}`);
        for (let j = 0; j < 3; j++) {
            const boardTile = document.createElement('div');
            boardTile.setAttribute('class', 'board-tile');
            boardTile.setAttribute('id', `${(i * 3) + j}`);
            boardTile.textContent = `tile ${(i * 3) + j}`;
            boardRow.appendChild(boardTile);
        }
        gameBoardContainer.appendChild(boardRow);
    }

})();

// gameBoard;



document.querySelectorAll('.board-tile').forEach(tile => tile.addEventListener('click', gameController.receiveInput));
