document.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
var audioContext = new AudioContext();
var gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);
var duration = 0.025;
var beat = audioContext.createOscillator();
beat.frequency.value = 1000;
beat.connect(gainNode);
beat.start();
beat.stop(audioContext.currentTime + duration);
var isPlaying = false;
var bpmInput = document.getElementById("bpm");
bpmInput.addEventListener("input", function () {
  var lastBpm = 0;
  bpmInput.addEventListener("change", function () {
    if (isPlaying && parseInt(this.value) !== lastBpm) {
      setTimeout(function () {
        var bpm = parseInt(bpmInput.value);
        var interval = 60000 / bpm;
        clearInterval(timer);
        timer = setInterval(function () {
          beat = audioContext.createOscillator();
          beat.frequency.value = 1000;
          beat.connect(gainNode);
          beat.start(audioContext.currentTime);
          beat.stop(audioContext.currentTime + duration);
          circle.style.opacity = "1.0";
          setTimeout(function () {
            circle.style.opacity = "0.0";
          }, interval / 2);
        }, interval);
      }, 500);
      lastBpm = parseInt(this.value);
    }
  });
  var bpm = parseInt(this.value);
  if (bpm >= 1 && bpm <= 300) {
    updateBpmValue(bpm);
  }
});
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var circle = document.querySelector(".circle");
startButton.addEventListener("click", function () {
  if (!isPlaying) {
    var bpm = parseInt(bpmInput.value);
    var interval = 60000 / bpm;
    timer = setInterval(function () {
      beat = audioContext.createOscillator();
      beat.frequency.value = 1000;
      beat.connect(gainNode);
      beat.start(audioContext.currentTime);
      beat.stop(audioContext.currentTime + duration);
      circle.style.opacity = "1.0";
      setTimeout(function () {
        circle.style.opacity = "0.0";
      }, interval / 2);
    }, interval);
    isPlaying = true;
  }
});
stopButton.addEventListener("click", function () {
  if (isPlaying) {
    clearInterval(timer);
    isPlaying = false;
    circle.style.opacity = "0.0";
  }
});

function updateMetronomeInterval() {
  if (isPlaying) {
    clearInterval(timer);
    var bpm = parseInt(bpmInput.value);
    var interval = 60000 / bpm;
    timer = setInterval(function () {
      beat = audioContext.createOscillator();
      beat.frequency.value = 1000;
      beat.connect(gainNode);
      beat.start(audioContext.currentTime);
      beat.stop(audioContext.currentTime + duration);
      circle.style.opacity = "1.0";
      setTimeout(function () {
        circle.style.opacity = "0.0";
      }, interval / 2);
    }, interval);
  }
}
var tapButton = document.getElementById("tap");
var tapTimes = [];
var tapTimer;
tapButton.addEventListener("click", function () {
  tapTimes.push(Date.now());
  clearTimeout(tapTimer);
  if (tapTimes.length > 3) {
    tapTimes.shift();
    var total = 0;
    for (var i = 1; i < tapTimes.length; i++) {
      total += tapTimes[i] - tapTimes[i - 1];
    }
    var average = total / (tapTimes.length - 1);
    var bpm = Math.round(60000 / average);
    bpmInput.value = bpm;
    updateMetronomeInterval();
  }
  tapTimer = setTimeout(function () {
    tapTimes = [];
  }, 2000);
});
var bpmDecreaseButton = document.getElementById("bpm-decrease");
var bpmIncreaseButton = document.getElementById("bpm-increase");
bpmDecreaseButton.addEventListener("click", function () {
  var bpm = parseInt(bpmInput.value);
  if (bpm > 1) {
    bpmInput.value = bpm - 1;
    updateMetronomeInterval();
  }
});
bpmIncreaseButton.addEventListener("click", function () {
  var bpm = parseInt(bpmInput.value);
  if (bpm < 300) {
    bpmInput.value = bpm + 1;
    updateMetronomeInterval();
  }
});
function updateBpmValue(value) {
  bpmInput.value = value;
}
bpmInput.addEventListener("click", function () {
  this.focus();
});
