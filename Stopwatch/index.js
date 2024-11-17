let startTime = 0;
let elapsedTime = 0;
let timeInterval;
isRunning = false;
const timeDisplay=document.getElementById("timer");

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(update, 10);
    isRunning = true;
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timeInterval);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  isRunning && stop();
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent=`00:00:00:00`;
}

function update() {
    const currentTime = Date.now();
    elapsedTime= currentTime - startTime;
    console.log(elapsedTime);

    let hours= Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes= Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds= Math.floor(elapsedTime / 1000 % 60);
    let milliSeconds= Math.floor(elapsedTime % 1000 /10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliSeconds=String(milliSeconds).padStart(2,"0");

     timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}
