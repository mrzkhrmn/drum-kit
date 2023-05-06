const crashSound = new Audio("./sounds/crash.mp3");
const kickBassSound = new Audio("./sounds/kick-bass.mp3");
const snareSound = new Audio("./sounds/snare.mp3");
const tom1Sound = new Audio("./sounds/tom-1.mp3");
const tom2Sound = new Audio("./sounds/tom-2.mp3");
const tom3Sound = new Audio("./sounds/tom-3.mp3");
const tom4Sound = new Audio("./sounds/tom-4.mp3");

var numberOfDrums = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll(".drum");
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      makeSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      playSound(tom1Sound);
      break;
    case "a":
      playSound(tom2Sound);
      break;
    case "s":
      playSound(tom3Sound);
      break;
    case "d":
      playSound(tom4Sound);
      break;
    case "j":
      playSound(crashSound);
      break;
    case "k":
      playSound(kickBassSound);
      break;
    case "l":
      playSound(snareSound);
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed")
    setTimeout(() => {
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 150)
}

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

/*if(drums[i].classList.contains("w")) {
    drums[i].addEventListener("click", function() {
        crashSound.play();
    })
}
if(drums[i].classList.contains("a")) {
    drums[i].addEventListener("click", function() {
        kickBassSound.play();
    })
}
if(drums[i].classList.contains("s")) {
    drums[i].addEventListener("click", function() {
        snareSound.play();
    })
}
if(drums[i].classList.contains("d")) {
    drums[i].addEventListener("click", function() {
        tom1Sound.play();
    })
}
if(drums[i].classList.contains("j")) {
    drums[i].addEventListener("click", function() {
        tom2Sound.play();
    })
}

if(drums[i].classList.contains("k")) {
    drums[i].addEventListener("click", function() {
        tom3Sound.play();
    })
}

if(drums[i].classList.contains("l")) {
    drums[i].addEventListener("click", function() {
        tom4Sound.play();
    })
}*/
