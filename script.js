// Global Variables

var myVar;
var time;
var mistakes;

// global constants
var clueHoldTime //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//end global constants

var tonePlaying = false;
var gameLength = 10;
var volume = 0.5;  //must be between 0.0 and 1.0
// Make a random pattern
var pattern = [];
for (var i = 0; i < gameLength; i++) {
	pattern.push(Math.ceil(Math.random() * 4));
}

var progress = 0;
var gamePlaying = false;
var guessCounter = 0;

function startGame(){
    //initialize game variables
    clueHoldTime = 825;
    mistakes = 0;
    progress = 0;
    gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  time = 10;
}

function stopGame(){
  gamePlaying = false;
  clearInterval(myVar);
  time = 10;
  document.getElementById("demo").innerHTML = time;
  stopTone();
  pattern = [];
  for (var i = 0; i < gameLength; i++) {
	  pattern.push(Math.ceil(Math.random() * 4));
  }
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 50;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      } else {
        // Pattern was correct, so add next segment.
        progress++;
        playClueSequence();
        time = 10;
      }
    } else {
      // so far they are right, now onto the next guess
      guessCounter++;
    }
  } else {
    // since you guessed wrong, you lost
    mistakes++;
    if(mistakes == 3){
      loseGame();
      return;
    }
    playClueSequence();
    time = 10;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function randomNumber(number){
  return Math.floor(Math.random() * number);
}

function startTimer() {
  myVar = setInterval(decreaseTime, 1000);
}

function stopTimer(){
	clearInterval(myVar);
    time = 10;
    document.getElementById("demo").innerHTML = time;
}

function decreaseTime() {
  if(time == 0){
    clearInterval(myVar);
    loseGame();
    time = 10;
    document.getElementById("demo").innerHTML = time;
    return;
  }
  time -= 1;
  document.getElementById("demo").innerHTML = time;
}

// Sound Synthesis Functions
const freqMap = {
  1: 240,
  2: 300,
  3: 370,
  4: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
} 
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)