// Prevent the default behavior of certain touch and gesture events to maintain a good and reliable user interface that doesn’t interfere with the usage of the metronome.
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

// An AudioContext object is created and used to create an oscillator node (beat) and a gain node (gainNode). The gain node is connected to the audio context’s destination (the speakers), and the oscillator node is connected to the gain node. The oscillator produces a sound at a frequency of 1000 Hz for a duration of 0.025 seconds.

// Create an audio context and gain node for playing the metronome sound
var audioContext = new AudioContext();
var gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

// Set the duration of the metronome sound
var duration = 0.025;

// Create an oscillator for playing the metronome sound
var beat = audioContext.createOscillator();
beat.frequency.value = 1000;
beat.connect(gainNode);
beat.start();
beat.stop(audioContext.currentTime + duration);

// Keep track of whether the metronome is currently playing
var isPlaying = false;

// Get references to DOM elements for user input and interaction
var bpmInput = document.getElementById("bpm");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var circle = document.querySelector(".circle");
// Sets up event listeners for various user interface elements such as buttons for starting and stopping the metronome, adjusting the beats per minute (BPM), and tapping to set the BPM.
// When the start button is clicked, if the metronome is not already playing, an interval timer is set up based on the current BPM value. At each interval, an oscillator node is created and started to produce a sound at 1000 Hz for 0.025 seconds. A visual indicator (circle) also briefly changes opacity.
// When the stop button is clicked, if the metronome is playing, it stops by clearing the interval timer.
// Update BPM value when user changes input field value
// If the metronome is playing and the new BPM value is different from the previous one, update the interval timer to reflect the new BPM value
// A timeout is added to prevent immediate changes in BPM from interfering with the current interval timer
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
// Get the start, stop buttons and circle element from the DOM

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var circle = document.querySelector(".circle");


// Start playing the metronome when start button is clicked.
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
// This lights up the circle and sets a timeout with the interval to half the time of the beat, meaning the circle will become transparent again halfway through the current beat.
      circle.style.opacity = "1.0";
      setTimeout(function () {
        circle.style.opacity = "0.0";
      }, interval / 2);
    }, interval);
// Indicates that the metronome started playing
    isPlaying = true;
  }
});

// Stop playing the metronome when stop button is clicked
stopButton.addEventListener("click", function () {
  if (isPlaying) {
    clearInterval(timer);
    isPlaying = false;
    circle.style.opacity = "0.0";
  }
});
/*
This function updates the metronome's interval based on the user's input
It clears the current timer and sets a new one with the updated interval
It also creates an oscillator and connects it to the gain node, which is connected to the destination (the speakers)
The oscillator's frequency is set to 1000 Hz, which will produce a click sound
After starting the oscillator, it will stop after a specified duration
The circle element's opacity is set to 1 to indicate the start of a beat, and then set to 0 after half the interval to indicate the end of a beat
*/
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
// The tap button allows users to tap in time with their desired BPM. Each time it’s clicked, it records the current time in an array (tapTimes). If more than two taps have been recorded within two seconds (determined by a timeout), it calculates an average interval between taps and sets the BPM value accordingly.
// The tapButton variable is assigned to the element with the ID “tap”. An empty array tapTimes and a variable tapTimer are also declared.
// An event listener is added to the tap button for click events. When clicked, the current time in milliseconds since January 1, 1970 (obtained using Date.now()) is pushed to the tapTimes array. Any existing timeout set by tapTimer is cleared using clearTimeout().
// If there are more than two times in the tapTimes array, it calculates an average interval between taps. This is done by looping through the array starting from index 1 and adding up the differences between each time and its previous time. The total difference is then divided by one less than the number of times to get an average interval in milliseconds.
// The BPM value is then calculated by dividing 60000 (the number of milliseconds in a minute) by this average interval and rounding to the nearest integer. The BPM input field’s value is updated with this calculated BPM.
// A timeout is set using setTimeout() to clear out the tapTimes array after two seconds have passed since the last tap. This allows users to start over with a new series of taps if they pause for more than two seconds between taps.
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

// Increase and decrease BPM value using buttons
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

// Update BPM input field value
function updateBpmValue(value) {
  bpmInput.value = value;
}

// Focus BPM input field when clicked (useful on mobile)
bpmInput.addEventListener("click", function () {
  this.focus();
});
