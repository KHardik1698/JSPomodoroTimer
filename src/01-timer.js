let divRoot = document.getElementById("root");

let hours = 0;
let minutes = 0;
let seconds = 0;

pomodoro = (event) => {
  minutes = 25;
  seconds = 0;
  document.getElementById("pomodoro-heading").innerHTML =
    "Default Pomodoro Time " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : Pomodoro";
};

shortBreak = (event) => {
  minutes = 5;
  seconds = 0;
  document.getElementById("short-break-heading").innerHTML =
    "Default Short Break Time " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : Short Break";
};

let text = document.getElementById("time-heading");
let t;
let status = false;

startTimer = (event) => {
  if (status == false)
    t = setInterval(() => {
      status = true;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            document.getElementById("time-heading").innerHTML =
              "00:00:00 Timer Expired";
          }
        }
      }
      if (text.innerHTML !== "00:00:00 Timer Expired")
        text.innerHTML = hours + ":" + minutes + ":" + seconds;
      seconds--;
    }, 1000);
};

stopTimer = (event) => {
  clearInterval(t);
  status = false;
};

resetTimer = (event) => {
  clearInterval(t);
  status = false;
  pomodoro();
  text.innerHTML = hours + ":" + minutes + ":" + seconds;
};
