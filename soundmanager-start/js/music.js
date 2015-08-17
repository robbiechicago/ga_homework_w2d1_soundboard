soundManager.setup({
  url: '/swf/', 
  flashVersion: 9,
  onready: function() {
    createListeners()
  }
  });

// var sounds = {
//   id: "sound1",
//   url: "sounds/ladyboys.mp3"
// }

function createListeners() {
  var sb1 = document.getElementById('sound1').addEventListener('click', function() {
    playSound("ladyboys.mp3");
  });
  var sb2 = document.getElementById('sound2').addEventListener('click', function() {
    playSound("alice.mp3");
  });
  var sb3 = document.getElementById('sound3').addEventListener('click', function() {
    playSound("breathe.mp3");
  });
  var sb4 = document.getElementById('sound4').addEventListener('click', function() {
    playSound("invented_skip.mp3");
  });
  var sb5 = document.getElementById('sound5').addEventListener('click', function() {
    playSound("226.mp3");
  });
  var sb6 = document.getElementById('sound6').addEventListener('click', function() {
    playSound("same_time_tomorrow.mp3");
  });
  var sb7 = document.getElementById('sound7').addEventListener('click', function() {
    playSound("scum.mp3");
  });
  var sb8 = document.getElementById('sound8').addEventListener('click', function() {
    playSound("sworn_car.mp3");
  });
  var sb9 = document.getElementById('sound9').addEventListener('click', function() {
    playSound("thighs_of_virgin.mp3");
  });
  var sb10 = document.getElementById('sound10').addEventListener('click', function() {
    playSound("why_do_birds.mp3");
  });
}

var sounds 

function playSound(file) {
    var mySound = soundManager.createSound({
      id: mySound,
      url: 'sounds/' + file
    });
    mySound.play();
}







