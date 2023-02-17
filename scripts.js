
// event listeners 

let buttons = document.querySelectorAll('.gameboard--button'); 
let button1 = document.getElementById('0'); 
let button2 = document.getElementById('1'); 
let button3 = document.getElementById('2'); 
let button4 = document.getElementById('3'); 
let button5 = document.getElementById('4'); 
let button6 = document.getElementById('5'); 
let button7 = document.getElementById('6'); 
let button8 = document.getElementById('7'); 
let button9 = document.getElementById('8'); 

function Gameboard() {

    let board = [['', '', ''], ['', '', ''], ['', '', '']]; 

    const getBoard = () => board; 

    const printBoard = () => {
        button1.innerHTML = board[0][0]; 
        button2.innerHTML = board[0][1]; 
        button3.innerHTML = board[0][2]; 
        button4.innerHTML = board[1][0]; 
        button5.innerHTML = board[1][1];
        button6.innerHTML = board[1][2];
        button7.innerHTML = board[2][0];
        button8.innerHTML = board[2][1];
        button9.innerHTML = board[2][2];
    }  
    
    const resetBoard = () => {
        board = [['', '', ''], ['', '', ''], ['', '', '']]; 
    };

    return { 
        getBoard, 
        printBoard, 
        resetBoard 
    }; 

};

function Controller(name1, name2) {
   let playerOneName = name1; 
   let playerTwoName = name2; 

    const board = Gameboard(); 
    
    const players = [
        {   
            name: playerOneName, 
            symbol: 'X'
        }, 
        {
            name: playerTwoName, 
            symbol: 'O'
        }
    ];

    let activePlayer = players[0]; 

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players [0]; 
    }; 

    const getActivePlayer = () => activePlayer; 

    const printNewRound = () => {
        board.printBoard(); 
    }

    return { switchPlayer, getActivePlayer, printNewRound }
}

function Move() {

    const board = Gameboard(); 
    const controller = Controller('Player 1', 'Player 2'); 

    const updateGameState = (row, col, symbol) => {
        if ( board.getBoard()[row][col] == '') {
            board.getBoard()[row][col] = symbol; 
        } else if ((board.getBoard()[row][col] == 'X')||(board.getBoard()[row][col] == 'O')){
            board.getBoard()[row][col] == board.getBoard()[row][col];
        }
    }

    const GameOver = () => {
        const xWin = {
            es1: [['X', '', ''], ['X', '', ''], ['X', '', '']],
            es2: [['', 'X', ''], ['', 'X', ''], ['', 'X', '']], 
            es3: [['', '', 'X'], ['', '', 'X'], ['', '', 'X']],  
            es4: [['X', 'X', 'X'], ['', '', ''], ['', '', '']],
            es5: [['', '', ''], ['X', 'X', 'X'], ['', '', '']], 
            es6: [['', '', ''], ['', '', ''], ['X', 'X', 'X']],  
            es7: [['X', '', ''], ['', 'X', ''], ['', '', 'X']],
            es8: [['', '', 'X'], ['', 'X', ''], ['X', '', '']], 
        } 

        const oWin = {
            es1: [['O', '', ''], ['O', '', ''], ['O', '', '']],
            es2: [['', 'O', ''], ['', 'O', ''], ['', 'O', '']], 
            es3: [['', '', 'O'], ['', '', 'O'], ['', '', 'O']],  
            es4: [['O', 'O', 'O'], ['', '', ''], ['', '', '']],
            es5: [['', '', ''], ['O', 'O', 'O'], ['', '', '']], 
            es6: [['', '', ''], ['', '', ''], ['O', 'O', 'O']],  
            es7: [['O', '', ''], ['', 'O', ''], ['', '', 'O']],
            es8: [['', '', 'O'], ['', 'O', ''], ['O', '', '']], 
        } 

        const gameOverCheck = () => {
            if (board.getBoard() == xWin.es1) {
                console.log('X WINS'); 
                } else if (board.getBoard() == oWin) {
                console.log('O WINS'); 
                };
            };

        gameOverCheck();
    }

    const userInput = () => {
        buttons.forEach(button => {
            let row = button.dataset.row; 
            let col = button.dataset.col;  

            button.addEventListener('click', () => {
                let symbol = controller.getActivePlayer().symbol; 
                updateGameState(row, col, symbol); 
                board.printBoard();
                GameOver(); 
                controller.switchPlayer(); 
            });
        });
    };
   
    return { userInput }
}

const move = new Move(); 
move.userInput(); 
