{/* <label id="timer">Timer</label>
<div id="btns">
    <button class="btn" id="start">Start</button>
    <button class="btn" id="reset">Reset</button>
    <button class="btn" id="stop">Stop</button>
</div> */}

// let timer = document.getElementById("timer");
// let start = document.getElementById("start");
// let reset = document.getElementById("reset");
// let stop = document.getElementById("stop");


// document.getElementById("start").onclick = function(){
//     let time = 0;
//     while(time<100){
//         time++;
//         // console.log(time);
//         document.getElementById("timer").innerHTML = time;
//     }
// }
// document.getElementById("reset").onclick = function(){

// }
// document.getElementById("stop").onclick = function(){

// }
// JavaScript
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const stopButton = document.getElementById('stop');
const timerElement = document.getElementById('timer');

let startTime;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  timerElement.textContent = timeString;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerElement.textContent = '00:00:00';
}

function stopTimer() {
  clearInterval(timerInterval);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', stopTimer);

