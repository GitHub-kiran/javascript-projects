bHead = document.querySelector('#calcBtn1');
bTail = document.querySelector('#calcBtn2');
buttons = document.querySelectorAll('button');
outp = document.querySelector('.output');
let playerScore = null;
let compScore = null;
let possible = ["Head", "Tail"];
let TargetScore = null

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
    }
 
function tossCoin(e) {
    playerScore = e.target.innerText;
    console.log(playerScore);
    compScore = Math.floor(Math.random(10)*2)
    compScore = possible[compScore];
    TargetScore = Math.floor(Math.random(10)*2)
    targetScore = possible[TargetScore];
    whoWin();
}

let whoWin = function() {
    if(targetScore == compScore && targetScore != playerScore) {
        outp.style.backgroundColor = "green";
        outp.innerHTML = "<h1>" + "computer has won the game" + "</h1>";
    } else if(targetScore != compScore && targetScore == playerScore) {
        outp.style.backgroundColor = "orange";
        outp.innerHTML = "<h1>" + "player has won the game" + "</h1>"
    } else 
        outp.innerHTML = "<h1>" + "no result" + "</h1>"
        playerScore = null
        compScore = null
}


