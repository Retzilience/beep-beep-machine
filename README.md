# beep-beep-machine
# b.b.m.2 - A Metronome

b.b.m.2 is a metronome web application designed to help musicians keep a steady tempo while practicing or performing. It produces an audible sound at regular intervals.<br><br>
The tool uses HTML, CSS, and JavaScript to render a user interface that includes a large display of the current tempo, buttons to adjust the tempo, and buttons to start/stop/tap the metronome. The user can also tap the "Tap Tempo" button to manually set the tempo by tapping the button in time with the desired beat when tapped with 4 or more consecutive taps.
<br><br>
The CSS code provides a responsive design that adapts to various screen sizes and sets the style for all of the user interface elements. The JavaScript code defines variables and functions to manage the behavior of the metronome tool. The metronome sound is generated using the Web Audio API, which creates an oscillator object that generates a tone at a specific frequency for a specified duration.

## Features

- **Set BPM directly or increment/decrement it using buttons:** Users can enter a BPM value directly into an input field or use "+" and "-" buttons to increment/decrement the BPM value.
- **Calculate BPM based on user taps:** Users can tap a "Tap Tempo" button in time with their desired tempo and the metronome will calculate and set the corresponding BPM value.
- **Audible sound for each beat:** The metronome uses an oscillator from the Web Audio API to produce an audible sound for each beat.
- **Visual aids to represent the BPM:** A circle visual indicator changes opacity in time with the metronome beats to provide a visual representation of the tempo.

## Technical Details

The metronome is implemented using HTML, CSS, and JavaScript. JavaScript is used in several ways, such as:

- Adding event listeners to buttons and other elements to respond to user interactions
- Using functions to create timers for clearing old tap times and playing beats at regular intervals
- Using the Web Audio API to create an oscillator and control its frequency and volume
- Creating and syncing visual elements to the tempo beep

### The code is designed to be simple yet fine-tuned to deliver crucial functionality, ergonomy, and visual accessibility. It's a useful tool for musicians as well as a valuable resource for developers looking to study how such an application can be implemented.

#### This is a personal project and exercise. While the primary aim is to serve personal purposes, the process, code, and deployment are welcomed to be used as a tool in deployed form and as study material in code form. I hope you find it useful!

#### b.b.m.2 can be accessed <a href="https://retzilience.github.io/beep-beep-machine/" target="_blank">HERE</a></h2>

##### The JavaScript is extensively commented <a href="https://github.com/Retzilience/beep-beep-machine/blob/main/comment/script.js" target="_blank">Here</a></h2>
###### You can also find the commented style.css and index.html <a href="https://github.com/Retzilience/beep-beep-machine/tree/main/comment" target="_blank">Here</a>
<br><br>

```
Table of Contents:

HTML
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

CSS
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

JavaScript
  touch/gesture event listeners
  Web Audio API (AudioContext, GainNode, Oscillator)
  variable declarations (duration, beat, isPlaying, bpmInput)
  event listeners (bpmInput)
  functions (startStop, tapTempo, updateTempo)
```



<h1>これはメトロノームです</h1>

<p>メトロノームは、演奏や練習中に音楽家が一定のテンポを保つのに役立つ道具です。 定期的な間隔で聴覚的な音を出し、ビート/分（BPM）の数はユーザーによって調整可能です。</p>

<h2>いくつかの機能が含まれています</h2>
<ul>
  <li>BPMを直接設定するか、ボタンを使用して増減する機能</li>
  <li>ユーザーのタップに基づいてBPMを計算する機能</li>
  <li>各ビートごとに聴覚的な音を生成するためのオシレーターの使用</li>
</ul>

<h2>JavaScriptの使用</h2>
<p>JavaScriptは、次の形式で複数使用されます。</p>
<ul>
  <li>ボタンやその他の要素にイベントリスナーを追加して、ユーザー操作に応答します。</li>
  <li>setTimeoutおよびsetIntervalを使用して、古いタップ時間をクリアし、定期的な間隔でビートを再生するためのタイマーを作成します。</li>
  <li>Web Audio API を使用してオシレーターを作成し、その周波数と音量を制御します。</li>
</ul>

<p>これは個人的なプロジェクトとエクササイズです。 主な目的は個人的な目的に役立つことですが、プロセス、コード、およびデプロイメントはデプロイされた形式でツールとして使用されることも歓迎されます。</p>



