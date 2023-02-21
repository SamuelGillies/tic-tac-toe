
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
let info = document.getElementById('info');
let reset = document.getElementById('reset');


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
        printBoard(); 
        info.innerHTML = ''; 
        buttons.forEach(button => {
            button.disabled = false; 
        });
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

    const resetPlayer = () => {
        activePlayer = players[0];
    }

    const printNewRound = () => {
        board.printBoard(); 
    }

     
        



    return { switchPlayer, getActivePlayer, resetPlayer, printNewRound }
}


function Move() {

    const board = Gameboard(); 
    const controller = Controller('Player 1', 'Player 2'); 

    const updateGameState = (row, col, symbol) => {
        if (board.getBoard()[row][col] == '') {
            board.getBoard()[row][col] = symbol; 
        } else if ((board.getBoard()[row][col] == 'X')||(board.getBoard()[row][col] == 'O')){
            board.getBoard()[row][col] == board.getBoard()[row][col];
        }
    }

    const GameOver = (input) => {
        const gameOverCheck = () => {
            if (
                ((board.getBoard()[0][0] === `${input}`) && (board.getBoard()[1][0] === `${input}`) && 
                    (board.getBoard()[2][0] === `${input}`)) ||
                ((board.getBoard()[0][1] === `${input}`) && (board.getBoard()[1][1] === `${input}`) && 
                    (board.getBoard()[2][1] === `${input}`)) || 
                ((board.getBoard()[0][2] === `${input}`) && (board.getBoard()[1][2] === `${input}`) && 
                    (board.getBoard()[2][2] === `${input}`)) || 
                ((board.getBoard()[0][0] === `${input}`) && (board.getBoard()[0][1] === `${input}`) && 
                    (board.getBoard()[0][2] === `${input}`)) || 
                ((board.getBoard()[1][0] === `${input}`) && (board.getBoard()[1][1] === `${input}`) && 
                    (board.getBoard()[1][2] === `${input}`)) || 
                ((board.getBoard()[2][0] === `${input}`) && (board.getBoard()[2][1] === `${input}`) && 
                    (board.getBoard()[2][2] === `${input}`)) || 
                ((board.getBoard()[0][0] === `${input}`) && (board.getBoard()[1][1] === `${input}`) && 
                    (board.getBoard()[2][2] === `${input}`)) || 
                ((board.getBoard()[0][2] === `${input}`) && (board.getBoard()[1][1] === `${input}`) && 
                    (board.getBoard()[2][0] === `${input}`))
                )   {
                        let winner = `${input} WINS`; 
                        info.innerHTML = winner; 
                        buttons.forEach(button => {
                            button.disabled = true; 
                        });      
                    } 
                else if (((board.getBoard()[0].includes('')) === false) && ((board.getBoard()[1].includes('')) === false) 
                    && ((board.getBoard()[2].includes('')) === false)) 
                    {
                        let winner = `DRAW`; 
                        info.innerHTML = winner; 
                        buttons.forEach(button => {
                            button.disabled = true; 
                        }); 
                    } 
                else {
                        let winner = `Game in progress...`; 
                        info.innerHTML = winner; 
                        buttons.disabled = false; 
                    };
            };

        gameOverCheck();
    }

    const aiMove = () => {
        let aiRow = 0; 
        let aiCol = 0; 
        let isValid = true; 

        for (let i = 0; i < 9; i++) {
            aiRow = Math.floor(Math.random() * 3); 
            aiCol = Math.floor(Math.random() * 3); 

            if (board.getBoard()[aiRow][aiCol] === '') {
                isValid = true; 
                break; 
            }
        }

        if (isValid) {
            board.getBoard()[aiRow][aiCol] = 'O';
            controller.switchPlayer(); 
        }
    };

    const userInput = () => {
        buttons.forEach(button => {
            let row = button.dataset.row; 
            let col = button.dataset.col;  

            button.addEventListener('click', () => {
                let symbol = controller.getActivePlayer().symbol; 
                updateGameState(row, col, symbol); 
                GameOver(symbol); 
                aiMove();                
                board.printBoard();
                GameOver(symbol); 
                controller.switchPlayer(); 
            });
        });
    };

    const userReset = () => {
        reset.addEventListener('click', () => {
            board.resetBoard(); 
            controller.resetPlayer();
        }); 
    }
   
    return { userInput, userReset }
}

const move = new Move(); 
move.userInput(); 
move.userReset(); 
