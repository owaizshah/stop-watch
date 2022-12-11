const tensInput = document.querySelector(".tens");
const secondsInput = document.querySelector(".seconds");
const minInput = document.querySelector(".min");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-restart");

let tens = 0;
let seconds = 0;
let min = 0;
let interval;

const startwatch = function () {
  interval = setInterval(function () {
    tens++;
    if (tens <= 9) tensInput.textContent = "0" + tens;
    if (tens > 9) tensInput.textContent = tens;
    if (tens >= 99) {
      seconds++;
      tens = 0;
      tensInput.textContent = "0" + tens;
      secondsInput.textContent = "0" + seconds;
    }
    if (seconds > 9) secondsInput.textContent = seconds;
    if (seconds >= 60) {
      seconds = 0;
      min++;
      minInput.textContent = "0" + min;
    }
    if (min > 9) minInput.textContent = min;
  }, 10);
};

//EVENT LISTNERS

startBtn.addEventListener("click", startwatch);

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  tens = 0;
  seconds = 0;
  tensInput.textContent = "0" + tens;
  secondsInput.textContent = "0" + seconds;
  clearInterval(interval);
});
