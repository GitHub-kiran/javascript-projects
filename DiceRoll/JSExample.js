var images = []
images[0] = "imgs/dice-1.png";
images[1] = "imgs/dice-2.png";
images[2] = "imgs/dice-3.png";
images[3] = "imgs/dice-4.png";
images[4] = "imgs/dice-5.png";
images[5] = "imgs/dice-6.png";

output = document.querySelector('.output');

let rollTheDice = function() {
    rollNum1 = Math.floor(Math.random() * 6)
    rollNum2 = Math.floor(Math.random() * 6)
    console.log(rollNum1)
    console.log(rollNum2)
    roll1 = document.querySelector('.dice1');
    roll2 = document.querySelector('.dice2');
    roll1.src = images[rollNum1]
    roll2.src = images[rollNum2]
    setWinner(rollNum1,rollNum2)
}

let setWinner = function(player, computer) {
    if(player > computer) {
        output.innerHTML = '<h1>player has won the game</h1>';
        output.style.color = "green";
    } else if (player == computer) {
        output.value = '<h1> its a tie </h1>';
        output.style.color = "orange";
    } else {
        output.innerHTML = '<h1> computer has won the game</h1>'
        output.style.color = "blue";
    }
}




