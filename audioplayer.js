let audios;
let slider;
let a;
let b;
function preload(params) {
  audios = createAudio("ሮፍናን - ሦሥት III ROPHNAN - SOST.mp4");
  slider = createSlider(a, b, slider.value());
}
function setup() {
  createCanvas(500, 400);
  background(200);
}

function draw(params) {
  audios.showControls();

  a = audios.time();
  b = audios.time();

  console.log(floor(a / 60), floor(b % 60));
}
