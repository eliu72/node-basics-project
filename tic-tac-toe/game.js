const game = (() => {
    let gameboard = [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
    ];
    let currentPlayer, otherPlayer;
    const fillBoard = () => {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                gameboard[i][j] = '_';
            }
        }
        render();
    }
    const addMark = (col, row, symbol) => {
        gameboard[col][row] = symbol;
    }
    const isFilled = (row, col) => {
        console.log(gameboard[row][col]);
        if (gameboard[row][col] != "_"){
            return true;
        }
        return false;
    }
    const isOver = () => {
        // check if any 3 in a row
        for (let row=0; row<3; row++){
            if (gameboard[row][0] === gameboard[row][1] && 
                gameboard[row][0] === gameboard[row][2] &&
                gameboard[row][0] !== "_"){
                return true;
            }
        }
        for (let col=0; col<3; col++){
            if (gameboard[0][col] === gameboard[1][col] && 
                gameboard[0][col] === gameboard[2][col] &&
                gameboard[0][col] !== "_"){
                return true;
            }
        }
        if (gameboard[0][0] === gameboard[1][1] && 
            gameboard[0][0] === gameboard[2][2] &&
            gameboard[0][0] !== "_"){
            return true;
        }
        if (gameboard[0][2] === gameboard[1][1] && 
            gameboard[0][2] === gameboard[2][0] && 
            gameboard[0][2] !== "_"){
            return true;
        }
        return false;
    }
    const isTied = () => {
        for (let i=0; i < 3; i++){
            for (let j=0; j < 3; j++){
                if (gameboard[i][j] === "_"){
                    return false;
                }
            }
        }
        return true;
    }
    const assignPlayers = (curr, other) => {
        currentPlayer = curr;
        otherPlayer = other;
    }

    // could not access player objects even after exposing them through the return 
    // had to make a getter function for them
    // originaly player variables are undefined (pass by value) so their return via the function 
    // is not a ref to the object even though an object is later assigned to it
    // https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
    const getCurrentPlayer = () => {
        return currentPlayer;
    }
    const getOtherPlayer = () => {
        return otherPlayer;
    }
    const swapPlayers = () => {
        [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
    }
    return {gameboard, addMark, isFilled, isOver, isTied, fillBoard, getCurrentPlayer, getOtherPlayer, assignPlayers, swapPlayers};
}) ();

const playerFactory = (name, symbol) => {
    return {name, symbol};
};

function render(){
    for (let i=0; i < 3; i++){
        for (let j=0; j < 3; j++){
            cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
            cell.innerHTML = game.gameboard[i][j];
        }
    }
}

// should add into the game object so that players can be assigned there
function startGame(){
    game.fillBoard();
    render();

    const player1 = playerFactory(document.getElementById('player1').value, 'X');
    const player2 = playerFactory(document.getElementById('player2').value, 'O');
    
    game.assignPlayers(player1, player2);
    let userPrompt = `It is ${game.getCurrentPlayer().name}'s turn. Please click a square.`;
    document.getElementById('playerTurn').innerHTML = userPrompt;
}

function addEventListeners(){
    const cells = document.querySelectorAll('td');
    cells.forEach((cell) => {
        cell.addEventListener('click', function updateGame() {
            document.getElementById('message').innerText = '';
            row = cell.dataset.row;
            col = cell.dataset.col;
            console.log(row, col);

            if (game.isFilled(row=row, col=col)) {
                userPrompt = "That square has already been chosen. Please choose another square.";
                document.getElementById('message').innerText = userPrompt;
                return;
            }
            else {
                game.addMark(row=cell.dataset.row, col=cell.dataset.col, game.getCurrentPlayer().symbol);
                render();
                
                //check if game over
                if (game.isOver()) {
                    userPrompt = `Game Over! ${game.getCurrentPlayer().name} has won!`;
                    document.getElementById('message').innerText = userPrompt;
                    return;
                }

                if (game.isTied()){
                    document.getElementById("message").innerText = "Game Over. Players tied.";
                    return;
                }
                
                // swap players
                game.swapPlayers();
                userPrompt = `It is ${game.getCurrentPlayer().name}'s turn. Please click a square.`;
                document.getElementById('playerTurn').innerHTML = userPrompt;
            }
            
        });
    });
}