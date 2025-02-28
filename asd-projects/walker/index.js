/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  }
  // Game Item Objects
  var walker = {
    positionx: 0,
    positiony: 0,
    speedx: 0,
    speedy: 0,
  }




  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
repositionGameItem()
wallCollision()
redrawGameItem()
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedx = -5
    }
    if (event.which === KEY.RIGHT) {
      walker.speedx = 5
    }
    if (event.which === KEY.UP) {
      walker.speedy = -5
    }
    if (event.which === KEY.DOWN) {
      walker.speedy = 5
    }
  }
function handleKeyUp(event){ 
  if (event.which === KEY.LEFT) {
    walker.speedx = 0
  }
  if (event.which === KEY.RIGHT) {
    walker.speedx = 0
  }
  if (event.which === KEY.UP) {
    walker.speedy = 0
  }
  if (event.which === KEY.DOWN) {
    walker.speedy = 0
  }
}
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }


function repositionGameItem() {
  walker.positionx += walker.speedx
  walker.positiony += walker.speedy
}
function redrawGameItem() {
  $("#walker").css("left", walker.positionx)
  $("#walker").css("top", walker.positiony)
}
function wallCollision(){
  if(walker.positionx >= $("#board").width()-45){
    walker.positionx -= walker.speedx
  }
  if(walker.positionx <= 0){
    walker.positionx -= walker.speedx
  }
  if(walker.positiony <= 0){
    walker.positiony -= walker.speedy
  }
  if(walker.positiony >= $("#board").height()-45){
    walker.positiony -= walker.speedy
}
}
}