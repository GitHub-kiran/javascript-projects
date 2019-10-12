
var bark = '';
const button = document.querySelector("button");
const stop = document.querySelector(".stop-sound");

button.addEventListener("click", function () {
    const selectedPet = document.querySelector(".selectPet");
    playAnimalSound(selectedPet.value);
    console.log(selectedPet.value);
})

let playAnimalSound = function(pet) {
    if (pet == 'dog'){
        bark = new Audio('sounds/dog.mp3');
    } else if (pet == 'cat') {
        bark = new Audio('sounds/cat.mp3');
    } else if (pet == 'bird') {
        bark = new Audio('sounds/bird.mp3');
    } else if (pet == 'dinosaur') {
        bark = new Audio('sounds/dinosaur.mp3');
    } else if (pet == 'elephant') {
        bark = new Audio('sounds/elephant.mp3');
    } else if (pet == 'bear') {
        bark = new Audio('sounds/bear.mp3');
    }
    let duration = bark.duration;
    let muted = bark.muted;
    bark.play();
}
stop.addEventListener("click", function (bark) {
        bark.pause();
})


    