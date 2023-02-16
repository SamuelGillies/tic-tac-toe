
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

    return { getBoard, printBoard, resetBoard }; 

};

function Move() {

    const board = Gameboard(); 

    const updateGameState = (row, col, value) => {
        board.getBoard()[row][col] = value; 
        console.log(board.getBoard()); 
    }

    const userInput = () => {
        buttons.forEach(button => {
            let row = button.dataset.row; 
            let col = button.dataset.col;  

            button.addEventListener('click', () => {
                let value = 'X'; 
                updateGameState(row, col, value); 

               board.printBoard();
            });
        });
    };
   
    return {userInput}
}

const move = new Move(); 
move.userInput(); 


function gameController(name1, name2) {
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

    const playRound = () => {
        // obtain 
    }

    return { switchPlayer, getActivePlayer, printNewRound, playRound }
}
