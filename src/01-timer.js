let divRoot = document.getElementById("root");

let hours = 0;
let minutes = 25;
let seconds = 0;
let elapsed = 0;

let displayHours = hours;
let displayMinutes = minutes;
let displaySeconds = seconds;

pomodoro = (event) => {
  let pomoInput = document.getElementById("pomoDefault").value;
  if (pomoInput) {
    minutes = pomoInput;
  } else {
    minutes = 25;
  }
  seconds = 0;
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : Pomodoro";
};

shortBreak = (event) => {
  let shortInput = document.getElementById("shortDefault").value;
  if (shortInput) {
    minutes = shortInput;
  } else {
    minutes = 5;
  }
  seconds = 0;
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : Short Break";
};

increaseTime = (event) => {
  if (minutes < 59) minutes++;
  else {
    minutes = 0;
    hours++;
  }
};

decreaseTime = (event) => {
  if (minutes > 0) minutes--;
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
            text.innerHTML = "00:00:00 Timer Expired";
            window.alert("Timer Expired");
            window.alert(
              `Elapsed time : ${Math.floor((elapsed - 1) / 60)} Minutes : ${
                (elapsed - 1) % 60
              } Seconds`
            );
            clearInterval(t);
            status = false;
          }
        }
      }
      if (seconds < 10) {
        displaySeconds = 0 + seconds.toString();
      } else {
        displaySeconds = seconds;
      }
      if (minutes < 10) {
        displayMinutes = 0 + minutes.toString();
      } else {
        displayMinutes = minutes;
      }
      if (hours < 10) {
        displayHours = 0 + hours.toString();
      } else {
        displayHours = hours;
      }
      if (text.innerHTML !== "00:00:00 Timer Expired")
        text.innerHTML =
          displayHours + ":" + displayMinutes + ":" + displaySeconds;
      seconds--;
      elapsed++;
    }, 1000);
};

stopTimer = (event) => {
  clearInterval(t);
  status = false;
};

resetTimer = (event) => {
  clearInterval(t);
  status = false;
  elapsed = 0;
  pomodoro();
  text.innerHTML = hours + ":" + minutes + ":" + seconds;
};
