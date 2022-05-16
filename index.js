const display = document.getElementById("clock");
const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const date = new Date();

  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  display.innerText = `${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

function setAlarmTime(value) {
  alarmTime = value;
}

setInterval(updateTime, 1000);
