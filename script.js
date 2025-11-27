const pad1 = document.getElementById("pad1");
const audioA = document.getElementById("A");
const pad2 = document.getElementById("pad2");
const audioZ = document.getElementById("Z");
const pad3 = document.getElementById("pad3");
const audioE = document.getElementById("E");
const pad4 = document.getElementById("pad4");
const audioQ = document.getElementById("Q");
const pad5 = document.getElementById("pad5");
const audioS = document.getElementById("S");
const pad6 = document.getElementById("pad6");
const audioD = document.getElementById("D");
const pad7 = document.getElementById("pad7");
const audioW = document.getElementById("W");
const pad8 = document.getElementById("pad8");
const audioX = document.getElementById("X");
const pad9 = document.getElementById("pad9");
const audioC = document.getElementById("C");
const display = document.getElementById("display");

pad1.addEventListener("click", () => {
  // pad1.classList.add("active");
  audioA.currentTime = 0;
  audioA.play();
  display.textContent = getFileName(audioA);
});
pad2.addEventListener("click", () => {
  audioZ.currentTime = 0;
  audioZ.play();
  display.textContent = getFileName(audioZ);
});
pad3.addEventListener("click", () => {
  audioE.currentTime = 0;
  audioE.play();
  display.textContent = getFileName(audioE);
});
pad4.addEventListener("click", () => {
  audioQ.currentTime = 0;
  audioQ.play();
  display.textContent = getFileName(audioQ);
});
pad5.addEventListener("click", () => {
  audioS.currentTime = 0;
  audioS.play();
  display.textContent = getFileName(audioS);
});
pad6.addEventListener("click", () => {
  audioD.currentTime = 0;
  audioD.play();
  display.textContent = getFileName(audioD);
});
pad7.addEventListener("click", () => {
  audioW.currentTime = 0;
  audioW.play();
  display.textContent = getFileName(audioW);
});
pad8.addEventListener("click", () => {
  audioX.currentTime = 0;
  audioX.play();
  display.textContent = getFileName(audioX);
});
pad9.addEventListener("click", () => {
  audioC.currentTime = 0;
  audioC.play();
  display.textContent = getFileName(audioC);
});

function getFileName(audioFile){
  const src = audioFile.src;
  const srcArray = src.split('/');
  const fileNameWithExtension = srcArray[srcArray.length - 1];
  const fileName = fileNameWithExtension.replace('.wav', '');
  return fileName;
}


const drumPad = document.querySelectorAll(".drum-pad");
let padArray = []
drumPad.forEach(pad => {
  padArray.push(pad.textContent)
});

const keyToPadId = {
  "A": "pad1",
  "Z": "pad2",
  "E": "pad3",
  "Q": "pad4",
  "S": "pad5",
  "D": "pad6",
  "W": "pad7",
  "X": "pad8",
  "C": "pad9"
};

document.addEventListener("keydown", (event) =>{
  const key = event.key.toUpperCase();
  if(padArray.includes(key)){
    const audioToPlay = document.getElementById(key);
    const pad = keyToPadId[key];
    audioToPlay.currentTime = 0;
    audioToPlay.play();
    display.textContent = getFileName(audioToPlay);
    const padElement = document.getElementById(pad);
    padElement.classList.add("playing");
  }
});

function removePlayingClass(pad){
  pad.classList.remove("playing");
}

document.addEventListener("keyup", () => {
  drumPad.forEach(pad => {
    removePlayingClass(pad);
  });
});
