// event listeners 

let button = document.getElementsByClassName('gameboard--button'); 
let button1 = document.getElementById('0'); 
let button2 = document.getElementById('1'); 
let button3 = document.getElementById('2'); 
let button4 = document.getElementById('3'); 
let button5 = document.getElementById('4'); 
let button6 = document.getElementById('5'); 
let button7 = document.getElementById('6'); 
let button8 = document.getElementById('7'); 
let button9 = document.getElementById('8'); 


// module structure
let gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']; 
    button1.innerHTML = board[0]; 
    button2.innerHTML = board[1]; 
    button3.innerHTML = board[2]; 
    button4.innerHTML = board[3]; 
    button5.innerHTML = board[4]; 
    button6.innerHTML = board[5]; 
    button7.innerHTML = board[6]; 
    button8.innerHTML = board[7]; 
    button9.innerHTML = board[8]; 
    
    resetBoard = function() {
    board = ['', '', '', '', '', '', '', '', '']; 
    };

    return { board, resetBoard }; 
})();


const player = (name, symbol) => {
    const getName = name; 
    const getSymbol = symbol; 
    return { getName, getSymbol }; 
}

function roundTracker() {
    addRound = () => { 
        let i = 0; 
        i++; 
        console.log(i);
    }

    resetRound = function() {
        i = 0; 
    }

    return { addRound, resetRound }
};

console.log()



//blank game board

//detect turn

//detect click event 

//enter click event to board

//render to window 

//check if board meets a win condition