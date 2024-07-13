let startStopBtn = document.getElementById("startStop");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display");
let themeSwitch = document.getElementById("themeSwitch");

let timer = null;
let elapsedTime = 0;
let running = false;

startStopBtn.addEventListener("click", () => {
  if (running) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
    running = false;
  } else {
    timer = setInterval(updateTime, 10); 
    startStopBtn.textContent = "Stop";
    running = true;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = "00:00:00:000";
  startStopBtn.textContent = "Start";
  running = false;
});

function updateTime() {
  elapsedTime += 10;
  let milliseconds = elapsedTime % 1000;
  let totalSeconds = Math.floor(elapsedTime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(
    seconds
  )}:${padMilliseconds(milliseconds)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function padMilliseconds(unit) {
  if (unit < 10) {
    return "00" + unit;
  } else if (unit < 100) {
    return "0" + unit;
  } else {
    return unit;
  }
}

themeSwitch.addEventListener("change", () => {
  document.body.classList.add("transition");
  if (document.body.classList.contains("day")) {
    document.body.classList.remove("day");
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("day");
  }
  setTimeout(() => {
    document.body.classList.remove("transition");
  }, 500); 
});