<h1>Este é um metrônomo</h1>

<p>O metrônomo é uma ferramenta que ajuda os músicos a manter um ritmo constante enquanto praticam ou se apresentam. Ele produz um som audível em intervalos regulares, com o número de batidas por minuto (BPM) sendo ajustável pelo usuário.</p>

<h2>Algumas das características que inclui</h2>
<ul>
  <li>A capacidade de definir o BPM diretamente ou incrementar/decrementar usando botões</li>
  <li>A capacidade de calcular o BPM com base nas batidas do usuário</li>
  <li>O uso de um oscilador para produzir um som audível para cada batida</li>
</ul>

<h2>Uso do JavaScript</h2>
<p>O JavaScript é usado em várias formas como:</p>
<ul>
  <li>Adicionar ouvintes de eventos a botões e outros elementos para responder às interações do usuário</li>
  <li>Usando setTimeout e setInterval para criar temporizadores para limpar tempos antigos de toque e tocar batidas em intervalos regulares</li>
  <li>Usando a API Web Audio para criar um oscilador e controlar sua frequência e volume</li>
</ul>

<p>Este é um projeto pessoal e exercício. Embora o objetivo principal seja atender a fins pessoais, o processo, código e implantação são bem-vindos para serem usados como uma ferramenta na forma implantada e como material de estudo na forma de código.</p>

<h1>Este es un metrónomo</h1>

<p>El metrónomo es una herramienta que ayuda a los músicos a mantener un tempo constante mientras practican o actúan. Produce un sonido audible en intervalos regulares, con el número de beats por minuto (BPM) ajustable por el usuario.</p>

<h2>Algunas de las características que incluye</h2>
<ul>
  <li>La capacidad de establecer el BPM directamente o incrementarlo/decrementarlo usando botones.</li>
  <li>La capacidad de calcular el BPM en función del toque del usuario.</li>
  <li>El uso de un oscilador para producir un sonido audible en cada beat.</li>
</ul>

<h2>Uso del JavaScript</h2>
<p>JavaScript se usa en varias formas como:</p>
<ul>
  <li>Agregar escuchas de eventos a botones y otros elementos para responder a las interacciones del usuario.</li>
  <li>Usando setTimeout y setInterval para crear temporizadores para borrar tiempos antiguos y reproducir beats en intervalos regulares.</li>
  <li>Usando la API Web Audio para crear un oscilador y controlar su frecuencia y volumen.</li>
</ul>

<p>Este es un proyecto personal y ejercicio. Si bien el objetivo principal es servir a propósitos personales, se da la bienvenida al proceso, código y despliegue como herramienta en forma desplegada y como material de estudio en forma de código.</p>



<h1>이것은 메트로놈입니다</h1>

<p>메트로놈은 연주나 연습 중 음악가들이 일정한 템포를 유지하는 데 도움이 되는 도구입니다. 정기적인 간격으로 청각적인 소리를 내며 사용자가 조절할 수 있는 분당 비트 수 (BPM) 입니다.</p>

<h2>포함하는 몇 가지 기능</h2>
<ul>
  <li>BPM을 직접 설정하거나 버튼을 사용하여 증가/감소시키는 기능</li>
  <li>사용자 탭에 따라 BPM을 계산하는 기능</li>
  <li>각 비트마다 청각적인 소리를 생성하기 위해 오실레이터 사용</li>
</ul>

<h2>JavaScript 사용</h2>
<p>JavaScript는 다음과 같은 여러 형태로 사용됩니다.</p>
<ul>
  <li>버튼 및 기타 요소에 이벤트 리스너 추가하여 사용자 상호 작용에 응답</li>
  <li>setTimeout 및 setInterval을 사용하여 이전 탭 시간을 지우고 정기적인 간격으로 비트 재생을위한 타이머 생성</li>
  <li>Web Audio API를 사용하여 오실레이터 생성 및 주파수 및 볼륨 제어</li>
</ul>

<p>개인 프로젝트와 운동입니다. 주요 목표는 개인적인 목적에 부합하는 것이지만 프로세스, 코드 및 배포는 배포된 형태의 도구로서와 코드 형태의 학습 자료로서의 사용도 환영합니다.</p>
