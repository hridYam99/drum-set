// for touch
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var button = this.textContent;
    makeSount(button);
    addAnimation(button);
  });
}

//for button press
document.addEventListener("keypress",function(event){
    var buttonPress= event.key;
    makeSount(buttonPress);
    addAnimation(buttonPress);
});

function makeSount(key){
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:

  }
}


function addAnimation(event){
  var activeButton=document.querySelector("."+event);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
