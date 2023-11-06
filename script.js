// 3 objects:
// Game
// Player
// Gameboard

// const gameBoard = (function createGameBoard () {
//     const gameBoardContainer = document.querySelector("#game-board");

//     for (let i = 0; i < 3; i++) {
//         const boardRow = document.createElement('div');
//         boardRow.setAttribute('class', 'game-board-row');
//         boardRow.setAttribute('id', `game-board-row-${i + 1}`);
//         for (let j = 0; j < 3; j++) {
//             const boardTile = document.createElement('div');
//             boardTile.setAttribute('class', 'board-tile');
//             boardTile.setAttribute('id', `board-tile-${(i * 3) + (j + 1)}`);
//             boardTile.textContent = `tile ${(i * 3) + (j + 1)}`;
//             boardRow.appendChild(boardTile);
//         }
//         gameBoardContainer.appendChild(boardRow);
//     }
// })();

// gameBoard;

function gameBoard() {
    // Create array of tiles to represent gameboard
    const board = [];
    for (let i = 0; i < 9; i++) {
        board[i] = tile();
    }

    const getBoard = (i) => board;

    const markTile = (tile, player) => {
        if (board[tile].getTile() == 0) {
            board[tile].markTile()
        } else {
            return (false);
        }
    }

    const printBoard = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(board[(3 * i) + j].getTile() + "|");
            }
            console.log('\n');
        }
    }

    return {
        printBoard
    };
}

function tile() {
    let value = 0;

    const markTile = (player) => {
        value = player;
    };

    const getTile = () => value;

    return {
        markTile,
        getTile
    };
}


function gameController (playerOne = "Player One", playerTwo = "Player Two") {
    const board = gameBoard();

    const players = [
        {
            name: playerOne,
            token: 1
        },
        {
            name: playerTwo,
            token: 2
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`)
    }

    const playRound = (tile) => {
        console.log(`Placing ${getActivePlayer().name}'s piece into tile ${tile}.`)
        board.markTile(tile, getActivePlayer());

        switchPlayerTurn();
        printNewRound();
    }

    // Initial round start
    printNewRound();

    return {
        playRound,
        getActivePlayer
    }
}

const game = gameController();