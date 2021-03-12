//TEST PAGE JS
//sticky navbar function
window.onscroll = function () {
  myFunction();
};

//sticky navbar variabes
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
var attempted = false;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//timer start for exams
var twoHours = 60 * 120,
  display = document.querySelector('#timer');
startTimer(twoHours, display);

window.onload = function () {
  var twoHours = 60 * 120,
    display = document.querySelector('#timer');
  startTimer(twoHours, display);
};
function startTimer(duration, display) {
  var start = Date.now(),
    diff,
    hours,
    minutes,
    seconds;
  function timer() {
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    hours = (diff / 3600) | 0;
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = hours > 0 ? minutes - hours * 60 : minutes;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = hours + ':' + minutes + ':' + seconds;

    if (diff <= 0) {
      // add one second so that the count down starts at the full duration
      // example 05:00 not 04:59
      start = Date.now() + 1000;
    }
    if (hours == 0 && minutes == 0 && seconds == 0) {
      timerEnd();
    }
  }
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

function timerEnd() {
  alert('The exam is complete.');
  window.location.href = 'complete.html';
}

var subBtn = document.getElementById('submitAnswers');
var testAnswers = Array.from(document.getElementsByClassName('testAnswer'));

subBtn.addEventListener('click', () => {
  //require each box filled out on exam
  // put red border if empty, no border if filled
  for (var i = 0; i < testAnswers.length; i++) {
    if (testAnswers[i].value == '') {
      alert('Each box must be filled.');
      attempted = true;
      testAnswers.forEach((item) => {
        item.value == ''
          ? (item.style.border = '1px solid red')
          : (item.style.border = 'none');
      });
      break;
    } else {
      //require user to confirm that they have finished exam by typing "yes"
      var done = prompt(
        "Type 'yes' if you would like to submit answers."
      ).toLocaleLowerCase();
      if (done == 'yes') {
        location.href = 'complete.html';
      }
    }
  }
});

if ((attempted = true)) {
  testAnswers.forEach((item) => {
    item.addEventListener('keyup', () => {
      item.value.length > 0
        ? (item.style.border = 'none')
        : (item.style.border = '1px solid red');
    });
  });
}
