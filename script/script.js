const board = document.querySelector('.board');
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
let player = 'X';
const clear = document.querySelector('.clr-board');
const rld = document.querySelector('.reload');

function clickBoard(e){
    console.log(e.target);
    console.log('Clicked');
    
    if(e.target.textContent == ''){
        e.target.textContent = player;
        if(player == 'X') player = 'O'
        else player = 'X';
    };
    console.log(boxes);
    checkWinner();
    checkDraw();
    if(checkDraw() == true && board.style.display != 'none'){
        board.style.display = 'none';
        message.textContent = 'The Match is Drawn.';
        message.style.display = 'block';
    }
    


}


function checkWinner(){
    rowWinner();
    columnWinner();
    diagonalWinner();
}

function rowWinner(){
    
    if (boxes[0].textContent === boxes[1].textContent && boxes[1].textContent === boxes[2].textContent && boxes[0].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[1].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';

    }
    if (boxes[3].textContent === boxes[4].textContent && boxes[4].textContent === boxes[5].textContent && boxes[4].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[4].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
    if (boxes[6].textContent === boxes[7].textContent && boxes[7].textContent === boxes[8].textContent && boxes[7].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[6].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
}

function columnWinner(){
    if (boxes[0].textContent === boxes[3].textContent && boxes[3].textContent === boxes[6].textContent && boxes[0].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[3].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
    if (boxes[1].textContent === boxes[4].textContent && boxes[4].textContent === boxes[7].textContent && boxes[4].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[4].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
    if (boxes[2].textContent === boxes[5].textContent && boxes[5].textContent === boxes[8].textContent && boxes[8].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[2].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
}

function diagonalWinner(){
    if (boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent && boxes[0].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[4].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';
    }
    if (boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent && boxes[4].textContent !== ""){
        board.style.display = 'none';
        message.textContent = `${boxes[6].textContent} is the winner`;
        message.style.display = 'block';
        clear.style.display = 'none';

    }


}

function checkDraw(){
    let valid = true;
    boxes.forEach(box => {
        if(box.textContent == "") valid = false;
    })
    return valid;
}

function clearBoard(){
    boxes.forEach(box => {
        box.textContent = '';
    })
}

function reload(){
    location.reload();
}

// Event Listeners.
board.addEventListener('click', clickBoard);
clear.addEventListener('click', clearBoard);
rld.addEventListener('click', reload);