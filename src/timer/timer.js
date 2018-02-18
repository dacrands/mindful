var seconds = 0,
    minutes = 25,
    shortSession = 5,
    longSession = 25,
    session = longSession;

var  startButton    = document.querySelector("#start"),
     stopButton     = document.querySelector("#stop"),
     restartButton  = document.querySelector("#restart"),
     increaseButton = document.querySelector("#increase"),
     decreaseButton = document.querySelector("#decrease"),
     message        = document.querySelector("#message"),
     begin;

    
document.querySelector("#seconds").innerHTML = "0" + seconds;
document.querySelector("#minutes").innerHTML = minutes;

//  SELECTOR
const selector = document.querySelector('select');

selector.addEventListener('change', function(e){
  minutes = e.target.value;
  seconds = 0;
  document.querySelector("#minutes").innerHTML = e.target.value;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
});

stopButton.disabled = true;
stopButton.classList.add("far-disabled");

var sound = new Howl({
  src: ['audio/bubbles.mp3'],
  loop: true,
  volume: 0.5
});



function increase(){
    decreaseButton.disabled = false;
    session = parseInt(document.querySelector("#minutes").innerHTML) + 1;
    minutes = session;
    seconds = 0;
    document.querySelector("#minutes").innerHTML = session;
    document.querySelector("#seconds").innerHTML = "0" + seconds;
}

function decrease(){
  if (session > 1) {
    session = parseInt(document.querySelector("#minutes").innerHTML) - 1;
    minutes = session;
    seconds = 0;
    document.querySelector("#minutes").innerHTML = session;
    document.querySelector("#seconds").innerHTML = "0" + seconds;
  } else {
    decreaseButton.disabled = true;
  }
}

function appendTime(){
  seconds--;
  if (seconds <= 0 && minutes <= 0) {
    sound.play();
    stop();
  }

  if (seconds <= 9) {
    document.querySelector("#seconds").innerHTML = "0" + seconds;
  } else {
    document.querySelector("#seconds").innerHTML = seconds;
  }

  if (seconds < 0) {
    seconds = 59;
    minutes--;
    document.querySelector("#seconds").innerHTML = seconds;
    if (minutes < 9) {
      document.querySelector("#minutes").innerHTML = "0" + minutes;
    } else {
      document.querySelector("#minutes").innerHTML = minutes;
    }
  }
}


function start(){
    if(!begin){
      decreaseButton.classList.add("far-disabled");
      increaseButton.classList.add("far-disabled");
      startButton.classList.add("far-disabled");
      restartButton.classList.add("far-disabled");
      selector.classList.add('far-disabled');
      stopButton.classList.remove("far-disabled");
      restartButton.disabled = true;
      decreaseButton.disabled = true;
      increaseButton.disabled = true;
      startButton.disabled = true;
      stopButton.disabled = false;
      selector.disabled = true;
      begin = setInterval(appendTime, 1000);
    }
}

function stop(){
  if (begin) {
    decreaseButton.classList.remove("far-disabled");
    increaseButton.classList.remove("far-disabled");
    restartButton.classList.remove("far-disabled");
    startButton.classList.remove("far-disabled");
    selector.classList.remove('far-disabled');
    stopButton.classList.add("far-disabled");
    restartButton.disabled = false;
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    startButton.disabled = false;
    selector.disabled = false;
    stopButton.disabled = true;
    if (seconds <= 0 && minutes <= 0) {
      startButton.disabled = true;
    }
    clearInterval(begin);
    begin = null;
  }
}

function restart(){
  sound.stop();
  if (begin) {
    clearInterval(begin);
    begin = null;
  }
  seconds = 0;
  minutes = session;
  decreaseButton.disabled = false;
  increaseButton.disabled = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  document.querySelector("#seconds").innerHTML = "0" + seconds;
  document.querySelector("#minutes").innerHTML = minutes;
}

startButton.onclick = start;
stopButton.onclick = stop;
restartButton.onclick = restart;

increaseButton.onclick = increase;
decreaseButton.onclick = decrease;
