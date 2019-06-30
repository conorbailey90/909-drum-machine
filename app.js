console.log("Thanks for using this 909 drum machine!");

// 909 drum machine samples

const samples = {
  A: { name: "Kick", sound: "./clean/bd01.wav" },
  S: { name: "Clap", sound: "./clean/cp01.wav" },
  D: { name: "Hi Hat", sound: "./clean/hh01.wav" },
  F: { name: "Hi Tom", sound: "./clean/ht01.wav" },
  G: { name: "Mid Tom", sound: "./clean/mt01.wav" },
  H: { name: "Low Tom", sound: "./clean/lt01.wav" },
  J: { name: "Open Hat", sound: "./clean/oh01.wav" },
  K: { name: "Ride", sound: "./clean/rd01.wav" }
};

const machine = document.getElementById("machine");

// Render the drum machine to the browser
function construct() {
  for (key in samples) {
    var drumPad = document.createElement("div");
    drumPad.classList.add("pad");

    let h2 = document.createElement("h2");
    h2.textContent = key;
    let span = document.createElement("span");
    span.textContent = samples[key].name;

    drumPad.appendChild(h2);
    drumPad.appendChild(span);

    machine.appendChild(drumPad);
    samples[key].el = drumPad;

    drumPad.addEventListener("click", function(e) {
      var key = e.currentTarget.querySelector("h2").textContent;
      playPad(key);
    });
  }
}

function playPad(key) {
  // Initiate audio
  var audio = new Audio();
  audio.src = samples[key].sound;
  audio.play();

  samples[key].el.style.animation = "pad-animation 0.1s";

  samples[key].el.addEventListener("animationend", removeAnimation);
}

function removeAnimation(e) {
  e.currentTarget.style.animation = "none";
}

window.addEventListener("keydown", function(e) {
  playPad(e.key.toUpperCase());
});

construct();
