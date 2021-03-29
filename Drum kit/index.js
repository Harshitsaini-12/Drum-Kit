var numberOfDrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// pressing keybrd button
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kickbass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom2.mp3");
      tom2.play();
      break;

    case "k":
      var tom4 = new Audio("./sounds/tom3.mp3");
      tom4.play();
      break;

    case "l":
      var tom3 = new Audio("./sounds/tom4.mp3");
      tom3.play();
      break;

    default:
      console.log("buttonInner");
      break;
  }
}

function buttonAnimation(currentKey) {
  var active = document.querySelector("." + currentKey);

  active.classList.add("pressed");

  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
