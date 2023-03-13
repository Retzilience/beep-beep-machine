
## Table of Contents v2.03:

### HTML
```
  doctype declaration
  HTML element
  head element
  meta element (charset, viewport)
  title element
  link element (stylesheet)
  body element
  h1 element
  div element (circle)
  button elements (bpm decrease/increase, start/stop, tap)
  input element (bpm)
  script element (JavaScript)
  ```

### CSS
```
  background-color
  font-family
  text-align
  margin
  padding
  color
  media queries
  input styling
  button styling
  h1 styling
  circle styling
  touch-action
  overscroll-behavior
```
### JavaScript
<table><thead><tr><th>Element</th><th>Description</th></tr></thead><tbody><tr><td><code>document.addEventListener("gesturestart", function (event) { event.preventDefault(); });</code></td><td>Prevents the browser from responding to gestures</td></tr><tr><td><code>document.addEventListener("touchstart", function (event) { if (event.touches.length &gt; 1) { event.preventDefault(); } }, { passive: false });</code></td><td>Prevents the browser from responding to multiple touch events</td></tr><tr><td><code>document.addEventListener("gesturestart", function (e) { e.preventDefault(); });</code></td><td>Prevents the browser from responding to gestures</td></tr><tr><td><code>var audioContext = new AudioContext();</code></td><td>Creates an instance of AudioContext</td></tr><tr><td><code>var gainNode = audioContext.createGain();</code></td><td>Creates a GainNode</td></tr><tr><td><code>gainNode.connect(audioContext.destination);</code></td><td>Connects the GainNode to the AudioContext destination</td></tr><tr><td><code>var duration = 0.025;</code></td><td>Defines the duration of the metronome beat</td></tr><tr><td><code>var beat = audioContext.createOscillator();</code></td><td>Creates an OscillatorNode</td></tr><tr><td><code>beat.frequency.value = 1000;</code></td><td>Sets the frequency of the OscillatorNode to 1000 Hz</td></tr><tr><td><code>beat.connect(gainNode);</code></td><td>Connects the OscillatorNode to the GainNode</td></tr><tr><td><code>beat.start();</code></td><td>Starts the OscillatorNode</td></tr><tr><td><code>beat.stop(audioContext.currentTime + duration);</code></td><td>Stops the OscillatorNode after the defined duration</td></tr><tr><td><code>var isPlaying = false;</code></td><td>Defines the initial state of the metronome</td></tr><tr><td><code>var bpmInput = document.getElementById("bpm");</code></td><td>Gets the input element for the BPM value</td></tr><tr><td><code>bpmInput.addEventListener("input", function () { ... });</code></td><td>Listens for changes to the BPM input</td></tr><tr><td><code>var startButton = document.getElementById("start");</code></td><td>Gets the start button element</td></tr><tr><td><code>var stopButton = document.getElementById("stop");</code></td><td>Gets the stop button element</td></tr><tr><td><code>var circle = document.querySelector(".circle");</code></td><td>Gets the circle element for the visual metronome</td></tr><tr><td><code>startButton.addEventListener("click", function () { ... });</code></td><td>Listens for the start button to be clicked</td></tr><tr><td><code>stopButton.addEventListener("click", function () { ... });</code></td><td>Listens for the stop button to be clicked</td></tr><tr><td><code>function updateMetronomeInterval() { ... }</code></td><td>Updates the interval of the metronome</td></tr><tr><td><code>var tapButton = document.getElementById("tap");</code></td><td>Gets the tap button element</td></tr><tr><td><code>var tapTimes = [];</code></td><td>Stores the times at which the tap button is pressed</td></tr><tr><td><code>var tapTimer;</code></td><td>Stores a timeout for clearing the tap times</td></tr><tr><td><code>tapButton.addEventListener("click", function () { ... });</code></td><td>Listens for the tap button to be clicked</td></tr><tr><td><code>var bpmDecreaseButton = document.getElementById("bpm-decrease");</code></td><td>Gets the button element for decreasing the BPM</td></tr><tr><td><code>var bpmIncreaseButton = document.getElementById("bpm-increase");</code></td><td>Gets the button element for increasing the BPM</td></tr><tr><td><code>bpmDecreaseButton.addEventListener("click", function () { ... });</code></td><td>Listens for the BPM decrease button to be clicked</td></tr><tr><td><code>bpmIncreaseButton.addEventListener("click", function () { ... });</code></td><td>Listens for the BPM increase button to be clicked</td></tr><tr><td><code>function updateBpmValue(value) { ... }</code></td><td>Updates the BPM value</td></tr><tr><td><code>bpmInput.addEventListener("click", function () { ... });</code></td><td>Listens for the BPM input to be clicked</td></tr></tbody></table>

