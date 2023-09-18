const { start } = require("repl");

let timeBegan = null; //did the clock start
let timeStopped = null ; // what time was the timer stopped
let stoppedDuration = 0; // how long was the timer stopped?
let startInterval = null; // this is needed to stop the startInterval() method
let flag = false ; //to control the start/stop of the timer

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click" , function(){
    if(!flag)
    {
        startTimer();
        flag = true;
    }
    else 
    {
        stopTimer();
        flag= false;

    }
})

function startTimer(){
if(timeBegan === null)
timeBegan = new Date();


if(timeStopped !== null)
stoppedDuration += (new Date() - timeStopped);

startInterval = setInterval(clockRunning,10);
}

function stopTimer (){
    timeStopped = new Date();
    clearInterval(startInterval);
    
}

function clockRunning(){
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime -timeBegan -stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.getElementById("timer-display").innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);

}

