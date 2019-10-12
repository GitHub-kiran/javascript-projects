let textStartTime = null;
let textEndTime = null;

sbmit = document.querySelector('#sbMitTextContent');
startMsg = document.querySelector('h3');
textAreaContent = document.querySelector('.text-area-content');

sbmit.addEventListener('click', function() {
    startMsg.innerText = '';
    textEndTime = new Date();
    console.log(textAreaContent.innerHTML);
    calcTime(textEndTime);
    textAreaContent.disabled = true;
})

textAreaContent.addEventListener('click', function() {
    textStartTime = new Date();
})

let calcTime = function(curTime) {
    diffInTime = textStartTime ? curTime - textStartTime : 0;
    diffInTime = diffInTime/1000;
    myMessage = startMsg.innerHTML;
    myMessageLen = myMessage.split(' ').length;
    rateOfMsg = Math.floor((myMessageLen*60)/diffInTime)
    startMsg.innerText = 'time taken for writing the message is: ' + rateOfMsg + ' words per minutes';
    startMsg.style.color = 'blue';
}