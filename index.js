const drums = document.querySelectorAll(".drum");

drums.forEach(function (element) {
  element.addEventListener("click", function () {
    const drumClick = this.innerHTML;
    beat(drumClick);
    btnAnim(drumClick);
    glitch(drumClick);
  });
});

document.addEventListener("keydown", function (event) {
  beat(event.key);
  btnAnim(event.key);
  glitch(event.key);
});

// animation for title
function glitch() {
  const header = document.querySelector(".heading");
  const image = document.querySelector(".drumImg");

  image.classList.add("move");
  header.classList.add("click");
  setTimeout(function () {
    header.classList.remove("click");
    image.classList.remove("move");
  }, 250);
}

//button animation
function btnAnim(currentKey) {
  const btn = document.querySelector("." + currentKey);

  if (btn) {
    btn.classList.add("pressed", "letters");
    setTimeout(function () {
      btn.classList.remove("pressed", "letters");
    }, 250);
  }
}

// audio when pressed
function beat(key) {
  switch (key) {
    case "w":
      let audioW = new Audio("assets/audio/snare.mp3");
      audioW.play();
      break;
    case "a":
      let audioA = new Audio("assets/audio/tom-1.mp3");
      audioA.play();
      break;
    case "s":
      let audioS = new Audio("assets/audio/tom-2.mp3");
      audioS.play();
      break;
    case "d":
      let audioD = new Audio("assets/audio/tom-3.mp3");
      audioD.play();
      break;
    case "j":
      let audioJ = new Audio("assets/audio/tom-4.mp3");
      audioJ.play();
      break;
    case "k":
      let audioK = new Audio("assets/audio/kick.mp3");
      audioK.play();
      break;
    case "l":
      let audioL = new Audio("assets/audio/crash.mp3");
      audioL.play();
      break;

    default:
      return false;
  }
}
