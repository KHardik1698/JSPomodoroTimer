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
  let pomoFilter = inputValidation(pomoInput, 60);
  if (pomoFilter) {
    minutes = pomoInput;
  } else {
    minutes = 25;
  }
  seconds = 0;
  document.getElementById("pomoDefault").value = "";
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : Pomodoro";
};

shortBreak = (event) => {
  let shortInput = document.getElementById("shortDefault").value;
  let shortFilter = inputValidation(shortInput, 15);
  if (shortFilter) {
    minutes = shortInput;
  } else {
    minutes = 5;
  }
  seconds = 0;
  document.getElementById("shortDefault").value = "";
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
  if (status == false) {
    status = true;
    t = setInterval(() => {
      seconds--;
      elapsed++;
      if (
        document.getElementById("current-timer-heading").innerHTML ==
        "Current Timer : None"
      )
        document.getElementById("current-timer-heading").innerHTML =
          "Current Timer : Default";
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
    }, 1000);
  }
};

stopTimer = (event) => {
  clearInterval(t);
  status = false;
};

resetTimer = (event) => {
  clearInterval(t);
  status = false;
  hours = 0;
  minutes = 25;
  seconds = 0;
  text.innerHTML = "00:" + minutes + ":00";
  document.getElementById("current-timer-heading").innerHTML =
    "Current Timer : None";
  window.alert(
    `Elapsed time : ${Math.floor(elapsed / 60)} Minutes : ${
      elapsed % 60
    } Seconds`
  );
  elapsed = 0;
};

const inputValidation = (input, limit) => {
  str = input;
  num = parseInt(input);
  return isValid(num, str, limit);
};

const isValid = (num, str, limit) => {
  if (parseInt(str) !== num && str.length > 0) {
    window.alert("Enter a number");
    return false;
  } else if (str.length > 2) {
    window.alert("Enter a 2 Digit Number");
    return false;
  } else if (num < 0 || num > 60) {
    window.alert("Enter a number between 1 to 60");
    return false;
  } else if (parseInt(str) == num && str.length !== 1 && str.length > 2) {
    window.alert("Enter without Blank Spaces");
  } else if (str.length == 0) {
    return false;
  } else if (num > limit) {
    window.alert(`Enter a number less than ${limit}`);
  } else {
    return true;
  }
};
