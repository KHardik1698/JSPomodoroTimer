let divRoot = document.getElementById("root");

let hours = 0;
let minutes = 25;
let seconds = 0;
let elapsed = 0;

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
      if (text.innerHTML !== "00:00:00 Timer Expired")
        text.innerHTML = hours + ":" + minutes + ":" + seconds;
      seconds--;
      elapsed++;
      console.log(elapsed);
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
