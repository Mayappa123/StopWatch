let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.getElementById('display');
let int = null;

document.getElementById('startStop').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
        int = null;
        document.getElementById('startStop').innerText = 'Start';
    } else {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStop').innerText = 'Stop';
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timerRef.innerHTML = `${m}:${s}:${ms}`;
}
