// 	MAC: Command+Option+J	WINDOWS: Control+Shift+J

var aud = document.createElement("audio");
aud.setAttribute("src", "loud-alarm-buzzer.mp3");
aud.setAttribute("preload", "auto");
aud.loop = true;
var time = 0.17;
var timeout;


function init() {
  document.body.appendChild(aud);
  document.addEventListener("mousemove", clearThisTimeout);
  document.addEventListener("keypress", clearThisTimeout);
  var m = prompt("How many minutes?", "0.1");
  if (m === "quit") {
    quit();
  }
  else {
    startTimeout(m);
  }
}

var clearThisTimeout = function() {
  clearTimeout(timeout);
  startTimeout(time);
}

function startTimeout(t) {
  setTime(t);
  timeout = setTimeout(function() {
    shook(aud);
  }, setTime(time));
}

function shook(a) {
  clearTimeout(timeout);
  a.play();
  alert("stay awake");
  a.pause();
  a.currentTime = 0;
  var m = prompt("How many minutes?", "0.1");
  if (m === "quit") {
    quit();
  }
  else {
    startTimeout(m);
  }
}

function setTime(t) {
  time = t;
  return parseInt(t * 60000);
}

function quit() {
  console.log("goodbye and goodnight <3");
  aud.pause();
  clearTimeout(timeout);
  document.removeEventListener("mousemove", clearThisTimeout);
  document.removeEventListener("keypress", clearThisTimeout);
  aud.remove();
}
