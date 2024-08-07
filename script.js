let boxes = document.querySelectorAll('.box');
let newGameBtn = document.getElementById('newgame-btn');
let resetBtn = document.getElementById('reset-btn');
let winnerBox = document.querySelector('.winner-box');
let winnerMsg = document.querySelector('#winner-msg');

let turnO = true;
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const newGame = ()=>{
    turnO = true;
    enableBoxes();
    winnerBox.classList.add("hide");
}
const resetGame =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner)=>{
    winnerMsg.innerHTML = `Congratulations, winner is ${winner}`;
    winnerBox.classList.remove("hide");
    disableBoxes();
}
checkWinner = ()=>{
    for(pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
            
        }
    }
}

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);