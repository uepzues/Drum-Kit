const drums = document.querySelectorAll(".drum");

drums.forEach(function (element) {
  element.addEventListener("click", function () {
    const drumClick = this.innerHTML;
    playDrum(drumClick);
    btnAnim(drumClick);
    glitch(drumClick);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key) {
    playDrum(event.key);
    btnAnim(event.key);
    glitch(event.key);
  }
});

// animation for title
function glitch() {
  const header = document.querySelector(".heading");
  const image = document.querySelector(".drumImg");

  image.classList.add("move");
  header.classList.add("click");
  setTimeout(() => {
    header.classList.remove("click");
    image.classList.remove("move");
  }, 250);
}

//button animation
function btnAnim(key) {
  const btn = document.querySelector(`.${key}`);

  if (btn) {
    btn.classList.add("pressed", "letters");
    setTimeout(() => {
      btn.classList.remove("pressed", "letters");
    }, 250);
  }
}

// audio when pressed
function playDrum(key) {
  const drumSound = beat(key);
  if (drumSound) {
    const audio = new Audio(`assets/audio/${drumSound}.mp3`);
    audio.play();
  }
}

function beat(key) {
  switch (key) {
    case "w":
      return "snare";
    case "a":
      return "tom-1";
    case "s":
      return "tom-2";
    case "d":
      return "tom-3";
    case "j":
      return "tom-4";
    case "k":
      return "kick";
    case "l":
      return "crash";
    default:
      return null;
  }
}
