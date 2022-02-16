let container = document.querySelector('.container');
let player = document.querySelector('.player');
let winners = document.querySelector('.winner');
let symbol = "O";
let players = "Player 1";
let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

createGrid();

let boxes = document.querySelectorAll('.box');



for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.addEventListener('click', insertSymbol);
}



// functions


function insertSymbol(e){
    this.removeEventListener('click', insertSymbol);
    (symbol === "X") ? symbol="O": symbol="X";
    this.innerHTML = symbol;
    checkLines();
    (players === "Player 1") ? players="Player 2" : players="Player 1";
    changePlayerDisplay(players);
}

function changePlayerDisplay(players){
    player.innerHTML = players;
}

function checkLines(){
    lines.forEach(function(line){
        let box1 = boxes[line[0]];
        let box2 = boxes[line[1]];
        let box3 = boxes[line[2]];

        if(box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !== " "){
            box1.style.background="tomato";
            box2.style.background="tomato";
            box3.style.background="tomato";

            stopCliks();
            winner();
        }
    })
}

function stopCliks(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', insertSymbol);
        
    }
}

function winner(){
    player.style.display= "none";
    winners.innerHTML = "WINNER: "+ players;
}

function createGrid(){
    let text = "";
    for(let i=0; i<9; i++){
        text += '<div class="box"> </div>'
    }
    container.innerHTML = text;
    player.innerHTML = players;
}

